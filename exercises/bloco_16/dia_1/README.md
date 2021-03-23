### Bloco 16, Dia 1 -> Introdução ao Redux - O estado global da aplicação

Você irá fazer 14 exercícios propostos pelo site _[freecodecamp][freecodecamp]_, com objetivo de consolidar seus conhecimentos acerca dos conceitos presentes no _**Redux**_.

_**Exercício 16.1 - Parte I - Definindo um action creator**_

Após criar uma `action`, o próximo passo é enviar a `action` para a `store` do **Redux** para que ela possa atualizar seu estado. Em **Redux**, você define `action creators` para fazer isso. Um `action creator` é simplesmente uma função de JavaScript que retorna uma `action`. Em outras palavras, `action creators` criam objetos que representam eventos de ação.

 - Defina uma função chamada `actionCreator()` que retorna um objeto de `action` quando chamada.

```javascript
const action = {
  type: 'LOGIN'
}

// Defina um action creator aqui:
```


_**Exercício 16.1 - Parte II - Enviando uma action para um reducer**_

O método `dispatch` é o que você usa para despachar `actions` para a `store` do **Redux**. Chamar `store.dispatch()` e passar o valor retornado de uma `action creator` envia uma ação de volta para a `store`. Lembre-se que `action creators` retornam um objeto com uma propriedade `type` que especifica a ação que irá ocorrer. Então o método despacha um objeto `action` para a `store` do **Redux**. Baseado no exemplo do desafio anterior, as linhas à seguir são equivalentes, e ambas despacham a `action` do tipo `'LOGIN'`:

