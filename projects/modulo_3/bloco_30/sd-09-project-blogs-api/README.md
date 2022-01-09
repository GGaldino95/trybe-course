### Bloco 30, Dia 4 -> PROJETO - Blogs API

Nesse projeto, você vai construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:

 - Criar e associar tabelas usando `models` do `sequelize`;
 - Construir _endpoints_ para consumir os `models` que criar;
 - Fazer um `CRUD` com o `ORM`;

Você vai arquiteturar, desenvolver uma _API_ de um `CRUD` **posts de blog** (com o `sequelize`). Começando pela _API_, você vai desenvolver alguns _endpoints_ (seguindo os princípios do `REST`) que estarão conectados ao seu banco de dados. Lembre-se de aplicar os princípios `SOLID`!

Primeiro, você irá criar uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criará também uma tabela de `Categorias` para seus `Posts` e por fim a tabela de `Posts` será seu foco, guardando todas as informações dos `posts` realizados na plataforma.

Você deve desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um `post` é necessário usuário e **login**, portanto será trabalhada a relação entre **user** e **post**. Também será necessário a utlização de **categorias** para seus **posts**, assim trabalhando a relação de **posts** para **categorias** e de **categorias** para **posts**.
