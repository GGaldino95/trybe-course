def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    tuple_list = []

    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                tuple_list.append((i, j))
                answer += 1

    print("Resultado:", answer)
    output = ', '.join(map(str, tuple_list))

    if len(tuple_list) == 1:
        return f"Os índices {output} formam a única combinação.\n"

    return f"Os índices {output} formam combinações.\n"


produtos = [1, 3, 1, 1, 2, 3]
print(good_pairs(produtos))


produtos = [1, 1, 2, 3]
print(good_pairs(produtos))
