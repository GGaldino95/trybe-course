class Deque:
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = list()

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(map(lambda x: str(x), self._data)) + ")"

    def push_front(self, value):
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        self._data.append(value)

    def pop_front(self):
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)

        return None

    def pop_back(self):
        if self._data:
            return self._data.pop()

        return None

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]

        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self) - 1]

        return None


if __name__ == "__main__":
    deque = Deque()
    elements_1 = [6, 7, 8, 9, 10]
    elements_2 = [1, 2, 3, 4, 5]

    for elem in elements_1:
        deque.push_front(elem)

    for elem in elements_2:
        deque.push_back(elem)

    print(deque)
    print(deque.__len__())

    print(deque.pop_front())
    print(deque.pop_back())

    print(deque)
    print(deque.__len__())

    print(deque.peek_front())
    print(deque.peek_back())
