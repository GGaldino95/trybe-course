### Bloco 22, Dia 3 -> Transformando ideias em um modelo de banco de dados - Parte II

Os exercícios abaixo estão disponibilizados em arquivos no formato `Excel` (_.xlsx_). Eles podem ser abertos em softwares livres como **Google Sheets**, **Open Office** e **Libre Office**. Não é necessário montar _queries_ para resolver os exercícios. Crie novas planilhas com suas respostas.


_**Exercícios 22.3 - Parte I - Desafios sobre VIEW**_

 - Crie uma `view` chamada `film_with_categories` utilizando as tabelas `category`, `film_category` e `film` do banco de dados `sakila`. Essa `view` deve exibir o `título` do filme, o `id` da categoria e o `nome` da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo `título` do filme. <br><br>
 ![Image1](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/viewexercise1-fef52cea07cee95dd99d48fdb57b6c0c.png) <br><br>

 - Crie uma `view` chamada `film_info` utilizando as tabelas `actor`, `film_actor` e `film` do banco de dados `sakila`. Sua `view` deve exibir o `actor_id`, o `nome` completo do ator ou da atriz em uma coluna com o **ALIAS** `actor` e o `título` dos filmes. Os resultados devem ser **ordenados** pelos `nomes` de atores e atrizes. Use a imagem a seguir como referência: <br><br>
 ![Image2](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/view_challenge2-1f47971d7ea38db5dc88f30f44992141.png) <br><br>

 - Crie uma `view` chamada `address_info` que faça uso das tabelas `address` e `city` do banco de dados `sakila`. Sua `view` deve exibir o `address_id`, o `address`, o `district`, o `city_id` e a `city`. Os resultados devem ser **ordenados** pelo `nome` das cidades. Use a imagem abaixo como referência: <br><br>
 ![Image3](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/view_challenge3-b1142963942961cb118807f4caa9b18b.png) <br><br>

  - Crie uma `view` chamada `movies_languages`, usando as tabelas `film` e `language` do banco de dados `sakila`. Sua `view` deve exibir o `título` do filme, o `id` do idioma e o `idioma` do filme , como na imagem a seguir: <br><br>
 ![Image4](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/view_challenge1-14c443a8f49c2350530c3aa45dcac8d8.png) <br><br>


_**Exercícios 22.3 - Parte II - Desafios sobre INDEX**_

 - Verifique o impacto de um `FULLTEXT INDEX` na tabela `category` (banco de dados `sakila`), adicionando-o na coluna `name`. Após ter adicionado o índice, mensure o custo da _query_ utilizando o `execution plan`, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da _query_, exclua o índice e mensure novamente esse custo;

```sql
-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
```

 - Verifique o impacto de um `INDEX` na tabela `address` (banco de dados `sakila`) adicionando-o na coluna `postal_code`. Após ter adicionado o índice, mensure o custo da _query_ utilizando o `execution plan`, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da _query_, **exclua** o índice e mensure novamente esse custo.

```sql
-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
```

_**Exercícios 22.3 - Parte III - Desafios sobre ALTER TABLE**_

Restaure o banco de dados [HR](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql) antes de continuar.

 - Escreva uma _query_ `SQL` para alterar na tabela `localtions` o nome da coluna `street_address` para `address`, mantendo o mesmo tipo e tamanho de dados;
 - Escreva uma _query_ `SQL` para alterar o nome da coluna `region_name` para `region`, mantendo o mesmo tipo e tamanho de dados;
 - Escreva uma _query_ `SQL` para alterar o nome da coluna `country_name` para `country`, mantendo o mesmo tipo e tamanho de dados.