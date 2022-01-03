### Bloco 36, Dia 1 -> Complexidade de Algoritmos

_**Exercícios 36.1 - Parte I**_

 - Dado um _array_ de números de tamanho `n`, escreva um algoritmo que retorna `true` se há no _array_ um número duplicado e `false` caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio:

    ```python
    def contains_duplicate(numbers):
        numbers.sort()
        previous_number = 'not a number';
        for number in numbers:
            if(previous_number == number): return True
            previous_number = number

        return False
    ```

<br>

_**Exercícios 36.1 - Parte II**_

 - Suponha que se está escrevendo uma função para um jogo de **batalha naval**. Dado um _array_ **bidimensional** com `n` linhas e `m` colunas, e um par de coordenadas `x` para linhas e `y` para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

    ```bash
    entrada = [ 0 0 0 0 1
                0 0 0 0 1
                1 1 1 1 1
                0 0 0 1 0 ]

    resultado para (0, 4) = True
    resultado para (1, 1) = False
    ```

    Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?

<br>

_**Exercícios 36.1 - Parte III**_

 - O código abaixo está em **JavaScript**. Calcule sua ordem de complexidade para um _array_ de tamanho `n`:

    ```javascript
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    numbers.map(n => n*n)
    ```

<br>

_**Exercícios 36.1 - Parte IV**_

 - O código abaixo está em **JavaScript**. Calcule sua ordem de complexidade para um _array_ de tamanho `n`:

    ```javascript
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    numbers.map(n => n*n)
          .filter(n => n%2 === 0)
          .reduce((acc, n) => acc + n)
    ```

<br>

_**Exercícios 36.1 - Parte V**_

 - Utilize o módulo `random` da linguagem **Python** para gerar um _array_ com `100` números. Cada um desses números deve ser a **média** de dez números gerados aleatóriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

<br>

_**Exercícios 36.1 - Parte VI**_

 - Dado um _array_ de doces `candies` e um valor inteiro `extra_candies`, onde o `candies[i]` representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a analise de complexidade de espaço também:

    ```python
    def kids_with_candies(candies, extra_candies):
        # parece que a solução percorre o array somente uma vez,
        # porém isto é feito duas vezes, uma no `max` e outra para
        # preencher a resposta
        max_candies = max(candies)
        return [candy + extra_candies >= max_candies for candy in candies]


    # saída: [True, True, True, False, True]
    print(kids_with_candies([2, 3, 5, 1, 3], 3))
    ```
