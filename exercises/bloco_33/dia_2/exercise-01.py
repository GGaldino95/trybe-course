def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


# Execução do programa:
if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)
