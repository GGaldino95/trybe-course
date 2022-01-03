### Bloco 35, Dia 1 -> Arquitetura de redes

Iremos criar _servers_ com **Python** utilizando alguns dos protocolos vistos e, então, vamos explorá-los. Se tiver dúvidas ao utilizar alguma das ferramentas que mencionamos nos exercícios, exercite suas habilidades de busca no **Google** ou experimente o comando `man`!

_**Exercícios 35.1 - Parte I**_

O primeiro server que iremos utilizar é o nosso velho amigo `HTTP`, na camada de aplicação. Você pode tanto criar um quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta `cURL` para realizarmos uma chamada `HTTP` para ele. A ideia aqui é que o projeto tenha rotas `GET` e `POST`, para que seja possível enviar requisições para os _endpoints_ e receber respostas, assim como já nos acostumamos a receber via _browser_ ou utilizando programas como o `Postman`. <br>
Caso tenha dificuldades maiores, você pode utilizar o `Postman` para converter uma requisição em `cURL`, é só fazer a requisição nele como você já sabe e depois clicar no botão `code` (que fica embaixo do `save`) e escolher `cURL`.

 - Faça uma chamada `GET`, utilizando o `cURL`;

 - Faça uma chamada `POST`, utilizando o `cURL`, passando um `JSON` no `body` da requisição;

 - Faça uma chamada qualquer, utilizando o `cURL`, passando um `header` na requisição;

<br>

_**Exercícios 35.1 - Parte II**_

Ainda utilizando o `cURL`, vamos explorar mais alguns conceitos do `HTTP`. Relembre que falamos que o `HTTP` organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um `200` tanto nós quanto um _client_ `HTTP` sabemos que aquela _request_ foi realizada com sucesso. Vamos explorar isso com o `cURL`.

 - Faça uma chamada `GET`, utilizando o `cURL`, para `"google.com"`;

 - Perceba que foi retornado um `301`. Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é `www.google.com`. Ao acessarmos pelo navegador, não percebemos isso porquê ele faz o redirecionamento para a página certa para nós ao encontrar o `301` , porém, se você inspecionar a _network_ você irá identificar esse redirecionamento. Faça uma nova chamada a `"google.com"`, porém agora utilizando o parâmetro `-L` ou `--location`, que serve para **"seguir redirecionamentos"**;

<br>

_**Exercícios 35.1 - Parte III**_

Agora utilizando o `wget`, pegue o conteúdo da página do site da **Trybe**, depois abra o arquivo `HTML` baixado em seu navegador. Faça o mesmo processo com outras páginas web.

<br>

_**Exercícios 35.1 - Parte IV**_

Agora iremos para a camada de transporte. Crie um servidor `TCP` usando o módulo `socketserver` que já vem embutido com o **Python**. Nosso servidor `TCP` deverá:

 - Responder com um `"Olá, client"`, logo quando estabelecer uma conexão;

 - Imprimir no console todo dado recebido;

 - Responder com os dados recebidos (como um eco);

 - Utilize a porta `8085`;

Perceba que o servidor sozinho não faz nada. Ele precisa que alguém se conecte a ele, então para testá-lo você pode utilizar o comando `telnet localhost 8085`, onde `telnet` é a aplicação que iremos utilizar, `localhost` é o local onde o servidor está (no caso, o seu próprio PC) e `8085` é a porta em que o servidor está escutando conexões.

**Dicas:**

 - A documentação do módulo traz exemplos de como instanciar seu servidor `TCP`;

 - Na mesma documentação, temos exemplos de classes para responder as requisições;

 - Os dados na requisição vêm em `bytes` -- não _strings_! `bytes` podem ser decodificados em _string_ com a codificação correta;

 - Do mesmo jeito, para responder você pode precisar codificar _strings_ em `bytes`;

 - `telnet` sempre envia `ASCII`, já o `netcat` envia no _encoding_ do sistema (em **Linux**, geralmente `utf-8`, mas confirme com o comando `locale`);

<br>

_**Exercícios 35.1 - Parte V**_

Utilizando o comando `telnet` ou o `Netcat` (`nc`):

 - Conecte no _server_ do exercício anterior e envie informações. O _server_ deverá imprimir as mensagens enviadas no console;

 - Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando `telnet` ou `nc`;

<br>

_**Exercícios 35.1 - Parte VI**_

Reinicie o servidor `TCP` e agora faça uma requisição utilizando o `cURL` (`HTTP`). Perceba o que é exibido no console do _server_, já que não estamos utilizando o `HTTP` nele. Perceba também que o comando `cURL` não recebe uma resposta `HTTP` com sentido (um _status code_ `200`, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim;

<br>

_**Exercícios 35.1 - Parte VII**_

Agora iremos explorar o outro protocolo de transporte que aprendemos. Crie um servidor `UDP` usando o mesmo módulo `socketserver`. Nosso servidor `UDP` deverá:

 - Imprimir no console toda mensagem recebida (não esqueça de converter também para _string_);

 - Responder com os dados recebidos (como um eco);

 - Utilize a porta `8084`;

**Dicas:**

 - Todas as dicas do **exercício 4** se aplicam;

 - `telnet` não funciona com `udp` -- use `netcat`;

<br>

_**Exercícios 35.1 - Parte VIII**_

Envie pacotes para o servidor `UDP` utilizando o `Netcat` (`nc`). Em seguida pare o servidor e perceba que como não há conexão nada é sentido pelo _client_;

<br>

_**Exercícios 35.1 - Parte IX**_

Faça uma chamada ao _server_ utilizando o `cURL`. Lembre que, além do `HTTP`, o comando utiliza o protocolo `TCP` e não o `UDP`. Repare o que acontece;

<br>

_**Exercícios 35.1 - Parte BONUS**_

 - Identifique o `IP` interno e externo da sua máquina;

 - Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora;
