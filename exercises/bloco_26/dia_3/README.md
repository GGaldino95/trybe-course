### Bloco 26, Dia 3 -> Testes com Node.js

_**Exercícios 26.3 - Parte I**_

 - Estruture os testes utilizando `mocha` e `chai` para uma função que irá dizer se um número é `positivo`, `negativo` ou `neutro`:
   - Essa função irá receber um número como parâmetro e retornar uma string como resposta;
   - Quando o número passado for **maior** que `0` deverá retornar `positivo`, quando for **menor** que `0` deverá retornar `negativo` e quando **igual** a `0` deverá retornar `neutro`;

 - Descreva todos os cenário de teste utilizando `describes`;
 - Descreva todos os testes que serão feitos utilizando `its`;
 - Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado;

_**Exercícios 26.3 - Parte II**_

 - Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu;
  <br> _(**DICA:** Lembre-se de adicionar o script de `test` no `package.json` e de instalar as dependências)_

_**Exercícios 26.3 - Parte III**_

 - Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo `Number`;
   - Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a `Number` para a função;
   - Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma _string_ `o valor deve ser um número`;
   - Implemente em sua função tal validação para que o teste passe;

_**Exercícios 26.3 - Parte IV**_

 - Crie testes para uma função que escreverá um conteúdo em um arquivo específico;
   - Essa função deverá receber **dois** parâmetros: o _nome do arquivo_ e o _conteúdo_ desse arquivo;
   - Após concluir a escrita do arquivo ela deverá retornar um `ok`;
 - Descreva todos os cenários de teste utilizando `describes`;
 - Descreva todos os testes que serão feitos utilizando `its`;
 - Crie as asserções validando se o retorno da função possui o valor e tipo esperado;


_**Exercícios 26.3 - Parte V**_

 - Crie a função descrita no exercício 4 utilizando o módulo `fs` do `node`;
 - Adapte os testes adicionando `stub` ao módulo utilizado do `fs`, isolando assim o teste;
 - Garanta que todos os testes escritos no exercício 4 irão passar com sucesso;
