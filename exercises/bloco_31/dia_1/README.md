### Bloco 31, Dia 1 -> Software Architecture - View Layer

Os exercícios estão localizados nesse [repositório](https://github.com/tryber/exercise-mvc). Leia com atenção o **README**, que contém as instruções para a realização correta dos exercícios.

<br>

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

<br>

_**Exercícios 31.1 - Parte II**_

Vamos criar uma aplicação simples que faz chamadas a uma [API de piadas sobre o Chuck Norris](https://api.chucknorris.io/). A aplicação terá duas "partes". Uma que mostra as categorias das piadas e direciona a pessoa para a segunda parte, onde a chamada da _API_ de piadas é feita e a piada é de fato retornada. Então, vamos lá?

Vamos começar fazendo a parte das categorias. Para essa parte já criamos a `view` para você!

 - Parte I:

   - Primeiro crie uma pasta `models` e nela crie um `model` para as categorias. Nele deve haver uma função que faz uma chamada a _API_ de categorias;

   - Agora, vamos criar o `controller`. Lembre-se que o `controller` tem como uma de suas funções unificar o `model` com nossa `view`. Importe o `model` das categorias e use a função criada anteriormente para obter uma lista de categorias. Depois, utilize o `res.render` para renderizar a `view` de categorias e passar a variável `categories` para ela. A `view` se encontra na pasta `views/categories`;

   - Agora, no nosso arquivo `index.js` vamos usar o `controller` que acabamos de criar. Ele deve estar ligado ao _endpoint_ `/categories`. Não se esqueça de usar o `express` para realizar e o `ejs` como _template engine_;

Agora vamos as piadas em si. Essa etapa será um pouco menos descritiva e dessa vez você terá que fazer as 3 partes do modelo **MVC**: a `view`, o `controller` e o `model`.

 - Parte II:

   - O `model` das piadas deve fazer chamadas para o _endpoint_ de piada aleatório e para o _endpoint_ de piada por categoria;

   - A `view` deve conter pelo menos 2 campos, um botão para voltar para a página de categorias e um campo onde vai exibir a piada retornada pela _API_;
  
   - O _endpoint_ `/jokes` deve retornar uma piada aleatória sem categoria específica (o que corresponde ao link da categoria `all`) e os _endpoints_ `/jokes/:categorie` deve exibir uma piada de uma categoria específica, que vem como parêmetro da _URL_;

<br>

_**Exercícios 31.1 - Parte BONUS**_

Lembra do exercício que você desenvolveu no segunda dia de **MSC**? Então, agora você terá a oportunidade de refatorá-lo para **MVC**, caso você não tenha o feito você pode partir desse exercício, fazendo a construção da aplicação utilizando a arquitetura **MVC** do zero.

 - Nesse exercício, você vai desenvolver uma aplicação **MVC** para consulta de **CEPs**, chamada `cep-lookup`. Você utilizará uma _API_ para buscar os dados relacionados a um **CEP** e salvará esses dados no `MySQL`, caso você esteja refatorando a aplicação deverá substituir o `MongoDB` pelo `MySQL`;

 - Um **CEP** válido é composto por 8 dígitos, com um hífen opcional separando os três últimos dígitos. Por exemplo, `30310-030` e `30310030` são **CEPs** válidos. `303100308` e `AB897453` não são;

 - Para consultar um **CEP**, você deve utilizar a _API_ [CEP lá](http://cep.la/api). A página contém instruções sobre como utilizar a _API_;

 - O modelo deve fornecer uma interface para consultar **CEPs**. Primeiramente, o modelo deve consultar o banco de dados pelo **CEP** procurado. Se o **CEP** for encontrado, seus dados são retornados sem consultar a _API_. Caso contrário, o modelo deve fazer uma requisição a _API_. O modelo então deverá salvar no `MySQL` os dados da primeira _API_ que responder com sucesso. Em outras palavras, o banco de dados funcionará como um _cache_ de **CEPs**, enquanto a _API_ só será consultada se um **CEP** não for encontrado localmente. Inicialmente, o banco deve estar vazio;

 - O banco de dados só precisa armazenar as seguintes informações: `CEP`, `UF`, `cidade`, `bairro` e `logradouro`. Um **CEP** salvo no banco deve conter somente números, sem hífens, e essa coluna deve ter um índice único para evitar que o mesmo **CEP** seja cadastrado duas vezes e otimizar a busca;

 - A página inicial da sua aplicação deve ter um _input_, onde a pessoa poderá digitar um **CEP**, e um botão, que realizará a busca. Se o **CEP** for válido, seus dados devem ser exibidos abaixo do _input_. Se o **CEP** não for encontrado, deve ser exibido o texto `CEP não encontrado`. Se for digitado um **CEP** com formato inválido, deve ser exibida a mensagem `CEP inválido`;

 - Note que o **CEP** pode ser digitado no _input_ com ou sem hífen, mas deve ser salvo no banco **sem hífens**;

 - Lembre-se de organizar sua aplicação seguindo a arquitetura **MVC**, separando as responsabilidades em camadas;
