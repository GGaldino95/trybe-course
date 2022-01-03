def torres_hanoi(numero_de_discos, a, b, c):
    if numero_de_discos == 1:
        print("Move disco %d de %s para %s" % (numero_de_discos, a, c))
    else:
        torres_hanoi(numero_de_discos - 1, a, c, b)
        print("Move disco %d de %s para %s" % (numero_de_discos, a, c))
        torres_hanoi(numero_de_discos - 1, b, a, c)


print(torres_hanoi(3, a="primeiro", b="meio", c="fim"))
