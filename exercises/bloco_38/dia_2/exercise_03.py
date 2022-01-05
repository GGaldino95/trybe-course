from deque import Deque


def isPalindromo(terms):
    deque = Deque()

    for character in terms:
        if str(character).isalpha():
            deque.push_back(str(character).lower())

    while len(deque) > 1:
        front_item = deque.pop_front()
        back_item = deque.pop_back()

        if front_item != back_item:
            return False
    return True


string = "Será que sou palíndromo?"
print("Frase:", string)
print("\nA frase é um palíndromo? \nResposta:", isPalindromo(string))
