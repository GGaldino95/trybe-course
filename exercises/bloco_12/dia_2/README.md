### Bloco 12, Dia 2 -> Formulários no React

Lembra do formulário que você criou usando JavaScript _"clássico"_ ? Vamos criar um parecido em **React**, e você verá como suas habilidades evoluíram desde então!

 - Crie um novo projeto, utilizando `npx create-react-app my-form-2.0`;
 - Caso julgue necessário, crie estilos **CSS** para seu formulário, de acordo com a sua imaginação;
 - Faça tudo utilizando as abstrações do **React**;
 
Vamos criar um formulário de cadastro de currículo com base nas especificações seguintes:

_**Exercício 12.2 - Parte I**_

 - Crie um `<fieldset>` para os dados pessoais a seguir:
     - Nome - **_Texto_**
         - Limite de 40 caracteres;
         - Todos os caracteres devem ser transformados para `UPPER CASE` assim que forem digitados;
         - Campo obrigatório.

     - Email - **_Texto_**
         - Limite de 50 caracteres;
         - Campo obrigatório.

     - CPF - **_Texto_**
         - Limite de 11 caracteres;
         - Campo obrigatório.

     - Endereço - **_Texto_**
         - Limite de 200 caracteres;
         - Remover qualquer caractere especial que seja digitado;
         - Campo obrigatório.

     - Cidade - **_Texto_**
         - Limite de 28 caracteres;
         - Ao remover o foco desse campo (evento `onBlur`), verificar se o nome da cidade começa com números. Caso comece, limpar o campo;
         - Campo obrigatório.

     - Estado - **_ComboBox_**
         - Todos os estados do Brasil;
         - Campo obrigatório.

     - Tipo - **_Radio_**
         - Casa, Apartamento;
         - Campo obrigatório.


_**Exercício 12.2 - Parte II**_

 - Crie outro `<fieldset>` para dados do seu último emprego:
     - Resumo do currículo - **_TextArea_**
         - Limite de 1000 caracteres;
         - Campo obrigatório.

     - Cargo - **_TextArea_**
         - Limite de 40 caracteres;
         - Quando o mouse passar por cima deste campo (evento `onMouseEnter`), exibir um alerta dizendo `'Preencha com cuidado esta informação.'`. Exiba essa mensagem apenas uma vez.
         - Campo obrigatório.

     - Descrição do cargo - **_Texto_**
         - Limite de 500 caracteres;
         - Campo obrigatório.


_**Exercício 12.2 - Parte III**_

 - Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário.


_**Exercício 12.2 - Parte IV**_

 - Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também.


Por último, vá até o [formulário][link] que você criou na aula `HTML & CSS - Forms` e veja as diferenças no código.

[link]: https://github.com/GGaldino95/trybe-course/tree/main/exercises/bloco_6/dia_1
