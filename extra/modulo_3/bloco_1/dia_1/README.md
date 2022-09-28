### Bloco 01, Dia 1 -> Utilizando Containers - Docker

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

<br>

_**Exercícios 01.1 - Parte I**_

 - No [Docker Hub](https://hub.docker.com/search?q=&type=image), utilizando a caixa de busca `("Search for great content")`, busque pela **`imagem`** da **_Distribuição Linux Debian_**;

 - Uma vez que encontrar a **_imagem oficial_**, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um `container` para isso;

 - Baixe a **`imagem`** utilizando a _tag_: `stable-slim`, que é uma versão reduzida da distribuição;

 - Após baixar a **`imagem`** para seu computador local, **crie** e **execute** um `container` no modo interativo utilizando essa **`imagem`** como referência — não esqueça referenciar a `tag`;

 - No terminal, você deve conseguir rodar o comando `cat /etc/*-release`, que vai retornar os dados da distribuição **Debian** que está sendo rodada dentro do `container`;

 - Encerre o terminal;

 - Verifique na sua **lista de contêiners** qual `container` se refere ao exercício que acabou de praticar;

 - Inicie o mesmo `container` novamente, sem criar outro. Valide se ele está ativo na **lista de contêiners**;

 - Retome o `container` que foi criado anteriormente neste exercício;

 - Rode o comando `cat /etc/debian_version` que deve retornar a versão atual do sistema do `container`;

 - Encerre o terminal;

 - Remova somente o `container` criado para esse exercício;

 - **[BÔNUS]** - Crie e rode de modo interativo em modo `‘Cleanup’`, a `imagem` `andrius/ascii-patrol`;

 - **[BÔNUS]** - Encerre o `container` utilizando os botões `ctrl + c`;
