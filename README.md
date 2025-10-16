# Start Page 

>Uma página incial para navegadores de internet

### Fucionalidades

1. Links favoritos.
2. Direcionamento para sites como youtube, github.
3. Fazer pesquisas em buscadores alternativos.
4. Autocomplete.
5. Abertura de links amigaveis e complexos na barra de pesquisa.

#### Como utilizar 

``` bash

    # Para rodar em localhost o servidor node usando seu usuário sem root.
    pacman -S setcap 

    sudo setcap 'cap_net_bind_service=+ep' /usr/bin/node

    git pull https://github.com/aou-aou/startpage 

    cd startpage
    
    npm install
    
    node server 
```

#### Como pequisar 

No momento e reconhecido os buscadores:

    - DuckDuckDuckGo
    - Google
    - LibreX

Ao fazer uma pesquisa simples por padrão sera chamado o DuckDuckGo,
caso queira fazer pesquisas em outros buscadores digite o nome do buscador
na barra de pesquisa, siga os exemplos abaixo:

* duck sua pesquisa aqui
* google sua pesquisa aqui
* librex sua pesquisa aqui

Caso queira adicionar outros buscadores ou adicionar mais direcionamentos
edite o arquivo search.js.


