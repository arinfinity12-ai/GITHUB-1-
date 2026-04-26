"""Caricamento file DXF."""

import ezdxf


def load_dxf(path):
    """Carica un file DXF e ritorna il documento ezdxf."""
    doc = ezdxf.readfile(path)
    msp = doc.modelspace()
    print(f"File caricato: {path}")
    print(f"Numero entità totali nel modelspace: {len(msp)}")
    return doc
