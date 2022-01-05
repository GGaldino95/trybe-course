### Bloco 38, Dia 1 -> Nó e Listas Encadeadas

Antes de prosseguir com os exercícios, precisamos desenvolver uma lista `LinkedList`. Para isso, leia o arquivo `list_creation.md` para mais detalhes.

_**Exercícios 38.1 - Parte I**_

Aprimorando a classe `LinekdList`: nossa classe `LinekdList` atende as principais operações que essa `TAD` (**T**ipo **A**bstrato de **D**ados) nos oferece, mas que tal melhorarmos? Para isso, você deve adicionar os seguintes métodos:

 - A operação `clear` nos permite remover todos os `Nodes` da lista;
 - A operação `__get_node_at` nos permite acessar o `Node` em qualquer posição da lista;

Após criada as operações anteriores, refatore os seguintes métodos para que utilizem a `__get_node_at` ante iterações:

 - `insert_at`;
 - `insert_last`;
 - `remove_last`;
 - `remove_at`;
 - `get_element_at`;

<br>

_**Exercícios 38.1 - Parte II**_

**Nova busca**: até o momento nossa estrutura consulta elementos através da posição. Nesta atividade será necessário criar uma função chamada `def index_of(self, value)`, onde ela será responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência. Caso o valor não exista, considere retornar `-1`. Esta função deve respeitar a complexidade `O(n)`;

<br>

_**Exercícios 38.1 - Parte III**_

> Remover duplicatas de uma `LinkedList`, [atividade extraída e adaptada do LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/).

Nesta atividade será necessário implementar um algoritmo que receba uma `LinkedList` como argumento e retorne uma nova lista sem elementos duplicados. Esta função deve respeitar a complexidade `O(n)`;

**Exemplo:**

```
# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3
```

<br>

_**Exercícios 38.1 - Parte IV**_

> Remover duplicatas de uma `DoublyLinkedList`, [atividade extraída e adaptada do LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/).

Nesta atividade será necessário implementar um algoritmo que receba uma `DoublyLinkedList` como argumento e retorne uma nova lista, sem elementos que possuem mais de uma ocorrência;

**Exemplo:**

```
# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2
```

<br>

_**Exercícios 38.1 - Parte BONUS**_

Baseado nos conhecimentos adquiridos neste bloco, e para relembrar as `TADs` vistas em aulas passadas, implemente as seguintes `TADs` , utilizando a lista como a estrutura interna:

 - **Pilhas**: crie uma classe `Stack`, onde deve conter as operações: `push`, `pop`, `peek` e `is_empty`;

 - **Filas** : crie uma classe `Queue` , onde deve conter as operações: `enqueue` , `dequeue` , `peek` e `is_empty`;
