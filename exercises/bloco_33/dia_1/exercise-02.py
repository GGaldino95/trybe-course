def mean(numbers):
    total = 0

    for number in numbers:
        total += number

    return total / len(numbers)


print("A média aritmética é:", mean([3, 7, 6, 8, 12]))
