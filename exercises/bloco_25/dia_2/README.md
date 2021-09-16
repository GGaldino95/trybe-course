### Bloco 25, Dia 2 -> Aggregation Framework - Parte 2

O **MongoDb** possui diversas ferramentas, como, por exemplo, `mongo`, `mongo sh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as _queries_, o importante é realizá-las.

Você continuará utilizando o banco de dados `erp` do dia anterior. Nos exercícios `1` a `8` , você utilizará o mesmo _pipeline_. A ideia é começar com um _pipeline_ pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios. Vamos lá?


_**Exercícios 25.2 - Parte I**_

 - Utilize uma combinação das expressões aritméticas e adicione um campo chamado `idade` à coleção `clientes`. Algumas dicas:
   - Arredonde **para baixo** o valor da idade;
   - Calcule a idade usando a **diferença** entre a data corrente e a data de nascimento;
   - `1` dia é igual a `86400000` milissegundos;
 - Utilizando o novo campo `idade`, conte quantos clientes têm **entre** `18` e `25` anos;
 - Remova os estágios `$count` e `$match` do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo `compras`;
 - Selecione **TODOS** os clientes que compraram entre `Junho de 2019` e `Março de 2020`;
 - Confira o número de documentos retornados pelo _pipeline_ com o método `itcount()`. Até aqui, você deve ter `486` documentos sendo retornados;
 - Ainda nesse _pipeline_, descubra os `5` estados com mais compras;
 - Descubra o cliente que mais consumiu `QUEIJO PRATO`. Retorne um documento com a seguinte estrutura:
    ```JSON
    {
      "nomeCliente": "NOME",
      "uf": "UF DO CLIENTE",
      "totalConsumido": 100
    }
    ```
 - Selecione todas as vendas do mês de `Março` de 2020, com status `EM SEPARACAO`. Acrescente um campo chamado `dataEntregaPrevista` com valor igual a **três dias** após a data da venda. Retorne apenas os campos `clienteId`, `dataVenda` e `dataEntregaPrevista`;

_**Exercícios 25.2 - Parte BONUS**_

 - Calcule a diferença absoluta em dias **entre** a data da primeira entrega prevista e a última, considerando o _pipeline_ do exercício anterior;
 