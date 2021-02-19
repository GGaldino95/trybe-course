### Bloco 11, Dia 1 -> 'Hello, world!' no React!

_**Exercício 11.1 - Parte I**_

 - Crie um novo projeto utilizando `npx create-react-app nome-app` e acesse a pasta `nome-app`;
     - **⚠️ Substitua o `nome-app` pelo que você desejar para seu app ⚠️**


_**Exercício 11.1 - Parte II**_

Crie uma lista de tarefas simples seguindo os passos abaixo:

 - Insira a função a seguir acima do seu `App`:

```javascript
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
```

 - Agora, chame a função dentro do seu componente `App` (não se esqueça da sintaxe **JSX**!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`;

 - Por fim, crie uma _array_ de compromissos e use a função `map` para que cada item do _array_ apareça, como um item de lista, no seu componente `App`.


_**Exercício 11.1 - Parte III**_

 - Acesse [este link][link1] e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition".


_**Exercício 11.1 - Parte BÔNUS**_

 - Por último, entenda como funciona o código [deste link][link2]. Adicione mais dois `cards` com descrição e link a sua escolha.


[link1]: https://www.freecodecamp.org/learn/front-end-libraries/react/
[link2]: https://codepen.io/nathansebhastian/pen/qgOJKe
