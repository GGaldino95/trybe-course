### Bloco 5, Dia 3 -> JavaScript - Eventos

_**Exercício 5.3 - Parte I**_

 - O array _dezDaysList_ contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag `<ul>` com ID `"days"`. Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
    - Os dias devem estar contidos em uma tag `<li>` , e todos devem ter a classe `day`. Ex: `<li class="day">3</li>`
    - Os dias 24, 25 e 31 são feriados e, além da classe `day` , devem conter também a classe `holiday` . Ex: `<li class="day holiday">24</li>`
    - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe `day` e a classe `friday`. Ex: `<li class="day friday">4</li>`
 ```javascript
 const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
 ```

_**Exercício 5.3 - Parte II**_

 - Implemente uma função que receba como parâmetro a _String_ **"Feriados"** e crie dinamicamente um botão com o nome **"Feriados"**.
    - Adicione a este botão a ID `"btn-holiday"`.
    - Adicione este botão como filho/filha da tag `<div>` com classe `"buttons-container"`.
 
_**Exercício 5.3 - Parte III**_

 - Implemente uma função que adicione ao botão **"Feriados"** um evento de `"click"` que muda a cor de fundo dos dias que possuem a classe `"holiday"`.
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor `"rgb(238,238,238)"`.

_**Exercício 5.3 - Parte IV**_

 - Implemente uma função que receba como parâmetro a _String_ **"Sexta-feira"** e crie dinamicamente um botão com o nome **"Sexta-feira"**.
    - Adicione a este botão a ID `"btn-friday"`.
    - Adicione este botão como filho/filha da tag `<div>` com classe `"buttons-container"`.

_**Exercício 5.3 - Parte V**_

 - Implemente uma função que adicione ao botão **"Sexta-feira"** um evento de `"click"` que modifica o texto exibido nos dias que são Sexta-feira.
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

_**Exercício 5.3 - Parte VI**_

 - Implemente duas funções que criem um efeito de **"zoom"**. Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

_**Exercício 5.3 - Parte VII**_

 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a _String_ com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag `<span>` contendo a tarefa.
    - O elemento criado deverá ser adicionado como filho/filha da tag `<div>` que possui a classe `"my-tasks"`.


_**Exercício 5.3 - Parte VIII**_

 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma _String_ **"cor"** e criar dinamicamente um elemento de tag `<div>` com a classe `"task"`.
    - O parâmetro cor deverá ser utilizado como cor de fundo da `<div>` criada.
    - O elemento criado deverá ser adicionado como filho/filha da tag `<div>` que possui a classe `"my-tasks"`.

_**Exercício 5.3 - Parte IX**_

 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag `<div>` referente a cor da sua tarefa, atribua a este elemento a classe `"task selected"` , ou seja, quando sua tarefa possuir a classe `"task selected"` ela estará selecionada.
    - Ao clicar novamente no elemento a sua classe deverá voltar a ser somente `"task"`, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

_**Exercício 5.3 - Parte X**_

 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
    - Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial `"rgb(119,119,119)"`.

_**Exercício 5.3 - Parte BÔNUS**_

 - Implemente uma função que, ao digitar um compromisso na caixa de texto **"COMPROMISSOS"**, adiciona o item à lista **"MEUS COMPROMISSOS"** ao clicar no botão **"ADICIONAR"**.
    - Se nenhum caractere for inserido no campo `input`, a função deve retornar um `alert` com uma mensagem de erro ao clicar em **"ADICIONAR"**.
    - Ao pressionar a tecla `Enter` o evento também deverá ser disparado.