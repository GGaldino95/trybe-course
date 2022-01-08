### Bloco 20, Dia 5 -> PROJETO - All For One

O **banco de dados** é uma das partes mais importantes para a operação de um _software_. É através dele que temos a capacidade de **armazenar**, **ler**, **alterar** e **apagar** dados sobre os diferentes processos que acontecem nos sistemas que os usam.

Acreditamos que o conteúdo visto ao longo desse bloco é crucial para que você tenha uma base sólida para atender ao que as empresas ou até mesmo um negócio precisam em termos de conhecimento de `SQL` e **banco de dados**.

Então aproveite este projeto para consolidar seu conhecimento usando um banco de dados fresquinho.

Você passará por três níveis de desafios. Cada nível trabalhará habilidades diferentes:
 - Desafios de `SELECT` e **criação de dados**;
 - Desafios sobre **filtragem de dados**;
 - Desafios de **manipulação de tabelas**;

Você fará um projeto com o codinome `All For One` em que praticará todos os conceitos de `SQL` já ensinados até aqui. Porém, você vai usar um banco de dados totalmente diferente, então dê tchau para o `sakila` e dê boas vindas ao `Northwind`, que será usado neste projeto. As instruções de como restaurar o banco podem ser lidas a seguir.

**Instruções para restaurar o banco de dados Northwind:**

Faça o download do arquivo de backup [aqui](https://github.com/tryber/sd-09-mysql-all-for-one/blob/ggaldino95-project-mysql-all-for-one/northwind.sql) clicando em "Raw", depois clicando com botão direito e selecionando "Salvar como" para salvar o arquivo em seu computador;

 - Abra o arquivo com algum editor de texto, e selecione todo o conteúdo do arquivo usando `CTRL-A`;

 - Abra o **MySQL Workbench**;

 - Abra uma nova janela de `query` e cole dentro dela todo o conteúdo do arquivo `northwind.sql`;

 - Selecione todo o código com o atalho `CTRL-A` e depois clique no icone de trovão para executar a query;

 - Aguarde alguns segundos (espere em torno de 30 segundos antes de tentar fazer algo);

 - Verifique se o banco restaurado possui todas as tabelas;

 - Clique com botão direito em cada tabela e selecione "Select Rows" e certifique-se que todas as tabelas possuem registros. Caso tenha alguma faltando, faça o passo a seguir. Caso contrário, pode ir para próxima seção;

 - Caso existam tabelas faltando, _drope_ o banco de dados, clicando com o botão direito em cima do banco de dados `northwind` e selecionando "Drop Schema", e refaça os passos novamente, dessa vez aguardando um tempo maior quando executar o _script_ de restauração;
