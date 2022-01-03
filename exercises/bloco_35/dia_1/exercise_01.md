## Exercicio 01 

 - Faça uma chamada `GET`, utilizando o `cURL`;

```bash
curl localhost:3000
```

**OU**

```bash
curl -X GET localhost:3000
```

 - Faça uma chamada `POST`, utilizando o `cURL`, passando um `JSON` no `body` da requisição;

```bash
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "foo": "bar" }' \
  localhost:3000
```

 - Faça uma chamada qualquer, utilizando o `cURL`, passando um `header` na requisição.

```bash
curl --request POST \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ApiKey EXAMPLE-TOKEN' \
  --data '{ "foo": "bar" }' \
  localhost:3000
```
