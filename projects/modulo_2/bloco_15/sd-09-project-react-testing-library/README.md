### Bloco 15, Dia 4 -> PROJETO - Tests in React

Lembra-se da nossa **Pokédex**? Neste projeto você vai escrever testes para ela. Mas por que fazer isso, se ela já está finalizada e funcionando? Acontece que ela não está, necessariamente, finalizada. _Softwares_ não são entidades estáticas, mas sim produtos em constante evolução. _A única constante é a mudança_, [como dizem](https://www.pensador.com/frase/OTYwMTY2).

Imagine que você queira adicionar uma funcionalidade a sua **Pokédex**. Ao fazer isso, sem que se dê conta, você altera algo inadvertidamente e uma funcionalidade antiga pára de funcionar sem que ninguém perceba. Você estaria introduzindo um _bug_. E é bem possível que esse _bug_ acabe chegando até seus clientes. Em aplicações reais, _bugs_ podem trazer toda sorte de problemas - danos à imagem de seu produto, prejuízos financeiros e até complicações legais.

Quando isso acontece - um _bug_ faz uma funcionalidade parar de funcionar como pretendido - diz-se que houve uma [regressão de software](https://en.wikipedia.org/wiki/Software_regression). Uma das formas de se evitar esse tipo de situação é ter uma suíte de testes que garantem que sua aplicação funciona de forma apropriada. Assim, aumenta-se a probabilidade de detecção de _bugs_ tão logo eles sejam inseridos.

Outro benefício é poder [refatorar](https://pt.wikipedia.org/wiki/Refatora%C3%A7%C3%A3o) o código tendo a confiança de que o comportamento não muda. Talvez você olhe para sua **Pokédex** e resolva reescrevê-la, seja porque, hoje, você possui mais experiência em `React` do que quando começou e decidiu que pode desenvolver um código mais limpo, bem estruturado e eficiente, seja porque desde então novas versões do `React` introduziram novas features e você decidiu utilizá-las.

Você vai desenvolver testes para cada requisito implementado em sua **Pokédex** durante os últimos dias, garantindo assim sua corretude.

Nesse trabalho o avaliador automatizado testam os testes de vocês!

---

<br>

A ideia dele é a seguinte: você vai escrever casos de teste para a aplicação, certo? <br>
E esses testes têm que garantir que a aplicação está funcionando, certo? <br>
Pois bem! Se eu quebro uma parte da aplicação, fazendo uma alteração no código, seus testes devem quebrar, certo? <br>
Pois é isso que o avaliador faz. 

_Como assim?_

Pense da seguinte forma: nosso avaliador vai navegar por toda a aplicação da **Pokédex** e vai fazer várias mudanças no código dela para que ela quebre e pare de funcionar. Em seguida ele vai rodar seus testes. Caso seus testes não acusem que aplicação está com problemas o avaliador não vai aprovar aquele requisito! Se, para todas as alterações que o avaliador fizer no código da aplicação, os seus testes acusarem problemas, tudo será aprovado! O avaliador garante, portanto, que seus testes testam a aplicação da **Pokédex** como se deve! Na linguagem do avaliador, dizemos que cada mudança que o avaliador faz na sua aplicação é um mutante. O avaliador cria vários mutantes e seus testes devem matar todos! Se algum mutante sobreviver, temos problemas.

Haverá uma pasta chamada `./stryker` com diversos arquivos `nomeArquivo.conf.json`. Cada um deles é a configuração do avaliador para um requisito. Quando você completar os testes unitarios de um arquivo, rode o comando `npx stryker run ./stryker/nomeDoArquivo.conf.json` para testar aquele arquivo individualmente.

**Por exemplo:**

Passo 1: "Acabei de fazer os testes unitários do arquivo `Pokedex.test.js`!"

Passo 2: "Vou rodar os meus testes para ver se eles estão todos passando!"

Passo 3: "Agora vou rodar o comando para o requisito com `npx stryker run ./stryker/Pokedex.conf.json`!"
> Com o comando acima ele vai executar o `stryker` e verificar se os seus testes unitários estão corretos.

Quando o comando `npx stryker run ./stryker/PokemonDetails.conf.json` for executado, com todos os testes passando, o avaliador apresentará uma saída no terminal.

Uma falha ocorre quando os testes unitários não cobrem `100%` de **caso de uso** gerados pelo `Stryker`.

> Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.
