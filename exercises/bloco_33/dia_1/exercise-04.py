def find_biggest_name(names):
    biggest_name = names[0]

    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name

    return biggest_name


names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print("Nome com mais caracteres:", find_biggest_name(names_list))
