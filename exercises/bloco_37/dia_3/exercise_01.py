"""
Para cada palavra da lista, precisamos saber se os caracteres da
string são suficientes. Para isso, precisamos saber quais e quantas
letras a string tem. Podemos fazer isso criando uma hash que mapeia
a letra para a quantidade. Vamos chamar essa hash de 'alfabeto'.
Depois, precisamo iterar sobre a lista de palavras decidindo se
todas as letras da palavra estão no alfabeto, bem como se a
quantidade daquela letra é no máximo a quantidade daquela letra
disponível no alfabeto.

Um dos jeitos de resolver isso seria construir uma hash para a
palavra que guarda as quantidades de letras. Depois, seria verificar
se cada letra da palavra aparece no alfabeto; se sim, verificar se a
quantidade atende ao requisito. Mas não precisamos terminar de montar
essa segunda hash pra decidir se a palavra infringiu alguma regra.
Podemos fazer isso durante a própria construção.
(O código está com prints explicativos)
"""


def count_words(words, chars):
    ans = 0
    alphabet = {}

    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1

    print(f"Montamos o alfabeto: {alphabet}")

    for word in words:
        print(f"Analisando a palavra {word}")
        str_count = {}

        for char in word:
            if char not in alphabet:
                print(f"'{char}' não está no alfabeto. Desconsiderar palavra")
                break

            if char not in str_count:
                str_count[char] = 1
            else:
                str_count[char] += 1

                if str_count[char] > alphabet[char]:
                    print(
                      f"'{char}' ocorre com mais frequência " +
                      "do que no alfabeto. Desconsiderar"
                    )
                    break
        else:
            print(f"Considerar {word}")
            ans += len(word)

    return ans


words = ["cat", "bt", "hat", "tree", "caaat"]
chars = "atach"
print(f"Resposta final: {count_words(words, chars)}\n")


words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {count_words(words, chars)}")
