### Bloco 30, Dia 2 -> ORM - Interface da aplicação com o banco de dados

Neste exercício vamos criar uma _API_ simples, onde será possível criar um livro ou listar todos os livros da base de dados. Vamos utilizar **_MySQL_** como banco de dados e **_Sequelize_** como nosso `ORM`.

Antes de começar:

 - Crie uma nova pasta e inicie um projeto com `Express`:
```bash
 npm init -y
 npm install express body-parser
```

 - Crie o arquivo `index.js`;

 - Instale o pacote `sequelize` e o `mysql2`:
```bash
 npm install sequelize mysql2
```

 - Instale o pacote `sequelize-cli` como uma dependência de desenvolvimento:
```bash
 npm install --save-dev sequelize-cli
```

 - Use o **_Sequelize-CLI_** para iniciar a configuração do `ORM`. Esse comando irá gerar as pastas `models`, `seeder`, `config` e `migration` dentro do seu projeto:
```bash
 npx sequelize-cli init
```

 - Agora, aproveitando a `CLI`, vamos criar nossa primeira `migration` para `books` usando:
```bash
 npx sequelize migration:generate --name create-books
```

 - Dentro do `up`, crie uma tabela `Books` com os atributos:
   - `id` (nossa _chave primária_);
   - `title` (_string_ e **não** pode ser nulo);
   - `author` (_string_ e **não** pode ser nulo);
   - `pageQuantity` (_integer_ e pode ser nulo);
   - `createdAt` (_date_ e não pode ser nulo);

<br>

 - Dentro do `down`, remova a tabela `Books`;

 - Crie seu banco de dados e coloque todas as configurações dentro do arquivo `config/config.js`. Em seguida gere a tabela no seu banco de dados:
```bash
 npx sequelize db:create
```

 - Agora você pode rodar as `migrations` (seu banco precisa estar configurado certinho para isso funcionar):
```bash
 npx sequelize db:migrate
```

 - Crie um arquivo `Book.js` dentro da pasta `models` e crie seu modelo lá dentro, respeitando os atributos que definimos nas `migrations`;

> _**Dica** - Preste atenção em como o arquivo `models/index.js` é definido, ele vai te ajudar a importar seus modelos mais facilmente._

<br>

_**Exercícios 30.2 - Parte I**_

Crie os `controllers` do seu projeto com as seguintes rotas:

 - `GET` `/books` - lista todos os livros;

 - `GET` `/book/:id` - pega o livro com o `id` especificado;

 - `POST` `/book` - cria um novo livro;

 - `POST` `/book/:id` - sobrescreve o livro com `id` selecionado;

 - `DELETE` `/book/:id` - deleta um livro;

 - Em caso de erro, os _endpoints_ devem retornar `status code` `500` com a mensagem: `'Algo deu errado'`;

> _**Dica**: Para testar suas requisições você pode utilizar o [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/)._

<br>

_**Exercícios 30.2 - Parte BONUS**_

 - Crie um `seeder` usando o **_Sequelize-CLI_** , populando a sua base com pelo menos um livro;

 - Crie um _endpoint_ para buscar o livro por `author` (pode adaptar algum que já exista);

 - Crie uma ordenação no _endpoint_ `GET` `/books` para ordenar por ordem alfabética e por data de criação;

 - Adicione, também, uma data de `update` nos atributos do livro que se altera sempre que o livro for atualizado;

 - Escreva testes para os models criados;

 - Escreva testes para os `controllers` do seu projeto isolando a camada de `models`;
