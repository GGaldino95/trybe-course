_**Exercícios 31.1 - Parte I**_

 - Primeiro vamos iniciar nosso servidor usando o `express`. Para isso, importe o `express`, depois, utilize o `express()` para criar uma instância do `express` e armazena-la na variável `app`. Agora, use o `app.listen()` para ouvir a porta **3000**. Você pode passar um `console.log` com alguma frase como segundo argumento pra saber se seu servidor iniciou como deveria;

 - Agora precisamos criar o `model` que será responsável por fazer as **requisições** da nossa _API_ de piada. Crie o diretório `model` e dentro dele crie um arquivo com o nome de `joke.js`. Nosso `model` terá apenas 1 função, a função `getJokes()`. Essa função faz uma chamada no _endpoint_ `"https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"` utilizando o `axios`. O `axios` retorna a informação dentro da propriedade `data`. Essa propriedade será algo parecido com isso:

```json
{
  "error": false,
  "category": "Programming",
  "type": "single",
  "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
  "flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false
  },
  "id": 35,
  "lang": "en"
}
```

 Assim, nossa função deve retornar a propriedade `data.joke` da requisição do `axios`;

 - Com o `model` criado, está na hora de criar um `controller`. O `controller` de uma rota controla o que acontece quando uma requisição acontece, assim, a função do nosso `controller` será **receber** a requisição, chamar a função `getJokes()` do `model`, e **renderizar** uma `view` com a piada retornada. Ok, vamos devagar. Primeiro, crie a função. Como o _endpoint_ que usaremos tem a função de listar as piadas, chame a função de `listJokes` e não se esqueça, ela deve receber **dois** parâmetros, `req` e `res`. Agora, dentro do escopo da nossa função, chamaremos a função `getJokes()` do `model`. Não se esqueça de usar o `async/await` ou o `.then()` para controlar o fluxo! Já já vamos voltar pra criar a resposta, mas antes disso, vamos criar uma `view`!

 > DICA: Nossa função não usará nenhum dado da requisição, logo o parâmetro `req` não será utilizado. Para mostrar que voce não tem a intenção de usar um parâmetro, você pode utilizar um `_` antes dele. Por exemplo, nossa função ficaria assim: `listJokes(_req, res)`.

 - Vamos a `view`! Primeiro, vamos avisar ao `express` que pretendemos usar o `ejs` como _engine_ para renderizar nossa `views`. Para isso, no nosso arquivo `index.js` vamos chamar a função `app.set('view engine', 'ejs')`. Agora, precisamos informar o `express` onde procurar por `views` quando for pedido para renderizá-las. Para isso, ainda no arquivo `index.js` usaremos um `app.set('views', './views');`. Pronto, agora que já configuramos, vamos criar a `view` de fato!

 - Crie a pasta `views` e dentro dela crie o arquivo `jokeVew.ejs`. Dentro do arquivo, crie a estrutura padrão do `HTML`. Lembre-se, um arquivo `ejs` funciona como um `HTML`, só que com algumas "habilidades especiais". Para nossa `view`, vamos apenas mostrar na página a piada dentro de uma tag `h1`, assim, no `body`, crie a tag `h1` e dentro vamos colocar a variável `joke`. Lembre-se que pra isso, temos que usar a estrutura especial `<%= %>`;

 - Com a `view` criada, esta na hora de usá-la no `controller`. No final do `controller` vamos retornar como resposta nossa `view`, assim, use um `return res.render()`. O _render_ deve receber 2 argumentos. O primeiro é o caminho da nossa `view`. Lembre-se que deve ser uma _string_ e que o caminho toma como base a pasta `views`, já que foi nela que configuramos nosso `express` pra procurar. No nosso caso, o primeiro argumento será apenas `'jokeView.ejs'`. O segundo argumento é um objeto com as variáveis que desejamos passar para nossa `view`. Como só usamos uma variável na `view`, a variável `joke`, temos que passar como segundo argumento `{ joke }`. Com isso, nosso `controller` esta pronto pra uso! Como ultimo passo, só precisamos passar pro `express` a rota que será controlada por esse `controller`;

 - No arquivo `index.js`, vamos juntar rota e `controller`. Para isso vamos usar o `app.get()`, vamos passar 2 argumentos para ele: o primeiro será nossa rota. Como ela será única, podemos usar o `'/'`. O segundo é `controller`. Importe-o e passe-o como segundo argumento. Lembre-se que é uma _callback_, então voce não utilizará o `()` no final;
