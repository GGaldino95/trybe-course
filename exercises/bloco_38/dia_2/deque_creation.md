# **Desenvolvendo uma Deque:**

Primeiro iremos declarar o construtor da classe `Deque` (`deque.py`) e a propriedade que indica a posição inicial dos elementos:

```python
class Deque:
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = []

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"
```

Agora que temos uma estrutura, iremos adicionar os métodos `push_front` e `push_back`, responsáveis pela **inserção** nas extremidades.

Similarmente adicionaremos os métodos `pop_front` e `pop_back` responsáveis pela **remoção** de elementos das extremidades.

Por fim os métodos `peek_front` e `peek_back` que nos permitem apenas visualizar o conteúdo existente nas extremidades, não alterando o conteúdo.

<br>

## **Push Front:** <a id="push-front"></a>

Utilizaremos a propriedade para indicar que todas as inserções desse tipo serão adicionadas na posição `0` da estrutura:

```python
def push_front(self, value):
    self._data.insert(self.FIRST_ELEMENT, value)
```

<br>

## **Push Back:** <a id="push-back"></a>

Utilizaremos a função `append`, da lista interna, para que todas as inserções desse tipo sejam adicionadas na posição `n - 1` da estrutura:

```python
def push_back(self, value):
    self._data.append(value)
```

<br>

## **Pop Front:** <a id="pop-front"></a>

Utilizaremos a função `pop`, da lista interna, com índice para remover o elemento existente na posição `0`:

```python
def pop_front(self):
    if self._data:
        return self._data.pop(self.FIRST_ELEMENT)

    return None
```

<br>

## **Pop Back:** <a id="pop-back"></a>

Utilizaremos a função `pop`, da lista interna, no entanto sem o índice, fazendo com que o elemento da posição `n - 1` seja removido:

```python
def pop_back(self):
    if self._data:
        return self._data.pop()

    return None
```

<br>

## **Peek Front:** <a id="peek-front"></a>

```python
def peek_front(self):
    if self._data:
        return self._data[self.FIRST_ELEMENT]

    return None
```

<br>

## **Peek Back:** <a id="peek-back"></a>

```python
def peek_back(self):
    if self._data:
        return self._data[len(self)-1]

    return None
```

<br>

## **Implementação final da classe `Deque`:** <a id="final-deque"></a>

```python
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

    print(deque) # saída: Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    print(deque.__len__()) # saída: 10

    print(deque.pop_front()) # saída: 10, pois ele retorna o número retirado
    print(deque.pop_back()) # saída: 5, pois ele retorna o número retirado

    print(deque) # saída: Deque(9, 8, 7, 6, 1, 2, 3, 4)
    print(deque.__len__()) # saída: 8

    print(deque.peek_front()) # saída: 9
    print(deque.peek_back()) # saída: 4
```
