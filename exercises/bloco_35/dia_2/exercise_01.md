## Exercicio 01

 - Defina uma _regra de firewall_ utilizando o comando `iptables -A`, que bloqueie (`block` ou `REJECT/DROP`) toda a entrada (`in` ou `INPUT`) de pacotes utilizando o protocolo `ICMP`, impedindo assim que a máquina responda ao comando `ping`. Lembre-se, você pode executar o comando `ping` para validar se sua regra está funcionando corretamente: `ping 127.0.0.1` (você pode adicionar o parâmetro `-O` para exibir os pings rejeitados também 😉);

    ```bash
    iptables -A INPUT -p icmp -j REJECT
    ```
