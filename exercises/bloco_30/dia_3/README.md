### Bloco 30, Dia 3 -> ORM - Associations

Nesse exercício vamos criar uma _API_ que será responsável pela gestão de um sistema de saúde. Nesse sistema terão pacientes, cada um com seu plano. Cada paciente pode ter realizado várias cirurgias, que por sua vez, devem ser listadas e categorizadas. O diagrama abaixo demonstra como o banco de dados se comportará:

![Diagrama](images/diagrama.png)

Este repositório ja contém alguns arquivos padrões, ao executar `npm install` as seguintes dependências serão instaladas:

 - `express`;
 - `nodemon`;
 - `sequelize`;
 - `mysql2`;
 - `sequelize-cli`;

Será necessário configurar o arquivo `config/config.js` com os dados de seu servidor.

Após, utilize os comandos:
```bash
 npx sequelize db:create
 npx sequelize db:migrate
 npx sequelize db:seed:all
```

Esses comandos vão criar respectivamente, a `database`, as `tables` e após, inserir dados exemplos nas tabelas.

As tabelas criadas são:

 - `Patients`;
 - `Patients_surgeries`;
 - `Plans`;
 - `Surgeries`;

Feito isso, ja podem ser realizados os exercícios abaixo:

<br>

_**Exercícios 30.3 - Parte I**_

 - Crie o model de `Plans`;

 - Crie o model de `Patients`;

 - Crie o model de `Surgeries`;

 - Crie o model de `Patient_surgeries`;

 - Crie um _endpoint_ que liste **todos** os pacientes e seus respectivos planos;

 - Crie um _endpoint_ que liste **todos** os pacientes e suas respectivas cirurgias realizadas;

 - Crie um _endpoint_ que de acordo com o `id` de um plano, que deve ser recebido via `requisição`, liste os pacientes que o possuem;

<br>

_**Exercícios 30.3 - Parte BONUS**_

 - Crie um _endpoint_ capaz de adicionar um novo paciente;

 - Crie um _endpoint_ que liste **todos** os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável;

 - Crie um _endpoint_ que de acordo com o nome do médico, que deve ser recebido via requisição, liste **todas** as cirurgias realizadas pelo mesmo, um `get` na `url` `"http://localhost:3000/surgeries/Rey%20Dos%20Santos"` deve retornar as cirurgias realizadas pelo médico `Rey Dos Santos`;
