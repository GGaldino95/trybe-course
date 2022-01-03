### Bloco 35, Dia 2 -> Redes de computadores, ferramentas e segurança

### **Se você está utilizando **MacOS**, por favor, leias essas considerações. Caso contrário, pode seguir adiante para os exercícios.**

Como o uso avançado de _firewalls_ é mais comum em servidores, sendo esses mais comuns estarem utilizando **linux** ou **windows**, demos uma atenção maior ao `iptables`, que provavelmente será o _firewall_ com o qual iremos lidar no nosso dia-a-dia.
Porém, não podemos te deixar de fora da prática! Sendo assim, iremos passar um passo a passo sobre como você irá configurar uma máquina **Linux** no seu computador através do `docker`. Para começar, você precisa de instalar o `docker` no seu computador. Para isso, utilize o comando `brew` para auxiliar:

```bash
brew install --cask docker
```

Em seguida, execute o aplicativo do `docker` , que foi instalado na sua máquina através do `brew`, dê privilegio para o `docker` passando a sua senha e pronto! O `docker` já está rodando! Para testar, execute o comando abaixo:

```bash
docker ps
```

Tudo certo até então? Agora rode o comando abaixo para subir uma máquina **Linux** com a distro `ubuntu 20.4`. Estamos passando a _tag_ `--privileged` para que você consiga executar os comandos dos exercícios sem problemas de permissão de `host`:

```bash
docker run --privileged -p 8000:8000 -it ubuntu:20.04 bash
```

Beleza, com a máquina **Linux** rodando, execute os comandos abaixo para instalar o `iptables`, o `ping` e o `traceroute`:

```bash
apt-get update && apt-get install iputils-ping
apt-get update && apt-get install traceroute
apt-get update && apt-get install iptables
```

Agora rode os comandos abaixo para testar se está tudo certo:

```bash
ping google.com
traceroute google.com
iptables -L
```

Se algum deles não funcionar, reinicie o `docker` através do ícone na barra de tarefas, próximo à data e hora do computador. Em seguida, teste novamente.

Feito tudo isso, você já tem uma máquina **linux** sendo executada no seu computador e já está apto(a) a fazer os exercícios abaixo!

_**Exercícios 35.2 - Parte I**_

 - Defina uma _regra de firewall_ utilizando o comando `iptables -A`, que bloqueie (`block` ou `REJECT/DROP`) toda a entrada (`in` ou `INPUT`) de pacotes utilizando o protocolo `ICMP`, impedindo assim que a máquina responda ao comando `ping`. Lembre-se, você pode executar o comando `ping` para validar se sua regra está funcionando corretamente: `ping 127.0.0.1` (você pode adicionar o parâmetro `-O` para exibir os pings rejeitados também 😉);

<br>

_**Exercícios 35.2 - Parte II**_

 - Exclua a regra anterior utilizando o parâmetro `-D`;

<br>

_**Exercícios 35.2 - Parte III**_

 - Agora vamos criar uma regra para bloquear o tráfego `HTTPS`. Para isso, iremos bloquear a saída de pacotes (`out` ou `OUTPUT`). Lembre-se, a porta padrão para esse protocolo é a `443`, para especificá-la utilize o parâmetro `--sport`. Ele utiliza também o protocolo `TCP`. Para testar sua regra, tente acessar um site pelo navegador que use o protocolo, como o **Youtube**, o **Google** ou o **Facebook**;

<br>

_**Exercícios 35.2 - Parte IV**_

 - Bloqueie agora o tráfego de saída para `HTTP`. Lembre-se, também é utilizado o protocolo `TCP` e a porta `80`. Para testar sua regra, tente acessar um site pelo navegador que use `HTTP`;

<br>

_**Exercícios 35.2 - Parte V**_

 - Para finalizar, vamos limpar todas as regras. Para isso, utilize o comando `--flush` do `iptables` (**Linux**);

<br>

_**Exercícios 35.2 - Parte VI**_

Agora, vamos utilizar um tipo de _proxy_ bem legal que pode ser bastante útil no nosso dia como pessoas desenvolvedoras: o `NGROK`. Com ele conseguimos criar um túnel para o nosso `localhost`:

 - Crie um servidor `HTTP` em sua máquina executando na porta `80`, pode ser um **front-end** ou um **back-end** criado em aulas anteriores;

 - Baixe o `ngrok` e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções no [site oficial](https://ngrok.com/download);

 - Conforme instruções do site, crie um túnel para a porta `80` de sua máquina;

 - Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu _smartphone_ ou outro computador 😎;

<br>

_**Exercícios 35.2 - Parte VII**_

No conteúdo vimos o que são os protocolos `SSL` e `TLS`. Vamos subir nosso próprio servidor `HTTPS`, utilizando nosso próprio certificado!

 - Vamos utilizar a ferramenta [OpenSSL](https://www.openssl.org/) para gerar nossos certificados. Ela já vem instalada na maioria das distros **Linux**. No `Docker`, no entanto, você vai precisar executar:

    ```bash
    apt-get update && apt-get install python3 openssl
    ```

 - Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo `TLS` com o `HTTPS`, não sendo capaz de ser aceito pelo navegador;

    ```bash
    openssl genrsa -out key.pem
    openssl req -new -key key.pem -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
    rm csr.pem
    ```

 - Acabamos de gerar dois arquivos, o `cert.pem` (o certificado) e o `key.pem` (chave privada). Copie os dois arquivos para um diretório onde iremos criar nosso servidor `HTTPS`;

 - Agora vamos escrever um servidor `https` usando os módulos nativos do **python** [ssl](https://docs.python.org/3/library/ssl.html) e [http.server](https://docs.python.org/3/library/http.server.html). Embora esses módulos tenham muitos muitos recursos (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a seguir:

   - Crie um contexto `SSL` com a classe `SSLContext` , usando o protocolo de versão mais alta disponível para servidores;
      > Dica: as opções estão listadas na documentação;

   - Carregue no contexto `SSL` a cadeia de certificação, passando tanto a o arquivo de certificação quanto a sua chave;
      > Dica: existe um método para isso.

   - Crie uma instância de `HTTPServer`. O endereço deve ser uma _tupla_ `('localhost', 8000)` e para responder as requisições, use `SimpleHTTPRequestHandler`;
      > Dica: apesar do exemplo na documentação, não use `with`.

   - Crie um **socket server-side** usando o método `wrap_socket` do seu contexto `SSL`. Passe como parâmetro o **socket** do servidor (`server.socket`);

   - Substitua o **socket** do servidor pelo **socket** que você acabou de criar;

   - Execute o servidor com o método `serve_forever`;

 - Acesse o servidor no endereço `https://localhost:8000/` utilizando o **Firefox** (precisa ser o **Firefox**!). Perceba que ele irá informar que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma autoridade da confiança dele;
   - **Chrome** e **Safari** se recusam a acessar um site cujo certificado não está assinado por **NENHUMA** autoridade certificadora (existem instruções para agir como uma autoridade certificadora mas não precisa seguir por esse caminho);

 - Acesse o servidor novamente, porém, desta vez utilizando `cURL` (de fora do `Docker`, se você estiver usando);

 - Por último, vamos utilizar um recurso do `cURL`, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro `-k` ou `--insecure`. Com ele, falamos para o nosso `cURL` prosseguir a _request_ mesmo sabendo que a conexão não é "confiável";

<br>

_**Exercícios 35.2 - Parte BONUS**_

 - Crie uma conta no `Ngrok` e explore o _dashboard_ disponibilizado por ele para monitorar seus túneis. Aproveite e explore outros recursos dessa poderosa ferramenta;
