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


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack)
    print(content_stack.size())
    print(content_stack.peek())
    print(content_stack.pop())
    print(content_stack.peek())
    print(content_stack.size())
    print(content_stack.clear())
    print(content_stack.size())
