### Bloco 33, Dia 1 -> 	Learning Python

Distribuições do sistema operacional `Linux`, e também o `Mac`, normalmente já vem com uma versão **Python** instalada, pois utilizam a linguagem em diversos programas essenciais.
Verificamos isto abrindo um terminal e digitando `python3`. A saída deve ser semelhante a esta:
```bash
python3

Python 3.8.2 (default, Jun  2 2020, 13:51:17)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Este tipo de terminal é chamado de terminal interativo ou `REPL` (_Read-Eval-Print Loop_), que pode ser traduzido como **loop de leitura-avaliação-impressão**. O que ele faz é receber uma entrada digitada pela pessoa, avaliar sua execução e imprimir seu resultado.

Em todos os exercícios, crie funções para solucionar os problemas em arquivos `.py`.

Abra um terminal e para executar o módulo em **python**, escreva `python3 nome-do-arquivo.py`. Se não houve nenhum erro de digitação, nada deve ter acontecido. Neste módulo só temos definições das funções e valores, mas não estamos executando nenhuma delas. Isto é o que chamamos de execução do módulo como _script_.

<br>

_**Exercícios 33.1 - Parte I**_

 - Crie uma função que receba **dois** números e retorne o **maior** deles;

 - Calcule a **média aritmética** dos valores contidos em uma **lista**;

 - Faça um programa que, dado um valor `n` qualquer, tal que `n > 1`, imprima na tela um **quadrado** feito de asteriscos de lado de tamanho `n`. Por exemplo:
    ```python
    n = 5

    *****
    *****
    *****
    *****
    *****
    ```

   > Dica: Python sabe **multiplicar sequências**! Por exemplo, `3 * 'bla'` resulta em `blablabla`. Isso se aplica a listas também, caso você precise.
   Sentiu aí um certo _dejavu_? 😁

 - Crie uma função que receba uma lista de nomes e retorne o nome com a **maior** quantidade de caracteres. Por exemplo, para `["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]` , o retorno deve ser `"Fernanda"`;

   > Uma dica: Utilize a função `len()` para verificar o tamanho do nome.

 - Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam `R$ 80,00`. Crie uma função que retorne dois valores em uma **tupla** contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em `m²`);

 - Crie uma função que receba os três lados de um triângulo e informe qual o **tipo** de triângulo formado ou `"não é triangulo"`, caso não seja possível formar um triângulo;

   > Dica: <br>
   Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro; <br>
   Triângulo Equilátero: três lados iguais; <br>
   Triângulo Isósceles: quaisquer dois lados iguais; <br>
   Triângulo Escaleno: três lados diferentes.

<br>

_**Exercícios 33.1 - Parte BONUS**_

 - Dada uma lista, descubra o **menor** elemento. Por exemplo, `[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]` deve retornar `2`;

 - Faça um programa que, dado um valor `n` qualquer, tal que `n > 1`, imprima na tela um **triângulo retângulo** com `n` asteriscos de base. Por exemplo, para `n = 5` o triângulo terá `5` asteriscos na base:
    ```python
    n = 5

    *
    **
    ***
    ****
    *****
    ```

 - Crie uma função que receba um número inteiro `N` e retorne o **somatório** de todos os números de `1` até `N`. Por exemplo, para `N = 5`, o valor esperado será `15`;

 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    ```
      Álcool:
        - Até 20 litros, desconto de 3% por litro;
        - Acima de 20 litros, desconto de 5% por litro.
      Gasolina:
        - Até 20 litros, desconto de 4% por litro;
        - Acima de 20 litros, desconto de 6% por litro.
    ```

Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: `A - álcool`, `G - gasolina`), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é `R$ 2,50`, e o preço do litro do álcool é `R$ 1,90`;