```javascript
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

 - A `store` do **Redux** no código abaixo tem um estado inicializado que é um objeto contendo uma propriedade `login` definida como `false`. Há também uma `action creator` chamada `loginAction()` que retorna uma `action` do tipo `'LOGIN'`. Despache a ação `'LOGIN'` para a `store` do **Redux** chamando o método `dispatch`, passando a ação criada pelo `loginAction()`.

```javascript
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
```


_**Exercício 16.1 - Parte III - Criando um Reducer para receber e manipular uma action**_

Depois que uma `action` é criada e despachada, a `store` do **Redux** precisa saber como responder à aquela ação. Esse é o trabalho da função `reducer`. `Reducers` em **Redux** são responsáveis pelas modificações do estado que ocorrem em reposta às ações. Um `reducer` recebe `state` e `action` como argumentos, e sempre retornará um novo estado. É importante notar que este é o **ÚNICO** papel de um `reducer`. Ele não tem efeitos colaterais - ele nunca chama um endpoint de uma API e ele nunca tem surpresas escondidas. O `reducer`é simplesmente uma _função pura_ que recebe estado e ação, e então retorn um novo estado.

Um outro princípio chave em **Redux** é que o seu estado é _apenas leitura_. Em outras palavras, a função `reducer` deve **SEMPRE** retornar uma cópia do estado e nunca modificar o etado diretamente. **Redux** não impõe imutabilidade de estados, porém, você é responsável por aplicá-lo no código de suas funções `reducer`.

 - O código abaixo tem o exemplo anterior assim como o começo de uma função `reducer`. Preencha o corpo da função `reducer` para que se ela receba uma ação do tipo `'LOGIN'`, retorne um objeto de estado com `login` definido como `true`. Caso contrário, ele retorna o estado atual. Note que o estado atual e a `action` despachada são passadas para o `reducer`, para que você possa acessar o tipo da ação diretamente com `action.type`.

```javascript
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```


_**Exercício 16.1 - Parte IV - Criando um reducer que aceita actions de tipos distintos**_

Você pode informar ao **Redux** como manipular múltiplos tipos de ação. Digamos que você está gerenciando uma autenticação de usuário na sua `store`do Redux. Você vai querer uma representação do estado para quando usuários estão logados e quando estão deslogados. Você representa isso com um objeto de estado único com a propriedade `authenticated`, por exemplo. Você também precisa de `action creators` para criar ações correspondentes ao login e ao logout de um usuário juntamente com o próprio objeto de ação.

 - O código abaixo tem uma `store`, `actions` e `action creators` definidos para você. Preencha a função `reducer` para manipular múltiplas ações de autenticação. Use um `switch` no `reducer` para responder à diferentes eventos de ação. Isso é um padrão comum na escrita de `reducers` em **Redux**. O `switch` deve alternar entre o `action.type` e retornar o estado de autenticação apropriado.
     - _Nota: À essa altura, não se preocupe com a imutabilidade de estados, já que este exemplo é simples e pequeno. Para cada `action`, você pode retornar um novo objeto - por exemplo, `{ authenticated: true }`. Inclusive, não esqueça de escrever um caso `default` que retorne o estado atual. Isso é importante pois uma vez que sua aplicação tem múltiplos `reducers`, eles são todos executados à qualquer momento que um `dispatch` de `action` é feito, mesmo quando a ação não é relacionada àquele `reducer`. Em tais casos, você quer ter certeza de que você retorne o estado atual.

```javascript
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```


_**Exercício 16.1 - Parte V - Usando const para os action types**_

Uma boa prática quando estamos trabalhando com **Redux** é de definir os tipos de ação como constantes, e então referenciar essas constantes onde quer que sejam usadas. Você pode refatorar o código que você está trabalhando para escrever os tipos de ação como declarações `const`.

 - Declare `LOGIN` e `LOGOUT` como valores `const` e atribua-os às _strings_ `LOGIN` e `LOGOUT`, respectivamente. Então, edite o `authReducer()` e os `action creators` para referenciar essas constantes ao invés de valores _string_.
     - _Nota: É uma convenção escrever constantes em letras maiúsculas, e é uma prática padrão em **Redux**._

```javascript
// Declare as constantes aqui

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```


_**Exercício 16.1 - Parte VI - Registrando um listener para no store**_

Outro método que você tem acesso no objeto `store`do **Redux** é o `store.subscribe()`. Isso permite que você inscreva `listener functions` na `store`, que são chamadas sempre que uma `action` seja despachada para a `store`. Um uso simples deste método é inscrever uma função na sua `store` que simplesmente envie uma mensagem toda vez que uma `action` é recebida e a `store` é atualizada.

 - Escreva uma `callback` que incremente a variável global `count` toda vez que a `store` receba uma `action`, e passe essa `callback` para o método `store.subscribe()`. Você verá que `store.dispatch()` é chamado três vezes seguidas, cada uma passando diretamente um objeto `action`. Observe a saída do console entre os despachos de ação para ver as atualizações sendo exibidas.

```javascript
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```


_**Exercício 16.1 - Parte VII - Combinando múltiplos reducers**_

Quando o estado da sua aplicação começa a ficar mais complexo, pode ser tentador dividir o estado em várias partes. Ao invés disso, lembre-se do primeiro princípio do **Redux**: todo estado da aplicação é mantido num único objeto de estado na `store`. Portanto, o **Redux** fornece _composição de `reducers`_ como a solução para um modelo de estado complexo. Você define múltiplos `reducers` para manipular diferentes partes do estado da sua aplicação, então junta esses `reducers` num `reducer` raiz. Este `reducer` raiz é então passado para o método `createStore()` do **Redux**.

A fim de nos permitir combinar vários `reducers`, o **Redux** fornece o método `combineReducers()`. Esse método aceita um objeto como parâmento no qual você define propriedades que associadam chaves a funções `reducers` específicas. O nome que você der para as chaves será usado pelo **Redux** como o nome da parte do estado associada.

Tipicamente, é uma boa prática criar um `reducer`para cada parte do estado da aplicação quando eles são distintos ou únicos em algum aspecto. Por exemplo, em uma aplicação de tomar notas com autenticação de usuário, um `reducer`poderia manipular a autenticação enquanto outro manipularia o texto e as notas que o usuário está enviando. Para tal aplicação, nós deveríamos escrever o método `combineReducers()`dessa forma:

```javascript
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

Agora, a chave `notes` irá conter tudo do estado que esteja associado com nossas anotações e manipulado pelo nosso `notesReducer`. É assim que vários `reducers` podem ser compostos para gerenciar estados mais complexos de uma aplicação. Neste exemplo, o estado contido na `store` do **Redux** seria então um único objeto contendo as propriedades `auth` e `notes`.

 - No código abaixo, há duas funções `counterReducer()` e `authReducer()`, juntamente com uma `store` do **Redux**. Termine de escrever a função `rootReducer()` usando o método `Redux.combineReducers()`. Atribua `counterReducer` para uma chave chamada `count` e `authReducer` para uma chave chamada `auth`.

