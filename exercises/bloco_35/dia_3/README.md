### Bloco 34, Dia 3 -> Raspagem de Dados

**Raspagem de dados** é uma técnica computacional para extrair dados provenientes de um serviço ou aplicação, estruturando-os em banco de dados, planilhas, ou outros formatos. Consiste em extrair dados de sites e transportá-los para um formato mais simples e maleável para que possam ser analisados e cruzados com mais facilidade.

Alguns passos aplicados nesta técnica são a realização de requisições, análise das resposta e extração dos dados, navegação do conteúdo, limpeza e armazenamento dos dados.

O **Python** possui um pacote para lidar com o protocolo `HTTP`, porém este não é tão amigável para seres humanos. Por isso vamos utilizar a biblioteca `requests`, que possui uma interface bem mais amigável. Ela pode ser instalada utilizando o comando abaixo, mas lembre-se de criar um ambiente virtual antes de instalar bibliotecas.
```bash
python3 -m pip install requests
```

Para realizar a extração de dados de um conteúdo web vamos utilizar uma biblioteca chamada `parsel`. Ela pode ser instalada com o comando o comando abaixo:
```bash
python3 -m pip install parsel
```

_**Exercícios 34.3 - Parte I**_

 - Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível;

 - Faça uma requisição ao recurso usuários da _API_ do **Github** (https://api.github.com/users), exibindo o `username` e `url` de todos os usuários retornados. Exemplo:
    ```
    mojombo https://api.github.com/users/mojombo
    defunkt https://api.github.com/users/defunkt
    pjhyett https://api.github.com/users/pjhyett
    wycats https://api.github.com/users/wycats
    ...
    ```

 - Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações `HTTP` como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedido. <br>
 Para verificar se foi bem sucedido, faça `assert "bot detected" not in response.text`, se nada acontecer, seu código está funcionando.

    > _Faça a inspeção de como a requisição é feita pelo navegador para conseguir replicar através do código._

 - Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html, faça a extração dos campos `título`, `preço`, `descrição` e `url` contendo a imagem de capa do livro;
   - O preço deve vir somente valores numéricos e ponto. Ex: `Â£13.76` -> `13.76`;
   - A descrição de ter o sufixo `"more..."` removido quando existir;
   - Os campos extraídos devem ser apresentados separados por vírgula. Ex: `título,preço,descrição,capa`;

    Exemplo:
    ```
    The Grand Design,13.76,THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEWhen and howdid the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existenceof beings like ours THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEÂ When and howdid the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existenceof beings like ourselves? And, finally, is the apparent âgrand designâor does science offer another explanation? The most fundamental questions about the origins of the universe and of lifeitself, once the province of philosophy, now occupy the territory where scientists, philosophers, and theologians meetâif only to disagree. In their new book, Stephen Hawking and LeonardMlodinow present the most recent scientific thinking about the mysteries of the universe, in nontechnical language marked by both brilliance and simplicity. In The Grand Design they explainthat according to quantum theory, the cosmos does not have just a single existence or history, but rather that every possible history of the universe exists simultaneously. When applied tothe universe as a whole, this idea calls into question the very notion of cause and effect. But the âtop-downâmultiverseâthe idea that ours is just one of many universes that appearedspontaneously out of nothing, each with different laws of nature.Along the way Hawking and Mlodinow question the conventional concept of reality, posing a âmodel-dependentâtheory ofeverything.âand provokeâlike no other. ,http://books.toscrape.com/catalogue/../../media/cache/9b/69/9b696c2064d6ee387774b6121bb4be91.jpg,5
    ```

 - Modifique o exercício anterior para retornar também quantos livros estão disponíveis apresentando como último campo no retorno;
    ```
    The Grand Design,13.76,THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEWhen and howdid the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existenceof beings like ours THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEÂ When and howdid the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existenceof beings like ourselves? And, finally, is the apparent âgrand designâor does science offer another explanation? The most fundamental questions about the origins of the universe and of lifeitself, once the province of philosophy, now occupy the territory where scientists, philosophers, and theologians meetâif only to disagree. In their new book, Stephen Hawking and LeonardMlodinow present the most recent scientific thinking about the mysteries of the universe, in nontechnical language marked by both brilliance and simplicity. In The Grand Design they explainthat according to quantum theory, the cosmos does not have just a single existence or history, but rather that every possible history of the universe exists simultaneously. When applied tothe universe as a whole, this idea calls into question the very notion of cause and effect. But the âtop-downâmultiverseâthe idea that ours is just one of many universes that appearedspontaneously out of nothing, each with different laws of nature.Along the way Hawking and Mlodinow question the conventional concept of reality, posing a âmodel-dependentâtheory ofeverything.âand provokeâlike no other. ,http://books.toscrape.com/catalogue/../../media/cache/9b/69/9b696c2064d6ee387774b6121bb4be91.jpg,5
    ```

    **Observação**: Importe o arquivo `books.json` no `MongoDB` antes de responder as próximas questões:
    ```bash
    mongoimport --db library books.json --jsonArray
    ```

 - Escreva um programa que se conecte ao banco de dados `library` e liste os livros da coleção `books` para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido;

 - Faça o calculo de quantos livros publicados (`STATUS = PUBLISH`) temos em nosso banco de dados por categoria. Ordenando-os de forma decrescente de acordo com a quantidade;

    > _Você pode utilizar `agreggation framework` para auxiliar neste exercício._

    Saída:
    ```
    Java 95
    Internet 41
    Microsoft .NET 33
    Web Development 16
    Software Engineering 15
    Business 12
    Programming 12
    Client-Server 11
    Microsoft 8
    Theory 7
    ...
    ```

<br>

**Exercícios 34.3 - Parte BONUS**_

 - Agora um desafio, vá ao site https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as imagens de todas as bandeiras;
    >  _Faça requisições para as `URLs` das imagens e escreva seus conteúdos em arquivos binários. São `206` ao total._

 - Alguns sites possuem paginação feita através de rolagem infinita. Descubra como funciona a rolagem infinita e extraia todas as citações do seguinte site: http://quotes.toscrape.com/scroll.
    > _São `100` citações no total._
