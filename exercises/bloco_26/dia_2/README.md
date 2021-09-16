### Bloco 26, Dia 2 -> Node.js - Fluxo Assíncrono

_**Exercícios 26.2 - Parte I**_

 - Crie uma função que recebe três parâmetros retorna uma `Promise`;
   - Caso algum dos parâmetros recebidos não seja um número, rejeite a `Promise` com o motivo `Informe apenas números`;
   - Caso todos os parâmetros sejam numéricos, **some** os dois primeiros e **multiplique** o resultado pelo terceiro `((a + b) * c)`;
   - Caso o resultado seja **menor** que `50`, rejeite a `Promise` com o motivo `Valor muito baixo`;
   - Caso o resultado seja **maior** que `50`, resolva a `Promise` com o valor obtido;

 - Escreva um código para consumir a função construída no exercício anterior;
   - Gere um número aleatório de `1` a `100` para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código:
      ```js
      Math.floor(Math.random() * 100 + 1);
      ```
   - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros;
   - Utilize `then` e `catch` para manipular a `Promise` retornada pela função;
     - Caso a `Promise` seja **rejeitada**, escreva na tela o motivo da rejeição;
     - Caso a `Promise` seja **resolvida**, escreva na tela o resultado do cálculo;

 - Reescreva o código do exercício anterior para que utilize `async/await`;
  <br> _(Lembre-se: a palavra chave `await` só pode ser utilizada dentro de funções `async`)_

 - Realize o download [deste arquivo](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json) e salve-o como `simpsons.json`. Utilize o arquivo baixado para realizar os requisitos abaixo;
  <br> _(Você pode utilizar `then` e `catch`, `async/await` ou uma mistura dos dois para escrever seu código. Procure não utilizar `callbacks`)_
   - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato `id - Nome`;
   - Crie uma função que receba o `id` de uma personagem como parâmetro e retorne uma `Promise` que é **resolvida** com os dados da personagem que possui o `id` informado. Caso não haja uma personagem com o `id` informado, **rejeite** a `Promise` com o motivo `id não encontrado`;
   - Crie uma função que altere o arquivo `simpsons.json` retirando os personagens com `id` `10` e `6`;
   - Crie uma função que leia o arquivo `simpsons.json` e crie um novo arquivo, chamado `simpsonFamily.json`, contendo as personagens com `id` de `1` a `4`;
   - Crie uma função que adicione ao arquivo `simpsonFamily.json` o personagem `Nelson Muntz`;
   - Crie uma função que substitua o personagem `Nelson Muntz` pela personagem `Maggie Simpson` no arquivo `simpsonFamily.json`;

 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo;
   - Utilize o `Promise.all` para manipular vários arquivos ao mesmo tempo;
   - Dado o seguinte _array_ de _strings_: `['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']`, faça com que sua função crie um arquivo contendo cada _string_, sendo o nome de cada arquivo igual a `file<index + 1>.txt`. Por exemplo, para a _string_ `Finalmente`, o nome do arquivo é `file1.txt`;
   - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado `fileAll.txt`;
   - O conteúdo do arquivo `fileAll.txt` deverá ser `Finalmente estou usando Promise.all !!!`;

_**Exercícios 26.2 - Parte BONUS**_

 - Crie um _script_ que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária;
   - Pergunte à pessoa usuária qual arquivo ela deseja ler;
   - Leia o arquivo indicado;
   - Caso o arquivo não exista, exiba na tela `Arquivo inexistente` e encerre a execução do _script_;
   - Caso o arquivo exista, escreva seu conteúdo na tela;

 - Crie um _script_ que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária;
   - Pergunte à pessoa usuária qual arquivo ela deseja utilizar;
   - Leia o arquivo;
   - Caso o arquivo não exista, exiba um erro na tela e encerre a execução do _script_;
   - Caso o arquivo exista, solicite a palavra a ser substituída;
   - Solicite a nova palavra, que substituirá a palavra anterior;
   - Imprima na tela o conteúdo do arquivo com as palavras já substituídas;
   - Pergunte o nome do arquivo de destino;
   - Salve o novo arquivo no caminho de destino;
  
    _(**Dica:** Utilize a classe `RegExp` do **JS** para substituir todas as ocorrências da palavra com `replace(new RegExp(palavra, 'g'), novaPalavra)`)_