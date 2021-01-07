### Bloco 6, Dia 5 -> CSS Responsivo - Mobile First

_**Exercício 6.5 - Parte I -  Criar uma página para uma tela pequena**_

Para os exercícios a seguir, crie um arquivo **_HTML_** `exercise1.html` e um arquivo **_CSS_** `exercise1.css`.

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso).
Agora você vai ajustar o CSS para melhorar a visualização da página.

Realize as seguintes tarefas:
 - Faça o tamanho da fonte ser **maior**;
 - Faça o tamanho da fonte dos elementos `h1` ser **menor**;
 - Aumente o **espaçamento** entre as figuras;
 - Adicione um pouco de `margin` na página.

 > Ao pensar no _design_ de uma tela pequena primeiro, estamos aplicando a abordagem do _mobile first_. Fazendo isso, começamos com um _design_ básico ~~(mínimo denominador comum)~~ e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e _layouts_ específicos.
 > Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral, que isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.

**Dica: no Chrome você pode facilmente encontrar qual o tamanho da sua tela usando o "Inspecionar elemento". Abra-o e redimensione a janela, enquanto isso preste atenção no topo da tela: as dimensãoes de largura e altura irão aparecer conforme você redimensiona a tela.**

 - Comece a expandir a **largura** da sua tela. Faça isso até chegar em um ponto onde o _design_ atual da página não funciona mais.
     - Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra...

 - Guarde a largura da tela no ponto que você identificou que o _layout_ atual não funcionou bem (por exemplo `800px`) . Esse será o primeiro _breakpoint_ do _layout_ . Um _breakpoint_ é apenas um ponto onde estamos definindo que o _design_ atual deve mudar;

 - Crie uma media query no seu arquivo **_CSS_** , usando a dimensão em _pixels_ que você guardou como o `min-width` do teste da `media query`. Dentro desse _breakpoint_, adicione os seguintes ajustes:
     - Altere a cor de fundo (isso vai te ajudar a perceber quando a `media query` teve efeito);
     - Ajuste o tamanho da fonte;
     - Ajuste as margens da página;
     - Faça as imagens serem mostradas em duas colunas.

Agora, você vai criar outro _breakpoint_ para telas grandes. Redimensione sua tela de novo para encontrar um novo _breakpoint_.
 - Crie uma nova media query no seu arquivo **_CSS_** usando a dimensão que você encontrou para telas grandes (por exemplo `1300px`), e realize os seguintes ajustes dentro do _breakpoint_:
     - Altere a cor de fundo;
     - Ajuste o tamanho da fonte;
     - Ajuste as margens da página;
     - Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.


_**Exercício 6.5 - Parte II - Criando 3 layouts diferentes utilizando o mobile first**_

Para os exercícios a seguir, crie um arquivo **_HTML_** `exercise2.html` e um arquivo **_CSS_** `exercise2.css`.

 - Utilizando a abordagem _mobile_ first e `media queries`, **crie três versões de layout diferentes para essa página**. Cada _layout_ deve corresponder a um tamanho diferente de página (pequeno, médio e grande).
     - **Faça pelo menos um commit para cada layout;**

 - Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:
     - Onde a lista de capítulos deve estar posicionada?
     - Como a história deve ser mostrada?
     - Como o cabeçalho deve ser posicionado?
     - O que fazer com as informações do autor em cada tamanho de tela?

 - Talvez você precise alterar o **_HTML_** um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

_**Exercício 6.5 - Parte III - Criando layouts para dispositivos móveis e para impressão**_

Para os exercícios a seguir, crie um arquivo **_HTML_** `exercise3.html` e um arquivo **_CSS_** `exercise3.css`.

O objetivo deste exercício é usar media queries para fazer a página acima parecer diferente na hora da impressão e em diferentes tamanhos de tela.

 - Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:
     - Os elementos com `id header` , `navigation` e `footer` devem desaparecer;
     - O elemento com `id aside` deve ser mostrado abaixo do conteúdo principal.

 ![Exercicio 3.1](https://course.betrybe.com//fundamentals/css-responsive/images/exercise_3_before_print.png)

 - Adicione uma media query no arquivo **_CSS_** e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:
     - O elemento com `id aside` deve desaparecer;
     - O elemento `body` não deve ter `padding`;
     - As imagens não devem exceder a largura da tela;
     - Os itens dentro do elemento `navigation` devem aparecer cada um em sua própria linha;
     - O elemento com `id header` deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo apos o usuário rolar a página.

 ![Exercicio 3.2](https://course.betrybe.com//fundamentals/css-responsive/images/exercise_3_before_small_phone.png)
 ![Exercicio 3.3](https://course.betrybe.com//fundamentals/css-responsive/images/exercise_3_before_android.png)

_**Exercício 6.5 - Parte BÔNUS**_

Agora que você já está fera em criar layouts específicos para diferentes tamanhos de tela utilizando a abordagem mobile first , que tal voltar ao [Exercício 3.4 - HTML Semântico][3.4] e criar um layout bem bacana para ela ser acessada a partir de telas menores?

 - Crie um _layout_ específico para telas pequenas (smartphones); 📱
 - Crie um _layout_ específico para telas médias (tablets); 📱
 - Crie um _layout_ específico para impressão (impressoras, salvar como PDF, etc). 🖨
     - Dica: o _Bootstrap_ não tem uma classe específica para o tipo de media `print`. Você deve definir a media query no seu arquivo **_CSS_** e estilizar conforme achar melhor! 😉

[3.4]: https://github.com/GGaldino95/trybe-course/tree/main/exercises/bloco_3/dia_4