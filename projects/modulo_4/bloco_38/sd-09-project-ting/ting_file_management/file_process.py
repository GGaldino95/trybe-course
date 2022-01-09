from ting_file_management.file_management import txt_importer
from ting_file_management.queue import Queue
import sys


def process(path_file, instance: Queue):
    file_data = txt_importer(path_file)
    output = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(file_data),
        "linhas_do_arquivo": file_data
    }
    alreadyExists = False
    for element in instance._data:
        if element["nome_do_arquivo"] == output["nome_do_arquivo"]:
            alreadyExists = True
            break

    if not alreadyExists:
        instance._data.append(output)

    return print(output)


def remove(instance: Queue):
    if len(instance._data) == 0:
        return print("Não há elementos")

    path_file = instance._data[0]["nome_do_arquivo"]
    instance.dequeue()
    return print(f"Arquivo {path_file} removido com sucesso")


def file_metadata(instance: Queue, position):
    try:
        if not instance._data[position]:
            raise IndexError

        return print(instance._data[position])
    except IndexError:
        print("Posição inválida", file=sys.stderr)
