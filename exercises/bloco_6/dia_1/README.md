### Bloco 6, Dia 1 -> HTML & CSS - Forms

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:

_**Exercício 6.1 - Parte I**_

 - Crie um `<fieldset>` para os seguintes dados pessoais:
     - Nome - Texto
         - Limite de 40 caracteres;
         - Campo obrigatório.

     - Email - Texto
         - Limite de 50 caracteres;
         - Campo obrigatório.

     - CPF - Texto
         - Limite de 11 caracteres;
         - Campo obrigatório.

     - Endereço - Texto
         - Limite de 200 caracteres;
         - Campo obrigatório.

     - Cidade - Texto
         - Limite de 28 caracteres;
         - Campo obrigatório.

     - Estado - ComboBox
         - Todos os Estados do Brasil;
         - Utilize estruturas de repetição via **_JavaScript_** para gerar os `<option>`;
         - Campo obrigatório.

     - Tipo - Radio Button
         - Casa, Apartamento;
         - Campo obrigatório.

_**Exercício 6.1 - Parte II**_

 - Crie outro `<fieldset>` para dados do seu último emprego:
     - Resumo do currículo - TextArea
         - Limite de 1000 caracteres;
         - Campo obrigatório.

     - Cargo - Texto
         - Limite de 40 caracteres;
         - Campo obrigatório.

     - Descrição do cargo - Texto
         - Limite de 500 caracteres;
         - Campo obrigatório.

     - Data de início - Texto
         - Verificar o formato da data `dd/mm/aaaa`;
         - O dia deve ser > 0 e <= 31;
         - O mês deve ser > 0 e <= 12;
         - O ano não pode ser negativo;
         - Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada;
         - Campo obrigatório.

_**Exercício 6.1 - Parte III**_

 - Logo abaixo do formulário, crie um botão que:
     - Chame uma função **_JavaScript_** e interrompa o fluxo automático do form utilizando o `preventDefault()`;
     - Execute as validações que foram pedidas ao longo da montagem do formulário;
     - Monte uma `<div>` com o consolidado dos dados que foram inseridos no formulário.

_**Exercício 6.1 - Parte IV**_

 - Crie um botão **Limpar** que limpa todos os campos do formulário e a `<div>` com seu currículo também.