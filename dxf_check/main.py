"""DXF Quality Check MVP - controlla cartamodelli CAD per calzature."""

import sys
import ezdxf
from shapely.geometry import Polygon, LineString


# Soglie dei controlli (mm)
MAX_BBOX_MM = 1000.0
MIN_AREA_MM2 = 1.0


# ---------- STEP 2: caricamento DXF ----------
def load_dxf(path):
    """Carica un file DXF e ritorna il documento ezdxf."""
    doc = ezdxf.readfile(path)
    msp = doc.modelspace()
    print(f"File caricato: {path}")
    print(f"Numero entità totali nel modelspace: {len(msp)}")
    return doc


# ---------- STEP 3: estrazione geometria ----------
def extract_contours(doc):
    """Estrae LWPOLYLINE e POLYLINE come lista di dict con punti e flag chiuso."""
    msp = doc.modelspace()
    contours = []

    for entity in msp:
        dxftype = entity.dxftype()

        if dxftype == "LWPOLYLINE":
            points = [(x, y) for x, y in entity.get_points("xy")]
            closed = bool(entity.closed)
            contours.append({"type": "LWPOLYLINE", "points": points, "closed": closed})

        elif dxftype == "POLYLINE":
            points = [(v.dxf.location.x, v.dxf.location.y) for v in entity.vertices]
            closed = bool(entity.is_closed)
            contours.append({"type": "POLYLINE", "points": points, "closed": closed})

    return contours


# ---------- STEP 4: controlli qualità ----------
def check_contour(contour):
    """Esegue i 5 controlli. Ritorna lista di tuple (livello, messaggio)."""
    issues = []
    points = contour["points"]
    closed = contour["closed"]

    # 1. Contorno NON chiuso -> ERROR
    if not closed:
        issues.append(("ERROR", "contorno non chiuso"))

    # 2. Numero punti < 3 -> ERROR
    if len(points) < 3:
        issues.append(("ERROR", f"troppi pochi punti ({len(points)})"))
        # senza almeno 3 punti gli altri controlli non hanno senso
        return issues

    # 3. Bounding box troppo grande -> WARNING
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    width = max(xs) - min(xs)
    height = max(ys) - min(ys)
    if width > MAX_BBOX_MM or height > MAX_BBOX_MM:
        issues.append((
            "WARNING",
            f"bounding box troppo grande ({width:.1f} x {height:.1f} mm)",
        ))

    # 4. Area troppo piccola -> WARNING (solo per contorni chiusi)
    if closed:
        try:
            poly = Polygon(points)
            if poly.is_valid and poly.area < MIN_AREA_MM2:
                issues.append((
                    "WARNING",
                    f"area troppo piccola ({poly.area:.3f} mm²)",
                ))
        except Exception:
            pass

    # 5. Contorno auto-intersecante -> ERROR
    try:
        line_pts = points + [points[0]] if closed else points
        line = LineString(line_pts)
        if not line.is_simple:
            issues.append(("ERROR", "contorno auto-intersecante"))
    except Exception:
        pass

    return issues


# ---------- STEP 5: report ----------
def print_report(contours):
    """Stampa un report leggibile dei controlli."""
    print()
    print("=" * 60)
    print("REPORT QUALITY CHECK")
    print("=" * 60)

    total_errors = 0
    total_warnings = 0

    for i, contour in enumerate(contours):
        issues = check_contour(contour)
        n_points = len(contour["points"])
        status = "chiuso" if contour["closed"] else "aperto"

        print(f"\n[Oggetto #{i}] {contour['type']} - {n_points} punti - {status}")

        if not issues:
            print("  OK")
        else:
            for level, msg in issues:
                print(f"  {level}: {msg}")
                if level == "ERROR":
                    total_errors += 1
                else:
                    total_warnings += 1

    print()
    print("=" * 60)
    print(
        f"Totale: {len(contours)} contorni, "
        f"{total_errors} errori, {total_warnings} warning"
    )
    print("=" * 60)


def main():
    if len(sys.argv) < 2:
        print("Uso: python3 main.py <file.dxf>")
        sys.exit(1)

    path = sys.argv[1]
    doc = load_dxf(path)
    contours = extract_contours(doc)
    print(f"Contorni estratti (LWPOLYLINE/POLYLINE): {len(contours)}")
    print_report(contours)


if __name__ == "__main__":
    main()
