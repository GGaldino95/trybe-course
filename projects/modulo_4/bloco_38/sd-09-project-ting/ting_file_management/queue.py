class Queue:
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = list()

    def __len__(self):
        return len(self._data)

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        return self._data.pop(self.FIRST_ELEMENT) if self._data else None

    def search(self, index):
        if index < 0 or index > (self.__len__() - 1):
            raise IndexError
        return self._data[index]
