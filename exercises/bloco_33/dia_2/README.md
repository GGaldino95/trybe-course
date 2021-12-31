### Bloco 33, Dia 2 -> 	Entrada e Saída de Dados

_**Exercícios 33.2 - Parte I**_

 - Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

    Entrada:
    ```
    PEDRO
    ```

    Saída:
    ```
    PEDRO
    PEDR
    PED
    PE
    P
    ```

 - **Jogo da palavra embaralhada**. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo;

    > Para embaralhar uma palavra faça: <br>
    `scrambled_word = "".join(random.sample(word, len(word)))` <br>
    > O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: <br>
    `random.choice(["word1", "word2", "word3"]) -> "word2"`

 - Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha;

 - Dado o arquivo `example.json`, leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato `CSV` como o exemplo abaixo:
    ```
    categoria,porcentagem
    Python,0.23201856148491878
    Java,0.23201856148491878
    PHP,0.23201856148491878
    ```

<br>

_**Exercícios 33.2 - Parte BONUS**_

 - Utilizando o arquivo `pokemons.json`, vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária "Quem é esse pokemon?", até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros;

    > Exemplo: o pokemon sorteado pelo programa é `butterfree`, a pessoa usuária chuta `charizard`, o programa deve exibir `b`. Em seguida, a pessoa chuta `blastoise`, o programa deve exibir `bu` e assim por diante até a pessoa acertar. <br>
    > Você pode utilizar o método `choice` do modulo `random` para sortear aleatoriamente um pokemon. Ex: <br> `random.choice(pokemon) -> Saída: {"name": "Pikachu", }`