```javascript
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
```


_**Exercício 16.1 - Parte VIII - Enviando dados através das actions**_

Agora você aprendeu como despachar ações para a `store` do **Redux**, mas até então essas ações não contém nenhuma informação além de uma propriedade `type`. Você também pode enviar dados específicos juntamente com suas ações.  Na verdade, isso é muito comum pois ações geralmente se originam de alguma interação do usuário e tendem a carregar alguma informação com elas. A `store` do **Redux** frequentemente precisa saber sobre essas informações.

 - Abaixo há um `notesReducer()` e um `action creator` `addNoteText()` definidos. Termina o corpo da função `addNoteText()` para que ela retorne um objeto `action`. O objeto deve incluir uma propriedade `type` com um valor de `ADD_NOTE`, e também uma propriedade `text` atribuída às informações de `note` passados pelo `action creator`. Quando você chama o `action creator`, você irá passar informações específicas que você pode acessar através do objeto.

 - Em seguida, termina de escrever o `switch` no `notesReducer()`. Você precisa adicionar um caso que menipule as ações de `addNoteText()`. Este caso deve ser provocado sempre que haja uma ação do tipo `ADD_NOTE` e ele deve retornar a propriedade `text` na `action` que está chegando como o novo estado.

 - A ação é despachada no final do código. Uma vez que você tiver terminado, execute o código e observe o _console_. Isso é tudo o que é necessário para enviar informações específicas de `actions` para a `store` e usá-las quando você atualiza o estado da `store`.

```javascript
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```


_**Exercício 16.1 - Parte IX - Criando um contador com Redux**_

Agora você aprendeu todos os principais recursos do **Redux**! Você viu como criar `actions` e `action creators`, criar uma `store` do **Redux**, despachar suas ações para a `store` através do `dispatch()`, e definir atualizações de estado com `reducers`. Você viu inclusive como gerenciar estados complexos com a composição de `reducers`. Esses exemplos são simples mas os seus conceitos são essenciais para utilizar o **Redux**. Se você entendê-los bem, você estará pronto para começar a fazer sua aplicação com **Redux**! Os próximos desafios cobrem alguns dos detalhes que dizem respeito à imutabilidade de estado, mas antes, aqui está uma revisão de tudo que você aprendeu até agora.

 - Neste exercício, você irá implementar um contador simples utilizando **Redux**. A base do código está abaixo, mas você terá que escrever os detalhes! Use os nomes fornecidos e defina os `action creators` `incAction` e `decAction`, o `counterReducer()`, os tipos de ação `INCREMENT` e `DECREMENT` para incrementar ou decrementar o estado contido na `store`. Boa sorte construindo seu primeiro app **Redux**!

```javascript
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
```


_**Exercício 16.1 - Parte X - Por que nunca modificar um state?**_

Estes últimos desafios descrevem vários métodos que reforçam o princípio chave da imutabilidade de estado no **Redux**. Um estado imutável significa que você nunca modifica o estado diretamente, e ao invés disso, você retorna uma nova cópia do estado.

Se você capturasse o estado de uma aplicação **Redux** com o tempo, você veria algo como `state1`, `state2`, `state3`, `state4`, `...` e assim por diante onde cada estado poderia ser similar ao último, mas cada um seria um pedaço distinto de informação. Essa imutabilidade, na verdade, é o que fornece tais recursos como _depuração de viagem no tempo_ (Time-travel debugging) que você talvez possa ter ouvido falar.

**Redux** não impõe ativamente imutabilidade de estado no seu `store` ou `reducers`, pois essa responsabilidade cai em cima do desenvolvedor. Felizmente, JavaScript (**ES6**) fornece várias ferramentas úteis que você pode usar para impor essa imutabilidade no seu estado, seja uma _string_, _número_, _array_ ou _objeto_. Note que _strings_ e _números_  são valores primitivos e são imutáveis por natureza. Em outras palavras, `3` sempre será `3`. Você não pode mudar o valor do número 3. Um _array_ ou _objeto_, no entanto, são mutáveis. Na prática, seu estado provavelmente vai ser constituído de um _array_ ou _ objeto_, já que são estruturas de dados muito úteis para representar vários tipos de informações.

 - No código abaixo, temos um `store` e um `reducer` para gerenciar itens de uma **Lista de Tarefas**. Termine de escrever o caso `ADD_TO_DO` no `reducer` para acrescentar uma nova tarefa ao estado. Existem algumas formas de alcançar isso com o JavaScript padrão ou **ES6**. Veja se você consegue encontrar uma forma de retornar um novo _array_ com o item de `action.todo` acrescentado no final.

