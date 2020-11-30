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

 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
     - Valor esperado no console: 'Bem-vinda, Margarida'.

 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
     - Valor esperado no console:
     ```javascript
     {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
     };
     ```
 - Faça um for/in que mostre todas as chaves do objeto.
     - Valor esperado no console:
     ```javascript
        'personagem'
        'origem'
        'nota'
        'recorrente'
     ```

 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
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