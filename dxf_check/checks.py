"""Controlli di qualità sui contorni."""

from shapely.geometry import Polygon, LineString


# Soglie dei controlli (mm)
MAX_BBOX_MM = 1000.0
MIN_AREA_MM2 = 1.0


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
