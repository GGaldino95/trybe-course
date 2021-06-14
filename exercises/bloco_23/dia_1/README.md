### Bloco 23, Dia 1 -> Introdução ao MongoDB

O **MongoDB** possui diversas ferramentas como, por exemplo, `mongo`, `mongosh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as _queries_, o importante é realizá-las.


_**Exercícios 23.1**_

 - Retorne o documento com o `_id` igual a `8`;
 - Retorne o documento com o `_id` igual a `8`, mas só exiba os atributos: `_id` e `name`;
 - Retorne apenas os atributos `name` e `birth` do documento com o `_id` igual a `8`;
 - Retorne todos os documentos em que o atributo `name.first` seja igual a `John`, utilizando o método `pretty()`;
 - Retorne os `3` primeiros documentos da coleção `bios` utilizando o método `pretty()`;
 - Retorne `2` documentos da coleção `bios` pulando os `5` primeiros documentos;

Utilizando o `mongoimport`, importe o arquivo `books.json` para a sua instância local do **MongoDB** e utilize a coleção `books` para construir as seguintes consultas:

 - Retorne a quantidade de documentos da coleção `books`;
 - Conte quantos livros existem com o `status` = `"PUBLISH"`;
 - Exiba os atributos `title`, `isbn` e `pageCount` dos `3` primeiros livros. **NÃO** retorne o atributo `_id`;
 - Pule `5` documentos e exiba os atributos `_id`, `title`, `authors` e `status` dos livros com o `status` = `"MEAP"`, limitando-se a `10` documentos.