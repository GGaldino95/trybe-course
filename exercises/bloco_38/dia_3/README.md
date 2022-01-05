### Bloco 38, Dia 3 -> Pilhas

A estrutura de pilha é uma estrutura do tipo `LIFO` (**L** ast **I**n **F**irst **O**ut). Ou seja, o último elemento a entrar na pilha é o primeiro a sair.

Podemos criar uma pilha utilizando alguma outra estruturas de dados como _listas encadeadas_ ou _arrays_, com a única diferença que todas as operações devem ocorrer com o elemento mais ao topo, ou seja, no último elemento adicionado. Em nosso exemplos vamos utilizar o `built-in list` para facilitar o entendimento.

Antes de prosseguir com os exercícios, precisamos desenvolver uma classe `Stack` (`Pilha`). Para isso, leia o arquivo `stack_creation.md` para mais detalhes.

_**Exercícios 38.3 - Parte I**_

Estenda a classe `Stack` adicionando uma nova função chamada `min_value()` que irá retornar o menor valor inteiro presente na pilha. Por exemplo:

```python
# ...

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
```

> Fonte: [Min Stack](https://leetcode.com/problems/min-stack/)

<br>

_**Exercícios 38.3 - Parte II**_

Estenda a classe `Stack`para que ela suporte um **limite de itens** dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:

```python
# ...

content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")
```

> Dica: Para esse exercício, crie uma nova classe, no mesmo diretório da classe `Stack`.

<br>

_**Exercícios 38.3 - Parte III**_

Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. 

Escreva um programa que faça essas duas operações, **inserção de veículos** e a **remoção do veículo** desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.

<br>

_**Exercícios 38.3 - Parte IV**_

Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.

> Nota: transforme as expressões em pós fixas e atribua valores. Caso seja necessário, faça o `cast` do valor para ponto `flutuante`.

```
Expressão Infixa:

A + B - C / A

B + (A * C) / C * 2

A * B - C + 4 * A - B

(A + C / B) * (A + B)

50 * B / 2 * 5 / A
```

<br>

_**Exercícios 38.3 - Parte V**_

Dado uma _string_, contendo letras e parênteses. Crie uma função que irá reverter os caracteres de tal forma que somente os caracteres dentro dos parênteses sejam revertidos. A _string_ final não deve conter os parênteses. Por exemplo:

```python
string = 'teste(lagel)'
resultado = 'testelegal'
```

> Fonte: [Reverse Substrings Between Each Pair of Parentheses](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)
