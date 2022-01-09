from ting_file_management.queue import Queue


def exists_word(word, instance: Queue):
    incidence_list = list()
    for element in instance._data:
        output = {
            "palavra": word,
            "arquivo": element["nome_do_arquivo"],
            "ocorrencias": list()
        }

        for index, line in enumerate(element["linhas_do_arquivo"]):
            if str(word).lower() in str(line).lower():  # tem a palavra
                word_incidence = {
                    "linha": index + 1
                }
                output["ocorrencias"].append(word_incidence)
            else:  # nao tem a palavra
                return []

        incidence_list.append(output)

    return incidence_list


def search_by_word(word, instance: Queue):
    incidence_list = list()
    for element in instance._data:
        output = {
            "palavra": word,
            "arquivo": element["nome_do_arquivo"],
            "ocorrencias": list()
        }

        for index, line in enumerate(element["linhas_do_arquivo"]):
            if str(word).lower() in str(line).lower():  # tem a palavra
                word_incidence = {
                    "linha": index + 1,
                    "conteudo": line
                }
                output["ocorrencias"].append(word_incidence)
            else:  # nao tem a palavra
                return []

        incidence_list.append(output)

    return incidence_list
