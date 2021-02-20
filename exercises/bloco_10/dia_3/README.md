### Bloco 10, Dia 3 -> Jest - Simulando comportamentos

_**Exercício 10.3 - Parte I**_

 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.


_**Exercício 10.3 - Parte II**_

 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.


_**Exercício 10.3 - Parte III**_

 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.


_**Exercício 10.3 - Parte IV**_

 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.


_**Exercício 10.3 - Parte V**_

 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.


_**Exercício 10.3 - Parte VI**_

 - Crie uma função que faça requisição para a api [dog pictures][link1]. _Mocke_ a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.


_**Exercício 10.3 - Parte BONUS**_

 - O código abaixo utiliza uma _API_ de piadas e implementa o `fetchJoke`, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do _endpoint_ armazenado em `API_URL`. Faça um teste que verifique a chamada dessa _API_ para um resultado específico. Para isso, faça um _mock_ do `fetch`, que faz a chamada à _API_, utilizando os seguintes dados:

```javascript
{
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}
```

```javascript
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};
```

[link1]: https://dog.ceo/dog-api/
