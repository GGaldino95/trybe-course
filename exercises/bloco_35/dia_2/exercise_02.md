## Exercicio 02

 - Exclua a regra anterior utilizando o parâmetro `-D` (**Linux**).

    ```bash
    iptables -D INPUT -p icmp -j REJECT
    ```
