### Bloco 9, Dia 2 -> JavaScript Promises

Vamos usar a função `fetch`, que vimos na aula ao vivo, para criar um site simples com um gerador de _piadas ruins_!. Como? Vamos fazer juntos!

_**Exercício 9.2 - Parte I**_

 - Primeiro, veja o [manual da _API_ do site icanhazdadjoke.com][link1]. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa _API_:
     - Para começar, vamos fazer uma requisição via browser. Visite o site [icanhazdadjoke.com][link2], e perceba que ele devolve uma página _HTML_ com uma piada aleatória;

     - Em seguida, no terminal, vamos fazer a requisição: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`. Perceba que o retorno é um _HTML_ idêntico ao de uma requisição via browser com uma piada aleatória;

     - Para a próxima requisição, vamos usar o comando: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`. Veja que agora recebemos apenas a piada aleatória em formato texto;

     - Por fim, faça a requisição: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`. Agora a _API_ retorna um objeto no formato _JSON_. Perceba que, dependendo do que passamos na chave `Accept:` no header, definido por `-H` no comando, o serviço nos retorna uma resposta diferente.

 - Utilize o _HTML_ e o `js` a seguir como base:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```
```javascript
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

 - Agora vamos tentar fazer as requisições a _API_ usando `fetch`. Essa função recebe dois parâmetros:
     - O endereço para o qual a requisição será feita, ou seja, a url do serviço.
     - Um objeto contendo as especificações da requisição. Para essa _API_, atribuiremos a esse objeto as chaves `method:` e `headers:`.

```javascript
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);
```

 - O segundo parâmetro(`myObject`) define o tipo de request(`method: 'GET'`) e o formato da resposta(`headers: { 'Accept': 'application/json' }`), como visto nas requisições via `curl`.
     - A função `fetch` **é uma Promise** e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas `.then` (em caso de sucesso) e `.catch` (em caso de falha). A requisição `fetch` retorna um objeto **Response**. Utilizando `.then`, verifique a estrutura da resposta usando um `console.log` na response retornada pelo `fetch`.

```javascript
fetch(API_URL, myObject)
  .then(response => console.log(response));
```

 - _Viu a reponse? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?_

 - Para isso, usamos o método `.json()` na resposta da _API_. Esse método converte o conteúdo do `body` da _Response_ e retorna uma outra _Promise_, que, quando bem-sucedida, retorna um _JSON_ contendo as informações da piada.

 - A partir do `fetch`, troque o `console.log()` anterior pelo método `.json()` e imprima os dados da requisição.

```javascript
fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
```

 - Recebemos um objeto, certo? A partir daí, faça a piada aparecer no _DOM_ da sua página!


_**Exercício 9.2 - Parte II**_

 - Agora, um passo para trás: vamos fazer, passo a passo, uma `Promise`. Primeiramente, instancie uma `Promise`. Dentro dela, você deve produzir um _array_ com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um `then` e um `catch` à Promise com qualquer coisa dentro só para que o código funcione.

   - Tente usar `Higher Order Functions`! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!


_**Exercício 9.2 - Parte III**_

 - Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um _array_.


_**Exercício 9.2 - Parte IV**_

 - Quando a Promise for rejeitada, imprima, `via console.log`, a frase `"É mais de oito mil! Essa promise deve estar quebrada!"`.


_**Exercício 9.2 - Parte V**_

 - Quando a `Promise` for bem-sucedida, encadeie nela uma segunda `Promise` que some os elementos do _array_.


_**Exercício 9.2 - Parte BÔNUS**_

 - Utilize somente `Higher Order Functions` para fazer as operações com o array;
 - Refatore a `Promise` para utilizar somente `async` e `await`.


[link1]: https://icanhazdadjoke.com/api
[link2]: https://icanhazdadjoke.com