### Bloco 01, Dia 2 -> Manipulando Imagens no Docker

Vamos usar uma imagem disponível no [**DockerHub**](https://hub.docker.com/search?q=) conhecida como `“cowsay”` (_uma vaca falante no terminal_ 🐮)!

A ideia é deixarmos a mensagem para o `cowsay` parametrizável. Dessa forma, conseguiremos executar o comando:

```powershell
docker container run cowsay Muuuuuuhhh
```

E ter a seguinte saída no terminal:

```powershell
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

_**Exercícios 02.1 - Parte I**_

 - Crie um `Dockerfile` utilizando a `imagem` `chuanwen/cowsay`;

 - Defina um `ENTRYPOINT` para a execução do comando;

 > Observe que o executável `cowsay` está no diretório `/usr/games/`. Lembre-se que com ele, diferente do `CMD`, o comando não poderá ser **sobrescrito** com o `docker run`, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.

 - Utilize o `CMD` para definir uma mensagem padrão;

 - Gere uma _build_ e execute um `container` baseado em sua `imagem` sem passar nenhum comando;

 - Execute um novo `container` passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQV TRYBE"`, para exibir um dragão junto com a vaquinha;
