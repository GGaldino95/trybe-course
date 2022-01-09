import sys


def txt_importer(path_file):
    try:
        if not str(path_file).lower().endswith(".txt"):
            print("Formato inválido", file=sys.stderr)

        with open(path_file, "r") as data:
            return data.read().split("\n")
    except FileNotFoundError:
        print(f"Arquivo {path_file} não encontrado", file=sys.stderr)
