## Resolucao dos exercicios propostos no README.md

> 1. Crie um `Dockerfile` utilizando a `imagem` `chuanwen/cowsay`;

```dockerfile
FROM chuanwen/cowsay:latest
```

<br>

> 2. Defina um `ENTRYPOINT` para a execução do comando;

```dockerfile
ENTRYPOINT [ "/usr/games/cowsay" ]
```

<br>

> 3. Utilize o `CMD` para definir uma mensagem padrão;


```dockerfile
CMD [ "#VQV Trybe" ]
```

<br>

> 4. Gere uma _build_ e execute um `container` baseado em sua `imagem` sem passar nenhum comando;

```powershell
docker image build ./ -t cowsay
```

<br>

> 5. Execute um novo `container` passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQV TRYBE"`, para exibir um dragão junto com a vaquinha;

```powershell
# execute with default message:
docker container run cowsay

# output:
 ____________
< #VQV Trybe >
 ------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```powershell
# execute with a custom message:
docker container run cowsay Go Trybe!

#output:
 ___________
< Go Trybe! >
 -----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```powershell
# execute with another animal and with a custom message:
docker container run cowsay -f moofasa "#VQV TRYBE"

# output:
 ____________
< #VQV TRYBE >
 ------------
       \    ____
        \  /    \
          | ^__^ |
          | (oo) |______
          | (__) |      )\/\
           \____/|----w |
                ||     ||

                 Moofasa
```

```powershell
# get list of animals available:
docker container run cowsay -l

# output:
Cow files in /usr/share/cowsay/cows:
apt beavis.zen bong bud-frogs bunny calvin cheese cock cower daemon default
dragon dragon-and-cow duck elephant elephant-in-snake eyes flaming-sheep
ghostbusters gnu head-in hellokitty kiss kitty koala kosh luke-koala
mech-and-cow meow milk moofasa moose mutilated pony pony-smaller ren sheep
skeleton snowman sodomized-sheep stegosaurus stimpy suse three-eyes turkey
turtle tux unipony unipony-smaller vader vader-koala www
Use of chdir('') or chdir(undef) as chdir() is deprecated at /usr/games/cowsay line 95.
```

```bash
# execute with a dragon and a cow with a custom message:
docker container run cowsay -f dragon-and-cow "VQV TRYBE"

# output:
 ___________
< VQV TRYBE >
 -----------
                       \                    ^    /^
                        \                  / \  // \
                         \   |\___/|      /   \//  .\
                          \  /O  O  \__  /    //  | \ \           *----*
                            /     /  \/_/    //   |  \  \          \   |
                            @___@`    \/_   //    |   \   \         \/\ \
                           0/0/|       \/_ //     |    \    \         \  \
                       0/0/0/0/|        \///      |     \     \       |  |
                    0/0/0/0/0/_|_ /   (  //       |      \     _\     |  /
                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
                             ,-}        _      *-.|.-~-.           .~    ~
            \     \__/        `/\      /                 ~-. _ .-~      /
             \____(oo)           *.   }            {                   /
             (    (--)          .----~-.\        \-`                 .~
             //__\\  \__ Ack!   ///.----..<        \             _ -~
            //    \\               ///-._ _ _ _ _ _ _{^ - - - - ~
```