```javascript
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```


_**Exercício 16.1 - Parte XI - Utilizando o spread operator como ferramenta para manter a imutabilidade do state**_

Uma solução do **ES6** para ajudar a impor a imutabilidade de estado no **Redux** é o _spread operator_ `...`. O _spread operator_ tem uma variedade de aplicações, uma das quais é ideal para o exercício anterior para produzir um novo _array_ a partir de um _array_ existente. Isso é relativamente novo, mas uma sintaxe comumente usada. Por exemplo, se você tem um _array_ `myArray` e escrever:

```javascript
let newArray = [ ...myArray];
```

`newArray` agora é um clone de `myArray`. Ambos os _arrays_ vão existir separadamente na memória. Se você realizar uma mutação como `newArray.push(5)`, `myArray` não mudará. O `...` efetivamente _espalha_ os valor de `myArray` em um novo _array_. Para clonar um _array_ mas adicionar novos valores neste novo _array_, você pode escrever `[...myArray, 'new value']`. Isso irá retornar um novo _array_ composto dos valores de `myArray` e a _string_ `new value` como o último valor. A sintaxe do _spread operator_ pode ser usada várias vezes em uma composição de _array_ como essa, mas é importante notar que só é feito uma cópia rasa do _array_. Dito isso, só é fornecido operações imutáveis de _array_ apenas para _arrays_ uni-dimensionais.

 - Use o _spread operator_ para retornar uma nova cópia do estado quando uma tarefa é adicionada.

```javascript
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```


_**Exercício 16.1 - Parte XII - Removendo itens de um array preservando a imutabilidade**_

Hora de praticar a remoção de itens dentro de um _array_. O _spread operator_ pode ser usado aqui também. Outros métodos úteis do JavaScript incluem `slice()` e `concat()`.

 - O `reducer` e `action creator` foram modificados para remover um item de um _array_ baseado no `index` do item. Termine de escrever o `reducer` para que o novo _array_ do estado seja retornado com o item no `index` específico removido.

```javascript
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```


_**Exercício 16.1 - Parte XIII - Trabalhando com Object.assign**_

Os últimos exercícios trabalharam com _arrays_, mas há formas de impor imutabilidade de estados quando o estado também é um _objeto_. Uma ferramente útil para manipular _objetos_ é o `Object.assign()`. `Object.assign()` recebe um _objeto_ de destino (target) e um _objeto_ de origem (source) e mapeia (map) as propriedades do _objeto_ de origem para o _objeto_ de destino. Quaisquer propriedades equivalentes serão sobrescritas pelas propriedades do _objeto_ de origem. Este comportamente é comumente usado para fazer cópias simples de _objetos_ ao passar um _objeto_ vazio como o primeiro argumento, seguido pelos _objetos_ que você deseja copiar. Aqui está um exemplo: 

```javascript
const newObjecto = Object.assign({}, obj1, obj2);
```

Isso cria `novoObjeto` como um novo _objeto_ que contém as propriedades que existem atualmente em `obj1` e `obj2`.

 - O estado e `actions` do **Redux** foram modificados para manipular um _objeto_ para o `state`. Modifique o código para retornar um novo _objeto_ `state` para ações com tipo `ONLINE`, que define a propriedade `status` para a _string_ `online`. Tente usar o `Object.assign()` para completar este exercício.

```javascript
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```


_**Exercício 16.1 - Parte BÔNUS**_

Agora você irá incrementar o código que foi feito durante a [aula ao vivo][aula16.1].

 - Faça um campo que recebe um valor e esse será o valor aplicado ao botão incremento;

 - Faça um campo que recebe um valor e esse será o valor aplicado ao botão decremento;

 - Armazene um outro valor no state , chamado clickCount . Este campo vai contar o número de vezes que qualquer botão na tela foi clicado;

 - Armazene um array no state que guarda o valor individual que foi adicionado a cada click em qualquer um dos três botões.

[freecodecamp]: https://www.freecodecamp.org/learn/front-end-libraries/#redux
[aula16.1]: https://github.com/tryber/sd-09-live-lectures/pull/40
