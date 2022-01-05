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

    def clear(self):
        while self._data:
            self.pop_front()

    # Outra alternativa:
    # def clear(self):
        # self._data = list()

    def exists(self, value):
        return value in self._data

    def peek(self, position, order=None):
        if position < 0 or position > len(self) - 1:
            return None

        if not order:
            for index, value in enumerate(self._data):
                if position == index:
                    return value
        else:
            for index, value in enumerate(self._data[::-1]):
                if position == index:
                    return value

        return None
