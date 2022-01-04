def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)

    for index in range(size):
        if arrivals[index] < time_instant < departures[index]:
            answer += 1

    return answer


# ou de uma maneira mais pythonica
def students_in_instant_2(arrivals, departures, time_instant):
    return sum(
        arrival < time_instant < departure
        for arrival, departure in zip(arrivals, departures)
    )


entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
print("Resultado:", students_in_instant(entradas, saidas, instante_buscado))
print("Resultado:", students_in_instant_2(entradas, saidas, instante_buscado))
