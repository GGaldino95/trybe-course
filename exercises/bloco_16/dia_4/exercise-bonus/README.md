### Bloco 16, Dia 4 -> Usando o Redux no React - Actions Assíncronas

_**Exercício 16.4 - Parte BONUS**_

Como Redux exige muita prática, eis aqui mais um exercício! Desta vez, um mini-projeto para se desenvolver e guardar no portfólio!
Conhece o **Reddit**? É uma comunidade na qual pessoas conseguem criar grupos de discussão acerca de algum assunto. Tal grupo é chamado de **subreddit**. Para cada **subreddit** pessoas podem fazer postagens (_posts_). Como exercício, você vai fazer uma aplicação que permite a quem usá-la ver posts referentes a dois **subreddits**:

   > * `reactjs`
   > * `frontend`

   - Sua aplicação deve permitir a quem usá-la poder escolher de qual **subreddit** se deseja ver as postagens. No momento que selecionar o **subreddit**, uma requisição precisa ser feita no **reddit** para buscar os _posts_ referentes ao **subreddit** escolhido Para cada postagem você precisa mostrar pelo menos o título do _post_. Além disso, sua aplicação deve permitir a quem usá-la a possibilidade de atualizar a lista de postagens referentes ao **subreddit** escolhido;
   - É obrigatório que você gerencie o estado de sua aplicação com **`Redux`**, guardando os **subreddits**, assim como os posts de cada **subreddit**, no `store`. Você precisa fazer uso do `redux-thunk` para permitir criar `actions` assíncronas;

  **Pontos importantes:**
   - Para buscar os posts referentes a um **subreddit**, você pode fazer uma requisição `GET` para `https://www.reddit.com/r/<subreddit>.json`. Ou seja, se você precisar buscar _posts_ do **subreddit** `reactjs`, você faria uma chamada para `https://www.reddit.com/r/reactjs.json`;
     - No `json` retornado você encontra os dados referentes aos posts dentro da propriedade `data.children`. Para cada _post_ dentro de `data.children` você encontra seu título correspondente na propriedade `data.title`;
   - Antes de começar a sair implementando, pare e pense sobre como desenhar o estado da sua aplicação. O que você precisa guardar no estado? Como você vai estruturar e organizar seus dados? Quais `actions` você precisa ter para modelar os eventos que ocorrerão na sua aplicação (fazer uma requisição, obter sua resposta, atualizar a lista, etc...)? Como você vai organizar seus `reducers` (lembrando que NUNCA deve-se alterar o estado, e sim criar um novo )?
   - Como você está fazendo uma requisição de um recurso externo, o que acontece se a requisição de postagens referentes a um **subreddit** falhar? Adicione na sua aplicação **tratamento de erro** para esses casos, salvando no estado da sua aplicação a mensagem de erro para o **subreddit** correspondente. _Dica: procure e investigue no **Google** como fazer tratamento de erro de requisição no contexto de **`Redux`**;_
   - Como forma de ter um melhor diagnóstico sobre o fluxo de dados em uma aplicação **`Redux`** , instale o _middleware_ `redux-logger` e o integre na sua aplicação.
   - Instale a extensão do Chrome `redux-dev-tools` e a integre na sua aplicação. Com isso, você tem um ambiente completo para poder analisar e depurar sua aplicação. 🚀

<br>
É mostrada em sequência uma sugestão de implementação da aplicação: <br>

![example](./images/example.gif)