### Bloco 29, Dia 1 -> Infraestrutura - Deploy com Heroku

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso, vamos fazer o processo de `deploy`.

_**Exercícios 29.1 - Parte I**_

 - Crie uma _API_ simples no `node` utilizando `express`. No arquivo `index.js`, crie uma rota do tipo `get` com o endereço raiz `/` que entregue como resposta o texto `"Está vivo!!!"`. Faça o `deploy` no **Heroku** utilizando o `CLI`;

<br>

_**Exercícios 29.1 - Parte II**_

Agora, modifique a _API_ para responder a uma nova mensagem:

 - Crie uma nova variável de ambiente com um texto qualquer;

 - Modifique o código da sua _API_ para que ela responda na rota `get` `/` com o mesmo texto contido na variável criada no passo anterior.

<br>

_**Exercícios 29.1 - Parte III**_

Agora vamos criar um `Procfile`;

 - Crie uma cópia do arquivo `index.js` com o nome `indexProcfile.js`;

 - No novo arquivo, altere a mensagem de resposta da _API_ para `"Procfile funciona mesmo!"`;

 - Crie um `Procfile` para iniciar sua aplicação a partir do novo arquivo de `indexProcfile.js`;

<br>

_**Exercícios 29.1 - Parte IV**_

Simule o `deploy` em _multiambientes_ (**produção** e **homologação**). Para isso:

 - Renomeie o `remote` do `deploy` dos exercícios anteriores para `homolog`;

 - Crie um novo `remote` a partir do mesmo projeto. Dessa vez, o `remote` deverá se chamar `prod`;

 - Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente;

<br>

_**Exercícios 29.1 - Parte V**_

Faça `deploy` de uma aplicação **React**;

 - Crie uma aplicação **React** utilizando `create-react-app`;

 - Crie um novo app utilizando o `buildpack` [mars/create-react-app](https://github.com/mars/create-react-app-buildpack#quick-start);

 - Então, faça o deploy do app no `Heroku`;

<br>

_**Exercícios 29.1 - Parte BONUS**_

 - Agora que você chegou até aqui, pegue os projetos que você criou anteriormente e faça `deploy` deles no `Heroku`! Compartilhe suas `URLs` com a turma para que as pessoas possam acessá-los de outros lugares;

 - Simule a estratégia de se terem _multiambientes_ utilizando variáveis de ambiente específicas. Para isso:
   - Crie outros ambientes a partir dos códigos dos exercícios anteriores;

   - Faça alterações para que os projetos se comportem de maneiras diferentes em ambientes diferentes, de acordo com uma variável de ambiente. Pode ser uma mensagem diferente, ou um comportamento alterado, por exemplo;

   - Teste seus apps acessando cada um dos ambientes;
