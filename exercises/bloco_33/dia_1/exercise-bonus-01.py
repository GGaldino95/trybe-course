def minimum(numbers):
    smaller = numbers[0]

    for number in numbers:
        if number < smaller:
            smaller = number

    return smaller


# Outra forma:
def minimum_with_min(numbers):
    return min(numbers)


numbers_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print("O menor número da lista é o:", minimum(numbers_list))
print("O menor número da lista é o:", minimum_with_min(numbers_list))
