### Bloco 26, Dia 1 -> Node.js - Introdução

Antes de começar, crie um pacote `Node.js` com o `npm init` chamado `my-scripts`. Realize os exercícios dentro desse pacote.

_**Exercícios 26.1 - Parte I**_

 - Crie um _script_ para calcular o **Índice de Massa Corporal** (IMC) de uma pessoa;
   - A fórmula para calcular o _IMC_ é `peso / altura ^ 2`; <br>
      _(**Obs**: Lembre-se que a altura é em **metros**, caso deseje usar em centímetros a conversão para metros será necessária)_
   - Comece criando um novo pacote _node_ com `npm init` e respondendo às perguntas do `npm`;
   - Por enquanto, não se preocupe em pedir _input_ da pessoa usuária. Utilize valores fixos para `peso` e `altura`;
   - Armazene o _script_ no arquivo `imc.js`;

_**Exercícios 26.1 - Parte II**_

 - Agora, permita que o _script_ seja executado através do comando `npm run imc`;
   - O novo _script_ criado deve conter o comando que chama o _node_ para executar o arquivo `imc.js`;

_**Exercícios 26.1 - Parte III**_

 - Chegou a hora de tornar nosso _script_ mais interativo! Vamos adicionar _input_ de quem usa;
   - Você já utilizou o pacote `readline-sync` para esse fim. Que tal utilizar o mesmo pacote?
   - Substitua os valores fixos de `peso` e `altura` por dados informados pela pessoa ao responder as perguntas `"Qual seu peso?"` e `"Qual sua altura?"` no terminal;

_**Exercícios 26.1 - Parte IV**_

 - Agora temos um problema: `peso` não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o _input_ desse dado;
   - O pacote `readline-sync` possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar _input_ de `floats`;
   - Encontrou a função? Show! Agora utilize-a para solicitar o _input_ de peso;

_**Exercícios 26.1 - Parte V**_

 - Vamos sofisticar um pouco mais nosso _script_. Além de imprimir o _IMC_ na tela, imprima também em qual categoria da tabela abaixo aquele _IMC_ se enquadra. Considere a seguinte tabela para classificar a situação do _IMC_:

    | IMC                                       | Situação                  |
    | ----------------------------------------- | ------------------------- |
    | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
    | Entre 18,5 e 24,9                         | Peso normal               |
    | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
    | Entre 30,0 e 34,9                         | Obesidade grau I          |
    | Entre 35,0 e 39,9                         | Obesidade grau II         |
    | 40,0 e acima                              | Obesidade graus III e IV  |

_**Exercícios 26.1 - Parte VI**_

 - Vamos criar mais um _script_. Dessa vez, para calcular a velocidade média de um carro numa corrida;
   - A fórmula para calcular velocidade média é `distância / tempo`;
   - Armazene o _script_ no arquivo `velocidade.js`;
   - Agora, permita que o _script_ seja executado através do comando `npm run velocidade`. Para isso, crie a chave `velocidade` dentro do objeto `scripts` no `package.json`;
   - Utilize o `readline-sync` para solicitar os dados à pessoa;
   - Considere a `distância` em **metros** e o `tempo` em **segundos**. Repare que, agora, estamos trabalhando com números inteiros;

_**Exercícios 26.1 - Parte VII**_

 - Crie um `jogo de adivinhação` em que a pessoa ganha se acertar qual foi o número aleatório gerado;
   - O _script_ deve ser executado através do comando `npm run sorteio`;
   - Utilize o `readline-sync` para realizar _input_ de dados;
   - Armazene o _script_ em `sorteio.js`;
   - O número gerado deve ser um inteiro **entre** `0` e `10`;
   - Caso a pessoa acerte o número, exiba na tela `Parabéns, número correto!`;
   - Caso a pessoa erre o número, exiba na tela `Opa, não foi dessa vez. O número era [número sorteado]`;
   - Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do _script_;

_**Exercícios 26.1 - Parte VII**_

 - Crie um arquivo `index.js` que pergunta qual _script_ deve ser executado;
   - O _script_ deve ser acionado através do comando `npm start`;
   - Utilize o `readline-sync` para realizar o _input_ de dados;
   - Quando executado, o _script_ deve exibir uma lista numerada dos _scripts_ disponíveis;
   - Ao digitar o número de um _script_ e pressionar `enter`, o _script_ deve ser executado;
   - Você pode utilizar o `require` para executar o _script_ em questão;

_**Exercícios 25.2 - Parte BONUS**_

 - Crie um _script_ que realize o **fatorial** de um número `n`;
    > O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
   - Armazene o _script_ no arquivo `fatorial.js`;
   - Utilize o `readline-sync` para realizar o _input_ de dados;
   - O _script_ deve ser acionado através do comando `npm run fatorial`;
   - Adicione o _script_ ao menu criado no exercício `5`;
   - Adicione validações para garantir que o valor informado seja um inteiro maior que `0`;

 - Crie um _script_ que exiba o valor dos `n` primeiros elementos da **sequência de fibonacci**;
    > A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.
   - Armazene o _script_ no arquivo `fibonacci.js`;
   - Utilize o `readline-sync` para realizar o _input_ de dados;
   - O _script_ deve ser acionado através do comando `npm run fibonacci`;
   - Adicione o _script_ ao menu criado no exercício `5`;
   - Não imprima o valor `0`, uma vez que ele não está incluso na sequência;
   - Quando `n = 10`, **exatamente** `10` elementos devem ser exibidos;
   - Adicione validações para garantir que o valor informado é um inteiro maior que 0;
 
