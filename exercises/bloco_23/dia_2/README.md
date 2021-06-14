### Bloco 23, Dia 2 -> Filter Operators

Para os exercícios a seguir, utilizaremos um banco de dados de super-heróis. Faça o download do arquivo JSON [aqui](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json).
Após fazer o download do arquivo, importe-o para o **MongoDB** através da ferramenta `mongoimport`. No seu terminal, utilize o seguinte comando (lembre-se de substituir `<caminho do arquivo>` pelo caminho do arquivo na sua máquina):

```bash
mongoimport --db class --collection superheroes <caminho_do_arquivo>
```

Pronto! Você já tem uma base de dados com 734 super-heróis. Para conferir, conecte-se à instância do seu banco de dados utilizando o `Mongo Shell` e execute os seguintes comandos:

```javascript
use class;

db.superheroes.count();
```

_**Exercícios 23.2**_

Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

 - Selecione todos os super-heróis com **menos** de `1.80m` de altura. Lembre-se de que essa informação está em centímetros;
 - Retorne o total de super-heróis **menores** que `1.80m`;
 - Retorne o total de super-heróis com até `1.80m`;
 - Selecione um super-herói com `2.00m` ou **mais** de altura;
 - Retorne o total de super-heróis com `2.00m` ou **mais**.
 - Selecione todos os super-heróis que têm `olhos verdes`;
 - Retorne o total de super-heróis com `olhos azuis`;
 - Utilizando o operador `$in`, selecione todos os super-heróis com cabelos **pretos** ou **carecas** (`"No Hair"`);
 - Retorne o total de super-heróis com cabelos **pretos** ou **carecas** (`"No Hair"`);
 - Retorne o total de super-heróis que não tenham cabelos **pretos** ou não sejam **carecas**;
 - Utilizando o operador `$not`, retorne o total de super-heróis que **não** tenham **mais** de `1.80m` de altura;
 - Selecione todos os super-heróis que **não** sejam **humanos** ou que **não** sejam **maiores** do que `1.80m`;
 - Selecione todos os super-heróis com `1.80m` ou `2.00m` de altura e que sejam publicados pela `Marvel Comics`;
 - Selecione todos os super-heróis que pesem **entre** `80kg` e `100kg`, sejam `Humanos` ou `Mutantes` e **não** sejam publicados pela `DC Comics`;
 - Retorne o total de documentos que **não** contêm o campo `race`;
 - Retorne o total de documentos que contêm o campo `hairColor`;
 - Remova **apenas um** documento publicado pela `Sony Pictures`;
 - Remova **todos** os documentos publicados pelo `George Lucas`;