### Bloco 08, Dia 1 -> Introdução ao TypeScript

Antes de começar, crie uma pasta e, dentro dela, crie um pacote **Node.js** com o `npm init`. Realize os exercícios dentro desse pacote.

**Configuração Inicial**
```bash
npm init -y

npm install -D @tsconfig/node16 @types/node typescript

touch tsconfig.json
```

```json
// ./tsconfig.json
{
  "extends": "@tsconfig/node16/tsconfig.json", // estendemos a configuração base para o Node 16
  "compilerOptions": {
    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
  },
}
```

**Bora praticar!**

<br>

_**Exercícios 08.1 - Parte I**_

 - Temos um _array_ `characters` que agrupa dados de jogadores em um **MMORPG** (_“Jogo de representação de papéis online, multijogador em massa”_) usado para manter o registro de uma **guilda** (_grupo de jogadores_) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta _tipagem_, o que pode ocasionar um _bug_ no futuro. Faça a correta _tipagem_ do _array_ por meio do tipo `Character` e da função usada para imprimir as informações básicas de todos os jogadores;

```typescript
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

<br>

_**Exercícios 08.1 - Parte II**_

Crie um _script_ para converter unidades de medida de comprimento:

 - Esse _script_ deverá se chamar `length.ts`;

 - Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
   - **valor** - `number`;
   - **unidade base** - `string`;
   - **unidade para a conversão** - `string`;

**Tabela de conversão:**

|Nome      |Símbolo|Valor |
|:--------:|:-----:|:----:|
|Quilômetro|km     |1000m |
|Hectômetro|hm     |100m  |
|Decâmetro |dam    |10m   |
|Metro     |m      |1m    |
|Decímetro |dm     |0,1m  |
|Centímetro|cm     |0,01m |
|Milímetro |mm     |0,001m|

<br>

_**Exercícios 08.1 - Parte III**_

Crie um _script_ para converter unidades de medida de massa:

 - Esse _script_ deverá se chamar `mass.ts`;

 - Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
   - **valor** - `number`;
   - **unidade base** - `string`;
   - **unidade para a conversão** - `string`;

**Tabela de conversão:**

|Nome      |Símbolo|Valor |
|:--------:|:-----:|:----:|
|Quilograma|kg     |1000g |
|Hectograma|hg     |100g  |
|Decagrama |dag    |10g   |
|Grama     |g      |1g    |
|Decigrama |dg     |0,1g  |
|Centigrama|cg     |0,01g |
|Miligrama |mg     |0,001g|

<br>

_**Exercícios 08.1 - Parte IV**_

Crie um _script_ para converter unidades de medida de capacidade:

 - Esse _script_ deverá se chamar `capacity.ts`;

 - Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
   - **valor** - `number`;
   - **unidade base** - `string`;
   - **unidade para a conversão** - `string`;

**Tabela de conversão:**

|Nome      |Símbolo|Valor |
|:--------:|:-----:|:----:|
|Quilolitro|kl     |1000l |
|Hectolitro|hl     |100l  |
|Decalitro |dal    |10l   |
|Litro     |l      |1l    |
|Decilitro |dl     |0,1l  |
|Centilitro|cl     |0,01l |
|Mililitro |ml     |0,001l|

<br>

_**Exercícios 08.1 - Parte V**_

Crie um _script_ para converter unidades de medida de área:

 - Esse _script_ deverá se chamar `area.ts`;

 - Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
   - **valor** - `number`;
   - **unidade base** - `string`;
   - **unidade para a conversão** - `string`;

> _Obs: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100._

**Tabela de conversão:**

|Nome               |Símbolo|Valor  |
|:-----------------:|:-----:|:-----:|
|Quilômetro quadrado|km²    |10⁶ m² |
|Hectômetro quadrado|hm²    |10⁴ m² |
|Decâmetro quadrado |dam²   |10² m² |
|Metro quadrado     |m²     |1 m²   |
|Decímetro quadrado |dm²    |10⁻² m²|
|Centímetro quadrado|cm²    |10⁻⁴ m²|
|Milímetro quadrado |mm²    |10⁻⁶ m²|

<br>

_**Exercícios 08.1 - Parte VI**_

Crie um _script_ para converter unidades de medida de volume:

 - Esse _script_ deverá se chamar `volume.ts`;

 - Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
   - **valor** - `number`;
   - **unidade base** - `string`;
   - **unidade para a conversão** - `string`;

> _Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000._

**Tabela de conversão:**

|Nome             |Símbolo|Valor  |
|:---------------:|:-----:|:-----:|
|Quilômetro cúbico|km³    |10⁹ m³ |
|Hectômetro cúbico|hm³    |10⁶ m³ |
|Decâmetro cúbico |dam³   |10³ m³ |
|Metro cúbico     |m³     |1 m³   |
|Decímetro cúbico |dm³    |10⁻³ m³|
|Centímetro cúbico|cm³    |10⁻⁶ m³|
|Milímetro cúbico |mm³    |10⁻⁹ m³|

<br>

_**Exercícios 08.1 - Parte VII**_

Vamos tornar nossos _scripts_ de unidades de medida mais interativos! Vamos adicionar `input` de quem usa o _script_. Para isso, utilize o pacote `readline-sync` e se desejar leia a [documentação](https://www.npmjs.com/package/readline-sync#utility_methods).

Em cada _script_, crie uma função chamada `exec` que:

 - Capta as entradas da pessoa usuária via terminal;

 - Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;

 - Exibe uma mensagem com o resultado;
   > Ex: `“1km é igual a 1000m.”`;

 - Não se esqueça de chamar a função `exec` ao final do _script_. `exec()`;

<br>

_**Exercícios 08.1 - Parte VIII**_

Crie um arquivo `index.ts` que pergunta qual conversão a pessoa usuária deseja realizar, e chama o _script_ correspondente:

 - O _script_ deve ser acionado por meio do comando `npm start` no `package.json`;

 - Utilize o `readline-sync` para realizar o `input` de dados;

 - Quando executado, o _script_ deve exibir uma lista numerada dos _scripts_ disponíveis;

 - Você pode utilizar o `require` para executar o _script_ em questão;
