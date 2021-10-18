### Bloco 16, Dia 4 -> Usando o Redux no React - Actions Assíncronas

_**Exercício 16.4 - Parte I**_

Nesse exercício, utilizaremos [essa API](https://aws.random.cat/meow) para realizarmos nossas requisições. Vamos focar apenas no desenvolvimento de uma **action assíncrona** e na implementação do `thunk` na `store`. O `reducer`, assim como os componentes da aplicação, já estão prontos. Desse modo, realizaremos modificações apenas nos arquivos `actions/index.js` e `store/index.js`.

 - Nessa aplicação, temos dois componentes: 
   - `Gallery.js`, o qual renderiza uma imagem a partir de uma _URL_ armazenada no estado global da aplicação;
   - `Button.js`, o qual renderiza um botão que, ao ser clicado, faz a requisição de uma imagem e armazena a URL no estado global por meio de uma `action` assíncrona;

 - Como a aplicação está quase pronta, já temos o `reducer` e os componentes concluídos, nos falta somente a implementação do `thunk` e da action assíncrona. Para isso:
   - Caso ainda não tenha feito, execute o comando `npm install` para instalar as dependecias necessárias para a aplicação: `redux`, `react-redux`, `redux-thunk`;
   - Faça as implementações necessárias na **store** (arquivo `store/index.js`);
   - No arquivo `actions/index.js`, desenvolva a action assíncrona necessária para a aplicação rodar adequadamente. Essa _action_ assíncrona deverá fazer o uso de outras duas actions:
     - Da `requestAPI`: para informar ao usuário que a informação solicitada está carregando;
     - Da `getPicture`: para salvar no estado global da aplicação a _URL_ da imagem solicitada da API;
 
_Observação: Para essa aplicação, é necessário que o nome da action assíncrona seja **fetchAPI**._
