### Bloco 38, Dia 2 -> Deque

**D**ouble **E**nded **QUE**ue do inglês. O `TAD` (**T**ipo **A**bstrato de **D**ados) **deque** é uma estrutura ordenada de elementos que se assemelha a uma fila, o que difere é a natureza irrestrita de adição e remoção de elementos. Em uma **deque**, os novos elementos podem ser adicionados ou removidos em ambas extremidades. Já em uma **fila**, os elementos seguem a ordem `FIFO` (**F**irst **I**n **F**irst **O**ut), ou seja, o primeiro elemento a entrar na lista é o primeiro a sair, e o último elemento a entrar na lista, é o último a sair.

Antes de prosseguir com os exercícios, precisamos desenvolver uma classe `Deque`. Para isso, leia o arquivo `deque_creation.md` para mais detalhes.

_**Exercícios 38.2 - Parte I**_

**Aprimorando a classe `Deque`**: nossa classe `Deque` atende as principais operações que essa `TAD` (**T**ipo **A**bstrato de **D**ados) nos oferece, mas que tal melhorarmos? Para isso, você deve adicionar os seguintes métodos:

 - `clear(self)`: Este método deve ser responsável por **limpar** a estrutura, eliminando todos os elementos contidos dentro da **deque**;

 - `exists(self, value)`: Este método deve ser usado para **indicar** se o valor do argumento **existe** em nossa estrutura. Retorne `True` se existir e `False` caso contrário;
    > _Nota: Fique a vontade para escolher por qual extremidade será iniciada a consulta._

 - `peek(self, position, order)`: Este método deve ser usado para retornar o valor do conteúdo da posição indicada. A peculiaridade desse método é a ordem que essa consulta deve ser feita. Caso o campo `order` não seja informado, a consulta deve ser realizada através da **extremidade da esquerda** `front`, no entanto, caso o campo possua o valor `desc`, a consulta deve ser através da **extremidade da direita** `back`; <br>
Como exemplo, assuma uma **deque** composto com os seguintes elementos:

```python
[22, 2, 77, 6, 43, 76, 89, 90]
```

|Position|Order|Resultado|
|:------:|:---:|:-------:|
|2       |None |77       |
|5       |None |76       |
|0       |desc |90       |
|-1      |None |None     |
|8       |None |None     |

<br>

_**Exercícios 38.2 - Parte II**_

**Limitando capacidade da `Deque`**: Uma das características da **Deque** é a capacidade de balanceamento, enviando conflitos ao inserir ou remover itens em suas extremidades. Nossa classe `Deque` já possui essa característica, no entanto, para termos melhor controle sobre a quantidade de itens que podemos ter em nossa fila de dois fins, você deve limitar a capacidade da mesma, assim, a estrutura deverá respeitar as seguintes afirmações:

 - Realizar inserção em uma **deque** cheia causa **overflow**;
 - Realizar remoção em uma **deque** vazia causa **underflow**;

Utilize o construtor da classe para definir a capacidade da estrutura, exemplo `Deque(10)`. Retorne `exceptions`, ao contemplar os pontos acima, exemplo: `raise Exception("Overflow")`;


<br>

_**Exercícios 38.2 - Parte III**_

**Desafio do Palíndromo**: Uma palavra é um palíndromo se a sequência de letras que a forma é a mesma, quer seja lida da esquerda para a direita ou vice-versa.

Crie um algoritimo que, ao receber uma sequência de caracteres, indique se ela é ou não um palíndromo. Para este exercício iremos considerar todas os caracteres como minúsculos e desconsiderar espaços, pontuação e caracteres especiais.

Use a tabela a seguir como exemplo para seus testes:

|Termos                                                                      |Palíndromo        |
|:--------------------------------------------------------------------------:|:----------------:|
|Será que sou palíndromo?                                                    |:x:               |
|Mais um teste                                                               |:x:               |
|Madam                                                                       |:heavy_check_mark:|
|A dama admirou o rim da amada                                               |:heavy_check_mark:|
|Ze de Lima, Rua Laura, Mil e Dez                                            |:heavy_check_mark:|
|Luza Rocelina, a namorada do Manuel, leu na moda da Romana: anil e cor azul.|:heavy_check_mark:|

<br>

_**Exercícios 38.2 - Parte BONUS**_

Baseado nos conhecimentos adquiridos neste bloco, implemente uma **pilha** utilizando a `Deque` como a estrutura interna. Sua **pilha** deve conter as operações: `push`, `pop`, `peek` e `is_empty`;
