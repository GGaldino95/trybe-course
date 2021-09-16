### Bloco 24, Dia 3 -> Updates Complexos - Arrays - Parte 2

Você continuará utilizando o mesmo `dataset` de filmes do dia anterior. Por isso, hora de voltar a coleção `movies` para o seu estado original:
```JS
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: ["action", "adventure"],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: ["action", "adventure", "sci-fi"],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: ["family", "comedy"],
    imdbRating: 7.4,
  },
]);
```

Para cada execução, utilize o método `find()` para conferir as alterações nos documentos.
O **MongoDb** possui diversas ferramentas, como, por exemplo, `mongo`, `mongo sh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as _queries_, o importante é realizá-las.


_**Exercícios 24.3 - Parte I**_

 - Utilizando o operador `$all`, retorne todos os filmes que contenham `action` e `adventure` no _array_ `category`;
 - Agora retorne os filmes que contenham `action` no _array_ `category` e possuem nota do **IMDB** maior do que `7`;
 - Adicione um _array_ chamado `ratings` ao filme `Batman` com os seguintes valores: `[85, 100, 102, 105]`;
  (_Dica: lembre-se do operador `$each` visto no dia anterior_)
 - Adicione um _array_ chamado `ratings` ao filme `Godzilla` com os seguintes valores: `[78, 52, 95, 102]`;
 - Adicione um _array_ chamado `ratings` ao filme `Home Alone` com os seguintes valores: `[200, 99, 65]`;
 - Retorne todos os filmes com `ratings` **maior** do que `103`, exibindo **apenas** os campos `title` e `ratings`;
 - Retorne todos os filmes com `ratings` **entre** `100` e `105`, exibindo **apenas** os campos `title` e `ratings`;
 - Retorne todos os filmes com `ratings` **entre** `64` e `105` e **divisíveis** por `9`, exibindo **apenas** os campos `title` e `ratings`;
 - Retorne os filmes da categoria `adventure` e com `ratings` **maior** do que `103`, exibindo **apenas** os campos `title`, `ratings` e `category`;
 - Retorne somente o **título** de todos os filmes com **dois** elementos no _array_ `category`;
 - Retorne somente o **título** de todos os filmes com **quatro** elementos no _array_ `ratings`;
 - Busque os filmes em que o módulo `5` do campo `budget` seja `0` e que o _array_ `category` tenha **tamanho** `2`;
 - Retorne os filmes da categoria `sci-fi` **ou** que possua o `ratings` **maior** do que `199`, exibindo **apenas** os campos `title`, `ratings` e `category`;
 - Retorne os filmes em que o `ratings` possua **tamanho** `4` e que seja da `category` `adventure` ou `family`, mas que não tenha o `imdbRating` **menor** que `7`;
 - Adicione o campo `description` no filme `Batman` com o seguinte valor:
    ```JSON
    "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    ```
 - Adicione o campo `description` no filme `Godzilla` com o seguinte valor:
    ```JSON
    "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
    ```
 - Adicione o campo `description` no filme `Home Alone` com o seguinte valor:
    ```JSON
    "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    ```
 - Utilizando o operador `$regex`, retorne todos os filmes em que a descrição **comece** com a palavra `"The"`;
 - Utilizando o operador `$regex`, retorne todos os filmes em que a descrição **termine** com a palavra `"humanity."`;
 - Crie um **índice** do tipo `text` no campo `description`;
 - Utilizando o operador `$text`, busque por filmes que contenham o termo `"vacation"`;
 - Utilizando o operador `$text`, busque por filmes que contenham os termos `"monstrous"` ou `"criminal"`;
 - Utilizando o operador `$text`, busque por filmes que contenham a frase `"when he is accidentally"`;
 