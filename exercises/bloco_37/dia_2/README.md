### Bloco 37, Dia 2 -> Arrays

_**Exercícios 37.2 - Parte I**_

 - Em um _software_ monitor, que verifica a resiliência de outro _software_, precisamos saber qual o tempo máximo que um _software_ permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema e verificamos se está ok. Supondo um _array_ que contenha os estados coletados por nosso _software_, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades;

    ```
    1 - OK
    0 - Instabilidades

    valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
    resultado = 3

    valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
    resultado = 4
    ```

<br>

_**Exercícios 37.2 - Parte II**_

 - Em um jogo de baralho, as cartas estão representadas por um _array_ numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

    ```
    Exemplo 1:
    cartas = [2, 6, 4, 5]
    cartas por parte = 2

    resultado = [2, 4, 6, 5]

    Exemplo 2:
    cartas = [1, 4, 4, 7, 6, 6]
    cartas por parte = 3

    resultado = [1, 7, 4, 6, 4, 6]
    ```

<br>

_**Exercícios 37.2 - Parte III**_

 - Dado um _array_ de números inteiros que representam produtos em um **e-commerce**, verifique quantos produtos formam **boas combinações**, considerando que uma **boa combinação** é quando um produto é **igual** ao outro e seu índice é **maior** que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

    ```
    Exemplo 1:
    produtos = [1, 3, 1, 1, 2, 3]
    resultado = 4
    Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.


    Exemplo 2:
    produtos = [1, 1, 2, 3]
    resultado = 1
    Os índices (0, 1) formam a única combinação.
    ```

<br>

_**Exercícios 37.2 - Parte IV**_

 - Dado dois _arrays_ de números inteiros que representam instantes de entrada e saídas em uma biblioteca e um número que represente um instante a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante que entrou, saiu da biblioteca;

    ```
    entradas = [1, 2, 3]
    saídas = [3, 2, 7]
    instante_buscado = 4
    resultado: 1

    O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
    e saiu no 2 e o último foi único a estar presente no instante 4.
    ```

<br>

_**Exercícios 37.2 - Parte V**_

 - Em um _software_ gerenciador de servidores, precisamos verificar o número de servidores que se comunicam. Os servidores estão representados como um _array bidimensional_ onde o valor `1` representa um computador e `0` a ausência do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna;

    ```
    servidores =  [[1,0],[0,1]]
    resultado: 0
    Linhas e colunas são diferentes.

    servidores = [[1,0],[1,1]]
    resultado: 3
    Todos os servidores se comunicam com ao menos um outro servidor.

    servidores = [[1, 0, 0],
                  [1, 0, 0],
                  [0, 0, 1]]
    resultado: 2
    O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.
    ```
