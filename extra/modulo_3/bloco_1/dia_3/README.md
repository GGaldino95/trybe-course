### Bloco 01, Dia 3 -> Manipulando Imagens no Docker

Pronto, agora já podemos **“dockerizar”** todas as nossa aplicações e, não só isso, podemos **“dockerizar”** nossos ambientes inteiro, tanto aplicações, quanto bancos de dados e outras tecnologias, assim como suas comunicações e configurações.

**Bora praticar!**

<br>

_**Exercícios 01.3 - Parte I**_

Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

 - Crie um arquivo `HTML` chamado `missao_trybe.html` que tenha a seguinte estrutura:

   - Tag `<title>` com o seguinte texto `“Trybe”`;

   - Tag `<h1>` com o seguinte texto `“Missão da Trybe”`;

   - Tag `<p>` com o seguinte texto `“Gerar oportunidade para pessoas”`;

   > Salve o arquivo em qualquer lugar da sua máquina com a extensão `html`;

 - Crie um container para manter um servidor `httpd:2.4` **Apache** e vincule sua porta interna com a porta `4545` da sua máquina local.

 - Após criar o container acesse a página `HTML` que está rodando no servidor em seu browser.

 - Acesse o arquivo `missao_trybe.html` e acrescente a tag `<p>` com o seguinte texto `“Nosso negócio é GENTE! #VQV”`;

 - Obtenha o `id` do `container` `httpd:2.4`;

 - Obtenha o `Mounts` através da propriedade `Source` que deve mostrar o volume desse `container` no `Docker Host`;

 - Agora **pare** o `container` `httpd:2.4`;

 - **Exclua** o seu `container`;

 - Verifique se a **pasta** onde você salvou o arquivo `html` permanece no mesmo lugar;

 - Obtenha o `IMAGE ID` do **servidor**;

 - Depois de obter o `IMAGE ID`, **exclua** a `imagem`.

<br>

_**Exercícios 01.3 - Parte II**_

Crie o arquivo `Compose` para subir um [ghost blog](https://ghost.org/), essa plataforma é similar com o **Wordpress** e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

 - Utilize a versão `“3”` no arquivo;

 - Crie um `service` para subir a plataforma, utilize a `imagem` `ghost:1-alpine`;

 - Publique a porta `2368`, fazendo `bind` também para a `2368`;

 - Suba a aplicação utilizando o `docker-compose` e então acesse a porta publicada para validar se deu tudo certo.

<br>

_**Exercícios 01.3 - Parte III**_

Por padrão o `ghost` utiliza um `sqlite` interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

 - Crie um novo serviço para o nosso banco de dados, podemos utilizar um `mysql`, utilize a `imagem` `mysql:5.7`;

 - Precisamos definir uma senha `root` para o nosso _bd_, para isso utilize a variável `MYSQL_ROOT_PASSWORD`, lembre-se que é possível utilizar a sintaxe `${}` para passar uma _env_ do `host`, para a _env_ do `container`;

 - Agora precisamos configurar nosso `service` com o `ghost` para utilizar o `MySQL`, para isso defina a variável `database__client` para `mysql`;

 - Defina o nome `ghost` para o nome do _database_ utilizando a variável `database__connection__database`;

 - E então, indique a conexão para o nosso `MySQL` na _env_ `database__connection__host`;

 - Para definir a pessoa usuária (_`root`_) e senha (_a mesma que definimos no nosso `MySQL_`), utilize respectivamente as _envs_ `database__connection__user` e `database__connection__password`;

 - Utilize a opção `depends_on` para criar **relações de dependências** entre os serviços;

 - Suba o ambiente com o novo arquivo usando o `docker-compose` e então **acesse a porta**;

<br>

_**Exercícios 01.3 - Parte IV**_

Agora vamos praticar os conceitos de `volumes` e `networks`.

 - Configure o nosso serviço `mysql` para utilizar um **volume**, conforme vimos no conteúdo, utilize o caminho _target_ `/var/lib/mysql`;

 - Ao invés de utilizar a rede padrão criada pelo **Compose**, defina uma rede chamada `my-network` para a comunicação dos dois serviços;

 - Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse-o;

<br>

_**Exercícios 01.3 - Parte V**_

Agora vamos criar um novo arquivo **Compose**, para rodarmos uma aplicação **React**, conforme vimos alguns exemplos do conteúdo:

 - Inicie um novo projeto **ReactJS** utilizando o `create-react-app`;

 - Crie o `Dockerfile`, conforme vimos na aula passada;

 - Crie um novo arquivo **Compose** utilizando a versão 3;

 - Defina um serviço no arquivo para nosso _app_, para isso utilize a opção `build` para apontar para o `Dockerfile`;

 - Publique a porta exposta no `Dockerfile` fazendo _bind_ para a porta `8080` do `localhost`;

<br>

_**Exercícios 01.3 - Parte VI**_

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do _app react_, e então execute o comando para subir o serviço novamente, **“rebuildando”** a `imagem` para aplicar as alterações.

