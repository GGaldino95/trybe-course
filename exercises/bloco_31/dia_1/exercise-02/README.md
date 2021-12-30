_**Exercícios 31.1 - Parte II**_

Vamos criar uma aplicação simples que faz chamadas a uma [API de piadas sobre o Chuck Norris](https://api.chucknorris.io/). A aplicação terá duas "partes". Uma que mostra as categorias das piadas e direciona a pessoa para a segunda parte, onde a chamada da _API_ de piadas é feita e a piada é de fato retornada. Então, vamos lá?

Vamos começar fazendo a parte das categorias. Para essa parte já criamos a `view` para você!

 - Parte I:

   - Primeiro crie uma pasta `models` e nela crie um `model` para as categorias. Nele deve haver uma função que faz uma chamada a _API_ de categorias;

   - Agora, vamos criar o `controller`. Lembre-se que o `controller` tem como uma de suas funções unificar o `model` com nossa `view`. Importe o `model` das categorias e use a função criada anteriormente para obter uma lista de categorias. Depois, utilize o `res.render` para renderizar a `view` de categorias e passar a variável `categories` para ela. A `view` se encontra na pasta `views/categories`;

   - Agora, no nosso arquivo `index.js` vamos usar o `controller` que acabamos de criar. Ele deve estar ligado ao _endpoint_ `/categories`. Não se esqueça de usar o `express` para realizar e o `ejs` como _template engine_;

Agora vamos as piadas em si. Essa etapa será um pouco menos descritiva e dessa vez você terá que fazer as 3 partes do modelo **MVC**: a `view`, o `controller` e o `model`.

 - Parte II:

   - O `model` das piadas deve fazer chamadas para o _endpoint_ de piada aleatório e para o _endpoint_ de piada por categoria;

   - A `view` deve conter pelo menos 2 campos, um botão para voltar para a página de categorias e um campo onde vai exibir a piada retornada pela _API_;
  
   - O _endpoint_ `/jokes` deve retornar uma piada aleatória sem categoria específica (o que corresponde ao link da categoria `all`) e os _endpoints_ `/jokes/:categorie` deve exibir uma piada de uma categoria específica, que vem como parêmetro da _URL_;
