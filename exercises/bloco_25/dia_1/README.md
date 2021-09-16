### Bloco 25, Dia 1 -> Aggregation Framework - Parte 1

Para esta etapa, utilizaremos um `dataset` que contém **três** coleções: `clientes`, `produtos` e `vendas`. Utilize os comandos abaixo para importar essas coleções para o banco `erp`:
 - Faça o download dos arquivos `json`, clicando com o botão direito e escolhando a opção _"Salvar como..."_.
   - [Clientes](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/clientes-b41ac10693375ca85847468d9071f788.json)
   - [Produtos](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/produtos-0a039404ac00200fe4a948986caf26c2.json)
   - [Vendas](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/vendas-3e516ade3d00b07e1163e9be4e81bf37.json)
 - Faça a importação para sua instância do **MongoDB**:
    ```bash
    mongoimport --db erp <caminho_do_arquivo_clientes.json>
    mongoimport --db erp <caminho_do_arquivo_produtos.json>
    mongoimport --db erp <caminho_do_arquivo_vendas.json>
    ```
 - Conecte-se à sua instância e confira o **número** de documentos em cada coleção:
    ```bash
    use erp;
    db.clientes.count(); // 499
    db.produtos.count(); // 499
    db.vendas.count(); // 4900
    ```
Com o `dataset` importado, é hora de colocar a mão na massa!

O **MongoDb** possui diversas ferramentas, como, por exemplo, `mongo`, `mongo sh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as _queries_, o importante é realizá-las.


_**Exercícios 25.1 - Parte I**_

 - Utilizando o estágio `$match`, escreva uma agregação para retornar somente os clientes do sexo `MASCULINO`;
 - Utilizando o estágio `$match`, escreva uma agregação para retornar somente os clientes do sexo `FEMININO` e com data de nascimento **entre** os anos de `1995` e `2005`;
 - Utilizando o estágio `$match`, escreva uma agregação para retornar somente os clientes do sexo `FEMININO` e com data de nascimento entre os anos de `1995` e `2005`, limitando a quantidade de documentos retornados em `5`;
 - Conte quantos clientes do estado `SC` **existem** na coleção. Retorne um documento em que o campo `_id` contenha a UF e outro campo com o total;
 - Agrupe os clientes por `sexo`. Retorne o total de clientes de cada sexo no campo `total`;
 - Agrupe os clientes por `sexo` e `uf`. Retorne o total de clientes de cada sexo no campo `total`;
 - Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
    ```JSON
    {
      "estado": "SP",
      "sexo": "MASCULINO",
      "total": 100
    }
    ```
 - Descubra quais são os `5` clientes que gastaram o **maior** valor;
 - Descubra quais são os `10` clientes que gastaram o **maior** valor no ano de `2019`;
 - Descubra quantos clientes compraram mais de `5` vezes. Retorne um documento que contenha **somente** o campo clientes com o `total` de clientes; <br>
    _Dica: O operador `$count` pode simplificar sua query._
 - Descubra quantos clientes compraram menos de **três** vezes **entre** os meses de `Janeiro de 2020` e `Março de 2020`;
 - Descubra quais as **três** `uf`s que mais compraram no ano de `2020`. Retorne os documentos no seguinte formato:
    ```JSON
    {
      "totalVendas": 10,
      "uf": "SP"
    }
    ```
 - Encontre qual foi o `total` de vendas e a `média` de vendas de cada `uf` no ano de `2019`. Ordene os resultados pelo **nome** da `uf`. Retorne os documentos no seguinte formato:
    ```JSON
    {
      "_id": "MG",
      "mediaVendas": 9407.129225352113,
      "totalVendas": 142
    }
    ```
