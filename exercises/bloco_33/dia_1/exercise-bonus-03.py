def summation(limit):
    total = 0

    for number in range(1, limit + 1):
        total += number

    return total


# Outra forma:
def summation_with_sum(limit):
    return sum(range(1, limit + 1))


number = 5

print(f"O somatório de 1 até {number} é:", summation(number))
print(f"O somatório de 1 até {number} é:", summation_with_sum(number))
