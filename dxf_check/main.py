"""DXF Quality Check MVP - punto di ingresso."""

import sys

from loader import load_dxf
from geometry import extract_contours
from report import print_report


def main():
    if len(sys.argv) < 2:
        print("Uso: python3 main.py <file.dxf>")
        sys.exit(1)

    path = sys.argv[1]
    doc = load_dxf(path)
    if doc is None:
        sys.exit(1)

    contours = extract_contours(doc)
    print(f"Contorni estratti (LWPOLYLINE/POLYLINE): {len(contours)}")
    print_report(contours)


if __name__ == "__main__":
    main()
