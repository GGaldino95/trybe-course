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
 
