## Exercicio 06

 - Crie um servidor `HTTP` em sua máquina executando na porta `80`, pode ser um **front-end** ou um **back-end** criado em aulas anteriores;

    _**Python** é um brinquedo que vem com todos os acessórios, lembra? Claro que ele vem com um servidor `http` pronto pra usar! Vamos criar um diretório novo e rodar o servidor lá dentro:_

    ```bash
    mkdir diretorio && cd diretorio
    python3 -m http.server 80
    ```

 - Baixe o `ngrok` e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções no [site oficial](https://ngrok.com/download);

    ```bash
    unzip /path/to/ngrok.zip
    ```

 - Conforme instruções do site, crie um túnel para a porta `80` de sua máquina;

    ```bash
    ./ngrok http 80
    ```

 - Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu _smartphone_ ou outro computador 😎;

    ```bash
    ./ngrok http 80
    ```