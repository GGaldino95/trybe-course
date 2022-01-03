## Exercicio 04

 - Bloqueie agora o tráfego de saída para `HTTP`. Lembre-se, também é utilizado o protocolo `TCP` e a porta `80`. Para testar sua regra, tente acessar um site pelo navegador que use `HTTP`;

    ```bash
    iptables -A OUTPUT -p tcp --sport 80 -j REJECT
    ```
