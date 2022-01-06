# Bloco 5, Dia 7 -> PROJETO - Meme Generator

## Requisitos Obrigatórios:

* Você deve criar um site que permita o upload de uma imagem e a inserção de um texto sobre ela, estilizado de forma apropriada.

 **Em outras palavras, um meme generator.** 😜

### 1 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.

##### As seguintes verificações serão feitas:

- A caixa onde o texto é inserido deve ter um `id` denominado `text-input`;

- Você deve criar um elemento para servir de _"container"_ para a **imagem** e para o **texto** do meme. Este elemento deve ter um `id` denominado `meme-image-container`;

- Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o `id` denominado `meme-text`;

- Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

### 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.

##### As seguintes verificações serão feitas:

- Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um `id` denominado `meme-image`;

- O elemento onde é feito o upload da imagem deve ser identificado com o `id` denominado `meme-insert`. Este elemento não precisa estar dentro do elemento de container;

- A imagem deve estar totalmente contida dentro do elemento identificado como `meme-image-container` ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~;

- O texto inserido no elemento `text-input` deve ser inserido sobre a imagem escolhida `meme-image`.

### 3 - O site deve ter uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.

##### As seguintes verificações serão feitas:

- O elemento que serve de container para a imagem deve ter o a cor de fundo branca;

- O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;

- A imagem deve estar totalmente contida dentro do elemento identificado como `meme-image-container` ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~.

### 4 - O texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.

##### As seguintes verificações serão feitas:

- O texto do elemento `meme-text` deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;

- O texto do elemento `meme-text` deve ter a fonte com o tamanho de 30 pixels;

- O texto do elemento `meme-text` deve estar na cor branca;

### 5 - Limite o tamanho do texto que o usuário pode inserir.

##### As seguintes verificações serão feitas:

-  A quantidade máxima de caracteres digitáveis no elemento `text-input` deve ser 60.


## Requisitos Bônus:

### 6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.

##### As seguintes verificações serão feitas:

- As bordas devem ser acrescentadas ao container, identificado como `meme-image-container`;

- Os três botões devem ser elementos do tipo `button`;

- Cada elemento `button` deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;

- Cada `button` deve ter o respectivo `id` e estilizar o container conforme especificado:

  * Um botão identificado com o `id` chamado `fire` deve estilizar o container da imagem com uma borda de 3 pixels, _dashed_ e vermelha.

  * Um botão com `id` chamado `water` deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo _double_ .

  * Um botão com `id` chamado `earth` deve estilizar o container da imagem com uma borda do tipo _groove_, verde e com 6 pixels.

- Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer;

### 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.

##### As seguintes verificações serão feitas:

- O elemento que mostra as miniaturas dos memes deve ser identificado um um `id` denominado `meme-1` para o primeiro meme, `meme-2` para o segundo, `meme-3` para o terceiro e `meme-4` para o quarto.

- As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado `imgs` com os respectivos nomes `meme1.png`, `meme2.png`, `meme3.png` e `meme4.png`. Atenção também para o formato das imagens! ⚠️

- As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.

---

## Dicas

- Para fazer este projeto você deverá atribuir ao texto que vai sobre a imagem o estilo `position: absolute;`. Leia mais sobre ele [aqui](https://www.w3schools.com/css/css_positioning.asp).

- Para que um elemento filho fique posicionado na frente de um elemento `container` você pode deve utilizar `position: relative;` na estilização do elemento `container` e `position: absolute` no elemento filho. [Esse post pode ajudar a entender a solução.](https://dzone.com/articles/css-position-relative-vs-position-absolute)

- Para receber os dados da **imagem** e do **texto** do meme, é preciso utilizar a tag ["input"](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input). Consulte a documentação sobre os tipo de input `text` e `file`.

- Para mostrar a imagem selecionada a partir do _input_ no elemento dentro do container, você precisará alterar a propriedade `src` desse elemento, passando para ele o caminho da imagem que foi carregada no _input_. [Essa resposta pode te ajudar a encontrar uma solução para esse enigma](https://stackoverflow.com/a/27165977).

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/meme-generator`.
