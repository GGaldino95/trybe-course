### Bloco 21, Dia 1 -> Funções mais usadas no SQL

Para realizar os exercícios propostos para o dia, faremos uso da tabela `employees` do banco de dados `hr`. O banco de dados ser gerado e restaurado usando [este arquivo SQL](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql).

 > Instruções de como restaurar o banco de dados
 > - Baixe o conteúdo do arquivo .sql linkado acima;
 > - Copie todo o código SQL;
 > - Abra o MySQL Workbench e abra uma nova janela de query;
 > - Copie todo o código para dentro dessa janela;
 > - Selecione todo o código usando Ctrl + a;
 > - Execute o código teclando Ctrl + ENTER.

_**Exercícios 21.1**_

 - Escreva uma _query_ que exiba o maior salário da tabela;
 - Escreva uma _query_ que exiba a **diferença** entre o maior e o menor salário;
 - Escreva uma _query_ que exiba a média salarial de cada `JOB_ID`, ordenando pela média salarial em ordem **decrescente**.
 - Escreva uma _query_ que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias;
 - Escreva uma _query_ que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais;
 - Escreva uma _query_ que exiba a quantidade de pessoas que trabalham como pessoas programadoras (`IT_PROG`);
 - Escreva uma _query_ que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (`JOB_ID`);
 - Utilizando a _query_ anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (`IT_PROG`);
 - Escreva uma _query_ que exiba em ordem **decrescente** a média salarial de todos os cargos, exceto das pessoas programadoras (`IT_PROG`);
 - Escreva um _query_ que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários; _Dica: agrupe pelo `department_id`._
 - Escreva uma _query_ que atualize a coluna `PHONE_NUMBER`, de modo que todos os telefones iniciados por `515` agora devem iniciar com `777`;
 - Escreva uma _query_ que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres;
 - Escreva uma _query_ que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `ano no qual foi contratado` (exiba somente o `ano`);
 - Escreva uma _query_ que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `dia do mês no qual foi contratado` (exiba somente o `dia`);
 - Escreva uma _query_ que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `mês no qual foi contratado` (exiba somente o `mês`);
 - Escreva uma _query_ que exiba os nomes dos funcionários em letra maiúscula;
 - Escreva uma _query_ que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987;
 - Escreva uma _query_ que exiba as seguintes informações de cada funcionário: `nome`, `sobrenome`, `tempo que trabalha na empresa` (em `dias`).