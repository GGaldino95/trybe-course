### Bloco 34, Dia 3 -> Padrões de projeto

Em todos os exercícios, crie funções para solucionar os problemas.

_**Exercícios 34.3 - Parte I**_

 - Abaixo temos parte da implementação de um jogo do mundo de **Star Wars**. Porém esse código está com um erro. Encontre-o e corrija-o, sem alterar o código das classes de personagens (`Soldier` e `Jedi`);

    ```python
      class Soldier:
          def __init__(self, level):
              self.level = level

          def attack(self):
              return self.level * 1


      class Jedi:
          def __init__(self, level):
              self.level = level

          def attackWithSaber(self):
              return self.level * 100


      class StarWarsGame:
          def __init__(self, character):
              self.character = character

          def fight_enemy(self):
              print(f"You caused {self.character.attack()} of damage to the enemy")


      StarWarsGame(Soldier(5)).fight_enemy()
      StarWarsGame(Jedi(20)).fight_enemy()
    ```

<br>

_**Exercícios 34.3 - Parte II**_

 - Dado o código abaixo de um baralho e suas cartas, você deve transformá-lo em um **iterador sequencial**, que fornece as cartas em sua ordem tradicional, começando de `<A de copas>` até `<K de paus>`;
 
    ```python
      class Carta:
          def __init__(self, valor, naipe):
              self.valor = valor
              self.naipe = naipe

          def __repr__(self):
              return '<%%s de %s>' % (self.valor, self.naipe)

      class Baralho:
          naipes = 'copas ouros espadas paus'.split()
          valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

          def __init__(self):
              self._cartas = [
                  Carta(valor, naipe)
                  for naipe in self.naipes
                  for valor in self.valores
              ]

          def __len__(self):
              return len(self._cartas)
    ```

 - Com o baralho tradicional pronto, implemente agora uma subclasse de `Baralho` chamada `BaralhoInverso`, que produz um iterador para fornecer as cartas na ordem inversa, ou seja, sem embaralhar, a primeira carta deve ser o `<K de paus>` em vez do `<A de copas>`, como acontece na implementação atual;

 - Agora que você tem duas formas diferentes de dar cartas para o seu baralho, refatore o código para não precisar mais de dois baralhos e dois iteradores isolados, mas sim usar um único iterador com duas estratégias diferentes de iteração;

    > _**Dica**: Você pode receber a estratégia na inicialização do baralho e passá-la para frente no `__iter__`._

<br>

_**Exercícios 34.3 - Parte III**_

 - Imagine que você tem a implementação de uma classe capaz renderizar imagens através de uma interface que utiliza o método `draw`. Porém, no momento ela só suporta formato `PNG` e você também precisa ser capaz de renderizar imagens em `SVG`. Altere o código sem modificar a classe `SvgImage`, para que isso seja possível;

    > _**Dica**: Se você garantir que a imagem `SVG` seja renderizada utilizando a mesma interface que a imagem `PNG`, a imagem se tornará compatível._
  
    ```python
    from abc import ABC, abstractmethod


    class PngInterface(ABC):
        @abstractmethod
        def draw(self):
            raise NotImplementedError


    class PngImage(PngInterface):
        def __init__(self, png_path):
            self.png_path = png_path
            self.format = "raster"

        def draw(self):
            print(f"Drawing PNG {self.png_path} with {self.format}")


    class SvgImage:
        def __init__(self, svg_path):
            self.svg_path = svg_path
            self.format = "vector"

        def get_image(self):
            return f"SVG {self.png_path} with {self.format}"
    ```

<br>

_**Exercícios 34.3 - Parte IV**_

 - Suponha que você está trabalhando em um sistema de orçamentos que faz cálculos de impostos e precisa ser refatorado para adicionar novos, que no caso são o `PIS` (0,65%) e o `COFINS` (3%). Mas durante a refatoração, você se depara com uma má prática de código. Encontre essa má prática e a solucione em conjunto com a refatoração;

    ```python
    class Orcamento:
        def __init__(self, valor):
            self.valor = valor

        def calcular_imposto(self, imposto):
            if imposto == 'ISS':
                return self.__calcular_iss()
            elif imposto == 'ICMS':
                return self.__calcular_icms()

        def __calcular_iss(self):
            return self.valor * 0.1

        def __calcular_icms(self):
            return self.valor * 0.06

    orcamento = Orcamento(1000)
    print(f"ISS: {orcamento.calcular_imposto('ISS')}")
    print(f"ICMS: {orcamento.calcular_imposto('ICMS')}")
    ```

<br>

_**Exercícios 34.3 - Parte V**_

 - Em um sistema de compras online, temos um código que efetua a compra do pedido. Este código possui `code smells` e precisa ser refatorado. Qual é o `code smell`? Efetue a refatoração do código;

    ```python
    class Order:
        def __init__(
            self,
            items,
            credit_card_name,
            credit_card_number,
            credit_card_month,
            credit_card_year,
            credit_card_security_code,
        ):
            self.items = items
            self.credit_card_name = credit_card_name
            self.credit_card_number = credit_card_number
            self.credit_card_month = credit_card_month
            self.credit_card_year = credit_card_year
            self.credit_card_security_code = credit_card_security_code

        # ...
    ```
