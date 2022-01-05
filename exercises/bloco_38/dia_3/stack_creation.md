# **Desenvolvendo uma Pilha:**

Primeiro iremos declarar a classe chamada `Stack` no arquivo `stack.py`. Em seguida, vamos declarar o construtor para termos uma pilha vazia e duas propriedades que serão úteis para implementar as funcionalidades da pilha. A primeira propriedade nos retorna o **tamanho** da pilha e a segunda propriedade nos indica se a pilha **está vazia**.

> **Nota:** Aqui iremos utilizar o tipo `built-in` de **lista** para focarmos em entender as pilhas.

```python
class Stack():
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())
```

Após adicionar as funções auxiliares, vamos adicionar as operações de `push` (empilhar itens) e `pop` (remover itens do topo da pilha). Com esses métodos já poderemos manipular valores na pilha. No arquivo `stack.py` vamos adicionar os método de `push` e `pop`, conforme o código abaixo:

```python
def push(self, value):
    self._data.append(value)

def pop(self):
    if self.is_empty():
        return None

    # -1 se refere ao último objeto da pilha.
    # Ou seja, o valor do topo da pilha
    value = self._data[-1]
    del self._data[-1]
    return value
```

O método `push` adiciona um novo valor no topo da pilha, enquanto que o método `pop` irá pegar o elemento do topo e então retornar esse valor. Nem sempre é interessante remover o valor da pilha, por isso iremos implementar o método `peek` que somente lê o valor no topo da pilha e então o retorna. Vamos adicioná-lo dentro da nossa classe `Stack`:

```python
def peek(self):
    if self.is_empty():
        return None

    value = self._data[-1]

    return value
```

A última funcionalidade da pilha é um método para limpa-la. Para isso iremos adicionar o método `clear`, que se encarregará de limpar todos os elementos da pilha.

```python
def clear(self):
    self._data.clear()
```

Por fim, vamos adicionar o método `__str__` que fará a impressão de todos os elementos que estão empilhados. Do primeiro ao último item inserido (da parte de baixo da pilha até o topo).

```python
def __str__(self):
    str_items = ""

    for i in range(self.size()):
        value = self._data[i]
        str_items += str(value)

        if i + 1 < self.size():
            str_items += ", "

    return "Stack(" + str_items + ")"
```

No final dessas implementações teremos a declaração da classe `Stack` com todas as operações que podemos realizar com uma pilha.

<br>

## **Implementação final da classe `Deque`:** <a id="final-deque"></a>

```python
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

        # -1 se refere ao último objeto da pilha.
        # Ou seja, o valor do topo da pilha
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

    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack)
    # saída: 10
    print(content_stack.size())

    # saída: 10
    print(content_stack.peek())
    # saída: 10, pois a função retorna o elemento que está sendo retirado
    print(content_stack.pop())

    # saída: 9, pois, após o 10 ter sido removido, o 9 se tornou o elemento do topo da pilha
    print(content_stack.peek())
    # saída: 9
    print(content_stack.size())

    # saída: None, pois a função não retorna nada!
    print(content_stack.clear())
    # saída: 0
    print(content_stack.size())
```
