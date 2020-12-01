### Bloco 4, Dia 4 -> JavaScript - Objetos e Funções

_**Exercício 4.4 - Parte I - Objetos e For/In**_

Usando o objeto abaixo, faça os exercícios a seguir:
```javascript
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
```

 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome;
     - Valor esperado no console: 'Bem-vinda, Margarida'.

 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console;
     - Valor esperado no console:
     ```javascript
     {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
     };
     ```
 - Faça um for/in que mostre todas as chaves do objeto;
     - Valor esperado no console:
     ```javascript
        'personagem'
        'origem'
        'nota'
        'recorrente'
     ```

 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto;
     - Valor esperado no console:
     ```javascript
        'Margarida'
        'Pato Donald'
        'Namorada do personagem principal nos quadrinhos do Pato Donald'
        'Sim'
     ```

 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
     - Valor esperado no console:
     ```javascript
        "Margarida e Tio Patinhas"
        "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
        "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas"
        "Ambos recorrentes" // Atenção para essa última linha!
     ```

_**Exercício 4.4 - Parte II - Funções**_

 - Crie uma função que receba uma String e retorne **true** se for um palíndromo, ou **false** se não for;
     - Valor esperado:
     ```javascript
        verificaPalindromo("arara");
        true

        verificaPalindromo("desenvolvimento");
        false
     ```

 - Crie uma função que receba um _array_ de inteiros e retorne o índice do MAIOR valor;
     - Array de teste: **[2, 3, 6, 7, 10, 1]**;
     - Valor esperado no retorno da função: **4**.

 - Crie uma função que receba um _array_ de inteiros e retorne o índice do MENOR valor;
     - Array de teste: **[2, 4, 6, 7, 10, 0, -3]**;
     - Valor esperado no retorno da função: **6**.

 - Crie uma função que receba um _array_ de nomes e retorne o nome com a MAIOR quantidade de caracteres;
     - Array de teste: **["José", "Lucas", "Nadia", "Fernanda", "Cairo", "Joana"]**;
     - Valor esperado no retorno da função: **Fernanda**.

 - Crie uma função que receba um _array_ de inteiros e retorne o inteiro que mais se repete;
     - Array de teste: **[2, 3, 2, 5, 8, 2, 3]**;
     - Valor esperado no retorno da função: **2**.

 - Crie uma função que receba um número inteiro **N** e retorne o somatório de todos os números de 1 até N.
     - Valor de teste: **N = 5**;
     - Valor esperado no retorno da função: 1+2+3+4+5 = **15**.

 - Crie uma função que receba uma String **word** e outra String **ending**. Verifique se a String **ending** é o final da String **word**. Considere que a String **ending** sempre será menor que a String **word**.
     - Valor de teste: **"trybe"** e **"be"**;
     - Valor esperado no retorno da função: **true**;

     ```javascript
        verificaFimPalavra("trybe", "be");
        true

        verificaFimPalavra("joaofernando", "fernan");
        false
     ```

_**Exercício 4.4 - Parte BÔNUS**_

 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

     | I   | 1    |
     | --- | ---- |
     | IV  | 4    |
     | V   | 5    |
     | IX  | 9    |
     | X   | 10   |
     | XL  | 40   |
     | L   | 50   |
     | XC  | 90   |
     | C   | 100  |
     | CD  | 400  |
     | D   | 500  |
     | CM  | 900  |
     | M   | 1000 |

     - Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
     - _Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9._

 - Para o próximo exercício você irá precisar ter uma conta no CodeWars. Acesse o desafio proposto e então clique em **TRAIN**, você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em **TEST** para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em **ATTEMPT**, ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão **SUBMIT** ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
 
 - [Desafio - 16 + 8 = 214][desafio].

[desafio]: https://www.codewars.com/kata/5effa412233ac3002a9e471d/javascript