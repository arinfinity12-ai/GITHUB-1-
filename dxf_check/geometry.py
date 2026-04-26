"""Estrazione geometria dal DXF."""


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
