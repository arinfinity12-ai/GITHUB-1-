"""Caricamento file DXF con gestione errori semplice."""

import os

import ezdxf


def load_dxf(path):
    """
    Carica un file DXF e ritorna il documento ezdxf.

    Ritorna None se il file non esiste o non è un DXF valido.
    """
    if not os.path.isfile(path):
        print(f"ERRORE: file non trovato: {path}")
        return None

    try:
        doc = ezdxf.readfile(path)
    except ezdxf.DXFStructureError as e:
        print(f"ERRORE: file DXF non valido o corrotto: {e}")
        return None
    except IOError as e:
        print(f"ERRORE: impossibile leggere il file: {e}")
        return None

    msp = doc.modelspace()
    version = doc.dxfversion
    n_layers = len(doc.layers)

    print(f"File caricato: {path}")
    print(f"  Versione DXF: {version}")
    print(f"  Numero layer: {n_layers}")
    print(f"  Numero entità nel modelspace: {len(msp)}")

    return doc
