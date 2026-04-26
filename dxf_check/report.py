"""Report testuale dei controlli."""

from checks import check_contour


def print_report(contours):
    """Stampa un report leggibile dei controlli sui contorni."""
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
