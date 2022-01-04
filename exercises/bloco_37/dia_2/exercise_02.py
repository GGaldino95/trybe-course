def shuffle(numbers, n):
    answer = []
    new_array_index = 0

    for index in range(n):
        answer.insert(new_array_index, numbers[index])
        new_array_index += 1

        answer.insert(new_array_index, numbers[index + n])
        new_array_index += 1

    return answer


cartas = [2, 6, 4, 5]
cartas_por_parte = 2
print("Resultado:", shuffle(cartas, cartas_por_parte))

cartas = [1, 4, 4, 7, 6, 6]
cartas_por_parte = 3
print("Resultado:", shuffle(cartas, cartas_por_parte))
