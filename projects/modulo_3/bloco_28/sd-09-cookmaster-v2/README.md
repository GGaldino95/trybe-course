### Bloco 28, Dia 4 -> PROJETO - Cookmaster

Neste projeto, você será capaz de:
 - Entender o que há por dentro de um `token` de autenticação;
 - Gerar `tokens` a partir de informações como login e senha;
 - Autenticar rotas do `Express`, usando o `token` `JWT`;
 - Fazer _upload_ de arquivos em _APIs_ `REST`;
 - Salvar arquivos no servidor através de uma `API REST`;
 - Consultar arquivos do servidor através de uma `api REST`;
 - Realizar testes de integração;

Você vai desenvolver seu app utilizando a arquitetura `MSC`!

Neste novo projeto deverá ser possível fazer o **cadastro** e **login** de pessoas usuárias, onde apenas essas pessoas poderão **acessar**, **modificar** e **deletar** as receitas que cadastrou.

Você vai desenvolver todas as camadas da _API_ (`Models`, `Services` caso necessário, e `Controllers`).

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: **Criação**, **Leitura**, **Atualização** e **Exclusão** (`CRUD`).

Para realizar qualquer tipo de alteração no banco de dados (como **cadastro**, **edição** ou **exclusão** de receitas) será necessário **autenticar-se**. Além disso, as pessoas usuárias devem poder ser **clientes** ou **administradores**. Pessoas **clientes** apenas poderão disparar ações nas receitas que ele mesmo criou. Já uma pessoa **administradora** pode disparar qualquer ação em qualquer receita.

A autenticação deverá ser feita via `JWT`.

Deverá ser possível adicionar uma imagem à uma receita, utilizando o **upload de arquivos** fornecido pelo `multer`.
