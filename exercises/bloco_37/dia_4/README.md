### Bloco 37, Dia 4 -> Set

_**Exercícios 37.4 - Parte I - Blefe**_

Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe `5` números de `0` a `10`, inclusive. A pontuação final é calculada da seguinte forma:

 - A `nota de partida` de cada pessoa é o **maior** número que a outra pessoa não escolheu;

 - O `redutor` é o **menor** numero que a outra pessoa não escolheu;

 - A pontuação final é a `nota de partida - redutor`.


**Exemplo:**
```python
clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco
```

Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

```python
entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# saída: 'Marco'
```

<br>

_**Exercícios 37.4 - Parte II - Substring**_

Dada uma _string_, ache o tamanho da maior _substring_ que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: `O(n^2)`.

```python
string = "serdevemuitolegalmasehprecisoestudarbastante"
```

<br>

_**Exercícios 37.4 - Parte BONUS**_

Vamos construir uma classe `Conjunto` especializada em guardar números inteiros até `1000` (o que é considerado pequeno). Para tanto, vamos representar nossos dados como listas de `booleanos`. Para cada exercício lembre-se de considerar maneiras eficientes e, ao mesmo tempo, legíveis de se escrever o código.

**Inicializando a classe e adicionando elementos:**

 - Crie uma classe chamada `Conjunto`;

 - Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com False , uma vez que ainda não temos valores adicionados;

 - Crie um método `add(item)` que recebe um valor até `1000` e adiciona no conjunto;

 - Na `main` (dentro de: `if __name__ == "__main__":`), instancie um objeto do tipo `Conjunto` e adicione os valores:
    ```python
    [0, 10, 100, 1000]
    ```

**Imprimir:**

Caso tenhamos que imprimir na tela o nosso objeto, o comando `print(conjunto)` não irá funcionar. O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos. Para que o comando `print` funcione, precisamos que a nossa classe tenha um método chamado `__str__` e é o que faremos agora:

 - Crie um método com a assinatura abaixo:

    ```python
    def __str__(self):
    # retorno: uma string que representa o seu objeto
    ```

    _Exemplos de entrada e saída:_

    ```
    A = {1, 2, 3}
    # saída: '{1, 2, 3}'

    B = {7, 2, 10}
    # saída: '{2, 7, 10}'

    C = {}
    # saída: '{}'
    ```

    A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você criou.

**is_in:**

Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador `in` precisamos que a nossa classe tenha um método chamado `__contains__` e é o que faremos agora:

 - Crie um método com a assinatura abaixo:

    ```python
    def __contains__(self, item):
    # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
    ```

    _Exemplos de entrada e saída:_

    ```
    A = {1, 2, 3}

    # entrada: 1
    # saída: True

    # entrada: 0
    # saída: False
    ```

**União (Todos os elementos que estão em A OU em B):**

 - Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe `Conjunto`:

    ```python
    def union(self, conjuntoB):
    # retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
    ```

 - Na `main`, instancie dois objetos do tipo `Conjunto`. Preencha o primeiro com os valores de `1` a `10`, e o segundo, com valores de `10` a `20`;

 - Imprima na tela a união dos dois conjuntos.

**Intersecção (Todos os elementos que estão em A E em B):**

 - Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe `Conjunto`:

    ```python
    def intersection(self, conjuntoB):
    # retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB
    ```

    _Exemplos de entrada e saída:_

    ```
    A = {1, 2, 3}
    B = {3, 4, 5}
    # saída: {3}

    C = {0, 3, 6, 9}
    B = {12, 15, 18}
    # saída: {}
    ```

Pronto, temos nossa primeira classe `Conjunto` implementada! Agora termine de implementar as operações de conjuntos `difference`, `issubset` e `issuperset`;

<br>

### **Desafio:**

Otimizar o algoritmo do **exercício 2** para ter uma complexidade de tempo limite de `O(n)`;
