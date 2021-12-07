### Bloco 27, Dia 2 -> Arquitetura de Software - Camada de Controller e Service

Você vai desenvolver uma aplicação de busca de CEP, chamada `cep-lookup`. A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, ao invés de cadastrar novos CEPs manualmente, a aplicação consultará uma _API_ externa para obter os dados do CEP desejado.
Utilize o banco de dados **`MySQL`**. Execute a seguinte _query_ para criar o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);
```

_**Exercícios 27.2 - Parte I**_

 - Crie uma nova _API_ utilizando o `express`;

 - A aplicação deve ser um pacote `Node.js`;

 - Dê ao pacote o nome de `cep-lookup`;

 - Utilize o `express` para gerenciar os `endpoints` da sua aplicação;

 - A aplicação deve ter a rota `GET` `/ping` , que retorna o status `200 OK` e o seguinte `JSON`:

```json
{ "message": "pong!" }
```

 - A aplicação deve escutar na porta `3000`;

 - Deve ser possível iniciar a aplicação através do comando `npm start`;


_**Exercícios 27.2 - Parte II**_

 - Crie o `endpoint` `GET` `/cep/:cep`;

 - O `endpoint` deve receber, no parâmetro `:cep`, um número de CEP válido;

 - O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço;
   - _Dica: Utilize o `regex` `\d{5}-?\d{3}` para validar o CEP_; <br><br>

 - Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte `JSON`:

```json
{ "error": { "code": "invalidData", "message": "CEP inválido" } }
```

 - Caso o CEP seja válido, realize uma busca no banco de dados;

 - Caso o CEP não exista no banco de dados, retorne o status `404 Not Found` e o seguinte `JSON`:

```json
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

 - Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```


_**Exercícios 27.2 - Parte III**_

 - Crie o endpoint `POST` `/cep`;

 - O endpoint deve receber a seguinte estrutura no corpo da requisição:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

 - Todos os campos são obrigatórios;

 - Utilize o `Joi` para realizar a validação. Em caso de erro, retorne o status `400 Bad Request`, com o seguinte `JSON`:

```json
{ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
```

 - O CEP deve ser composto por 9 dígitos com traço;
   - _Dica: Utilize o seguinte `regex` para validar o CEP: `\d{5}-\d{3}`_; <br><br>

 - Se o CEP já existir, retorne o status `409 Conflict` com o seguinte `JSON`:

```json
{
  "error": { "code": "alreadyExists", "message": "CEP já existente" }
}
```

 - Caso qualquer um dos campos seja inválido, retorne um `JSON` com o seguinte formato, variando a mensagem conforme o campo e o erro:
  ```json
    {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  ```

 - Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status `201 Created` com os dados do novo CEP no seguinte formato:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```


_**Exercícios 27.2 - Parte BONUS**_

 - Utilize uma _API_ externa para buscar CEPs que não existem no banco de dados;

 - Quando um CEP não existir no banco de dados, utilize a _API_ https://viacep.com.br/ws/[numero-do-cep]/json/ para obter suas informações;

 - Caso o CEP não exista na _API_ externa, você receberá o `JSON` `{ "erro": true }`. Nesse caso, retorne status `404 Not Found` com o seguinte `JSON`:

```json
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

 - Caso o CEP exista na _API_ externa, armazene-o no banco e devolva seus dados no seguinte formato:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

   - _Dica: Na arquitetura **MSC**, os models são responsáveis por toda a comunicação externa de uma aplicação, o que inclui APIs externas. Logo, você precisará de um `model` para acessar a API;_
