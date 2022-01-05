class Stack():
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]

        return value

    def peek(self):
        if self.is_empty():
            return None

        value = self._data[-1]

        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""

        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)

            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]

        for elem in self._data:
            if elem < min_value:
                min_value = elem

        return min_value


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack.min_value())  # saída: 1
    content_stack.push(-5)
    print(content_stack.min_value())  # saída: -5
