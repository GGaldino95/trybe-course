### Bloco 36, Dia 3 -> Recursividade e Estratégias para solução de problemas

Para medir o tempo de execução de um algoritmo (em segundos) implemente a seguinte `classe`:

```python
from time import perf_counter


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name
    def __enter__(self):
        self.start = perf_counter()
    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")
```

<br>

Para utilizar o `Cronometro`, basta usá-lo dentro de um `with` e em seguida chamar a função:

```python
from Cronometro import Cronometro


with Cronometro("algoritmo"):
    algoritmo(...)
```

<br>

_**Exercícios 36.3 - Parte I**_

 - Dado um _array_ com os seguintes elementos `["zebra", "macaco", "elefante", "arara", "javali"]`, após duas iterações utilizando `bubble sort`, como estaria este _array_?

 - Demonstre o passo a passo, do processo de mistura, de um _array_ sendo ordenado, utilizando `merge sort`. Comece o passo a passo a partir da linha abaixo:

    ```
    7 3    5 4    6 8    2 1
    ```

 - Execute os algoritmos de ordenação por **seleção** e **inserção**, para as entradas de dados ordenadas, **inversamente ordenadas** e **aleatórias**, em seguida, compare-os. Faça testes para entradas de tamanho `10.000`, `100.000`, `1.000.000`;

    > A entrada de dados pode ser gerada da seguinte maneira:

    ```python
    from random import shuffle


    ordenados = list(range(100))
    inversamente_ordenados = list(reversed(range(100)))
    aleatorios = ordenados[:] # copia dos ordenados
    shuffle(aleatorios) # embaralha eles
    ```

 - Compare o tempo de execução do algoritmo `merge_sort` e `bubble_sort` para uma entrada de `10.000` valores aleatórios. Explique através de análise de complexidade o que ocorre;

 - Converta o algoritmo **recursivo** de **busca binária** em **iterativo**;

 - Para descobrirmos qual `commit` introduziu um erro no sistema, precisamos voltar no tempo verificando os `commits` antigos, de modo a descobrir um `commit` em que os testes falham. Supondo que isto será representado como um _array_ de `booleanos`, descubra o índice onde o erro ocorreu pela primeira vez. <br>
 Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.

    ```
    entrada: [True, True, True, True, False, False, False]
    saída: 4


    entrada: [True, True, False, False, False, False, False]
    saída: 2
    ```

    > 💡 Curiosidade: O comando `git bisect` executa de maneira similar a este exercício, se implementado de forma eficiente 😂.
