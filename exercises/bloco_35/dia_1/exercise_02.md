## Exercicio 02

 - Faça uma chamada `GET`, utilizando o `cURL`, para `"google.com"`;

```bash
curl google.com
```

 - Perceba que foi retornado um `301`, isso quer dizer que existem diversos redirecionamentos que nos encaminha para o lugar certo, no caso, o caminho certo para a página do **google** é `www.google.com`. Ao acessarmos pelo navegador, não percebemos isso porquê ele faz o redirecionamento para a página certa para nós ao encontrar o `301`, porém, se você inspecionar a _network_ você irá identificar esse redirecionamento. Faça uma nova chamada a `"google.com"`, porém agora utilizando o parâmetro `-L` que serve para `"seguir redirecionamentos"`;

```bash
curl -L google.com
```
