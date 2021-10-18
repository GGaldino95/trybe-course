### Bloco 27, Dia 1 -> Arquitetura de Software - Camada de Model

_**Exercícios 27.1 - Parte BONUS**_

Refatore a camada de `model` da aplicação criada nos exercícios anteriores para acessar o **`MySQL`** ao invés do **`MongoDB`**. Utilize o script `SQL` abaixo para criar o banco e a tabela que você precisará utilizar para realizar essa refatoração:

```sql
CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
```

> _Pode ser interessante fazer um cópia da aplicação que desenvolveu anteriormente, assim você terá os dois códigos para consultar posteriormente;_
