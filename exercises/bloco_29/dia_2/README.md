### Bloco 29, Dia 2 -> Deploy - Gerenciadores de Processos

Vamos colocar em prática todo o conteúdo que vimos. Para isso, faremos alguns exercícios práticos utilizando os principais recursos do **_PM2_**.

> O **_PM2_** é um _PM_ popular, principalmente na comunidade **_Node.js_**. O **_PM2_** foi feito com o intuito de auxiliar o gerenciamento de aplicações em ambiente de produção, permitindo manter suas aplicações sempre rodando, reiniciando-as quando necessário, sem _downtime_, e facilitando o gerenciamento dos processos.

A instalação é muito simples. Podemos fazê-la utilizando o `npm`:
```bash
\$ npm install pm2@latest -g
```

Para validar se a instalação foi concluída com sucesso, execute o comando abaixo. Deverá ser exibida no seu console a versão do **_PM2_** instalada.
```bash
\$ pm2 --version
```

Caso você tenha uma versão inferior do **_PM2_** e queira atualizá-la, execute o comando abaixo. O **_PM2_** será atualizado em memória:
```bash
\$ pm2 update
```

Segundo a documentação oficial, todas as versões são retrocompatíveis, o que significa que os comandos de versões anteriores permanecerão funcionando nas novas.

<br>

_**Exercícios 29.2 - Parte I**_

Crie uma _API_ simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira:

 - Crie **UM** processo no _PM2_ utilizando o `CLI`;

 - `Restart` e recarregue o processo utilizando o `CLI` do _PM2_ (lembre-se que há comandos distintos para cada um);

 - Pare o processo;

 - **_(Bônus)_** - Escalone para mais 5 processos;

 - **_(Bônus)_** - Defina para 3 a quantidade de processos;

 - Remova o processo da listagem do _PM2_;

<br>

_**Exercícios 29.2 - Parte II**_

Crie um arquivo `ecosystem`. O arquivo configurará o _PM2_ para:

 - Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;

 - Ativar o modo `cluster` e configurar a quantidade de processos rodando para o máximo possível;

 - Reiniciar o processo sempre que ele alcançar o consumo de **100MB** de memória;

<br>

_**Exercícios 29.2 - Parte III**_

Explorando variáveis de ambiente:

 - Adicione à _API_ o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;

 - Adicione ao arquivo `ecosystem` do exercício anterior dois contextos de variáveis: `env_prod` e `env_homolog`;

 - Execute o processo utilizando o contexto `prod`. Em seguida, execute o processo utilizando o contexto `homolog`. Valide se o comportamento foi alterado;

<br>

_**Exercícios 29.2 - Parte IV**_

Adicione monitoramento à sua _API_:

 - Crie uma conta no _PM2_;

 - Adicione o monitoramento à _API_ dos exercícios anteriores, utilizando o comando do `CLI` do _PM2_;

 - Verifique se o _dashboard web_ está exibindo as informações de sua _API_;

<br>

_**Exercícios 29.2 - Parte BONUS**_

 - Adicione à _API_ criada um _endpoint_ que simule um erro de produção. Para isso, pode ser utilizado o comando `process.exit`. O objetivo é fazer com que o processo pare e então o _PM2_ entre em ação para restartá-lo;


 - Adicione mais de um processo a ser iniciado pelo seu arquivo `ecosystem`. Para isso, pode-se adicionar dois processos com comportamentos diferentes, através do mesmo código fonte, ou adicionar mais uma _API_ ou _script_ ao projeto. A ideia é que, ao executar utilizando o `ecosystem`, o _PM2_ suba processos com nomes e características diferentes;

 - Execute sua _API_ utilizando o runtime do _PM2_. Para isso:
   - Adicione o módulo do _PM2_ às dependências do projeto;
   - Altere o _script_ de start do seu app (`package.json`) para utilizar o runtime do _PM2_. Lembre-se de referenciar seu arquivo `ecosystem`;
   - Execute o _script_ através do `npm` ou `yarn`;
