### Bloco 13, Dia 3 -> PROJETO - Movie Cards Library - _CRUD_

Dando continuidade aos últimos projetos, você criará um `CRUD` de cartões de filmes em `React`. A sigla `CRUD` significa, **C**reate, **R**ead, **U**pdate and **D**elete, então deve ser possível realizar as seguintes operações nesse projeto:

 - Adicionar um novo filme à lista - `CREATE`;
 - Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - `READ`;
 - Editar um filme da lista - `UPDATE`;
 - E apagar um filme da lista - `DELETE`;

Nos últimos projetos, por mais que o app tenha sido desenvolvido utilizando múltiplos componentes, o que é uma boa prática, todas as funcionalidades eram acessadas ao mesmo tempo, no mesmo lugar, utilizando apenas uma `URL` (localhost:3000, normalmente). Na mesma página onde havia a listagem de filmes, havia um formulário pra criar um novo filme, por exemplo. À medida que seus apps se tornarem maiores e mais complexos, isso se tornará inviável. Desta vez, as funcionalidades do app serão agrupadas e organizadas em rotas.

Uma rota define o que deve ser renderizado na página ao abri-la. Cada rota está associada a um caminho. O caminho é a parte da `URL` após o domínio (nome do site, de forma simplificada). Por exemplo, em `www.site.com/projetos/meu-jogo`, o caminho é `/projetos/meu-jogo`. Até agora, todos os apps `React` que você desenvolveu possuíam somente uma rota, a raiz (`/`).

Este app terá 4 rotas:

A rota raiz (`index`), no caminho `/`. Esta rota exibirá uma lista com todos os filmes cadastrados. Essa lista contém informações resumidas sobre cada filme.

Uma rota para criar novos filmes, no caminho `/movies/new`. Essa rota renderizará um formulário para adicionar um novo filme.

Uma rota para mostrar informações detalhadas de um filme, no caminho `/movies/:id`. Onde o `:id` é o parâmetro da `URL` que representa o `id` do filme exibido. Por exemplo, ao entrar no caminho `/movies/5`, serão exibidas informações sobre o filme com `id` `5`.

Uma rota para editar um filme, no caminho `/movies/:id/edit`. Assim como na rota `3`, `:id` é o `id` do filme a ser editado. Essa rota renderizará um formulário idêntico ao da rota `2`. Nesse caso, porém, o formulário virá preenchido com as informações do filme a ser editado. Ao submeter o formulário, ao invés de criar um novo filme, o filme em questão terá seus dados atualizados.

Relacionado a cada rota haverá um componente `React` responsável por renderizar seu conteúdo. Esse mapeamento entre o caminho da `URL`, rota e componente será feito pelo `React Router`, a principal biblioteca de roteamento em `React`.

Naturalmente, haverá links de navegação e redirecionamento entre as diferentes rotas. Por exemplo, na rota `1` (caminho `/`), haverá, para cada filme, um _link_ para a rota `3` (caminho `/movies/:id`), onde se poderá ver informações detalhadas sobre o filme escolhido. Na rota `3` (caminho `/movies/:id`), haverá um _link_ para a rota `4` (caminho `/movies/:id/edit`), a fim de se editar informações do filme. Ao submeter o formulário, o app automaticamente será levado de volta à rota `3` (caminho `/movies/:id`), mostrando as informações atualizadas do filme. Tudo isso será feito utilizando os componentes da biblioteca `React Router`.

Outra diferença importante neste projeto em relação aos anteriores é que os dados virão de uma _API_ (simulada) e não mais de um arquivo estático. Você utilizará essa _API_ para criar, ler, atualizar e apagar filmes. Logo, você terá que lidar com requisições assíncronas e `promises`. Também deverá fazer uso de `lifecycle methods` e de estados para controlar o que é renderizado por seus componentes a depender de em que momento as requisições se encontram.
