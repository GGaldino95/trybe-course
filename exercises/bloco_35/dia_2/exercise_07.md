## Exercicio 07

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

    ```bash
    mkdir /some-dir/https-server
    mv key.pem /some-dir/https-server
    mv cert.pem /some-dir/https-server
    cd /some-dir/https-server
    ```

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

    ### **_=> Resolucao no arquivo `exercise_07.py`._** <br><br>

 - Acesse o servidor novamente, porém, desta vez utilizando `cURL` (de fora do `Docker`, se você estiver usando);

    ```bash
    curl https://localhost:8000
    ```

 - Por último, vamos utilizar um recurso do `cURL`, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro `-k` ou `--insecure`. Com ele, falamos para o nosso `cURL` prosseguir a _request_ mesmo sabendo que a conexão não é "confiável";

    ```bash
    curl --insecure https://localhost:8000
    ```
