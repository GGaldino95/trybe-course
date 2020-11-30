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
