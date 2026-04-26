"""Genera un sample.dxf con vari contorni per testare i controlli."""

import ezdxf

doc = ezdxf.new("R2010")
msp = doc.modelspace()

# 1) Quadrato chiuso 100x100 mm -> OK
msp.add_lwpolyline(
    [(0, 0), (100, 0), (100, 100), (0, 100)],
    close=True,
)

# 2) Contorno aperto -> ERROR (non chiuso)
msp.add_lwpolyline(
    [(200, 0), (300, 0), (300, 100), (200, 100)],
    close=False,
)

# 3) Triangolino minuscolo -> WARNING (area troppo piccola)
msp.add_lwpolyline(
    [(400, 0), (400.5, 0), (400, 0.5)],
    close=True,
)

# 4) Contorno enorme 1500x1500 mm -> WARNING (bbox troppo grande)
msp.add_lwpolyline(
    [(0, 200), (1500, 200), (1500, 1700), (0, 1700)],
    close=True,
)

# 5) Contorno a forma di "8" -> ERROR (auto-intersecante)
msp.add_lwpolyline(
    [(600, 0), (700, 100), (700, 0), (600, 100)],
    close=True,
)

# 6) Solo 2 punti -> ERROR (troppi pochi punti)
msp.add_lwpolyline(
    [(800, 0), (900, 0)],
    close=False,
)

doc.saveas("sample.dxf")
print("Generato sample.dxf con 6 contorni di esempio")
