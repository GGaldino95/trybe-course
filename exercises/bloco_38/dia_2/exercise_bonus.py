from deque import Deque


class Stack:

    def __init__(self):
        self._deque = Deque()

    def __len__(self):
        return len(self._deque)

    def push(self, value):
        self._deque.push_back(value)

    def pop(self):
        return self._deque.pop_back()

    def peek(self):
        return self._deque.peek_back()

    def is_empty(self):
        return not len(self)
