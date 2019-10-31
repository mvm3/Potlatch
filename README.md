# Potlatch


Este repositório é do desenvolvimento front-end do projeto Potlatch da disciplina de [Projetão](https://projetao.ranoya.com) UFPE - 2019.2.

> Em construção...

## Como usar 

### Tecnologias Utilizadas

>O code está utilizando dos frameworks Vue.js e BootstrapVue. 

E para rodar o projeto você precisa instalar:

1. [Node.js](https://nodejs.org/) (^12.13.0) e [NPM](https://www.npmjs.com/package/npm) (^6.12.0); 
>Normalmente o NPM já vem instalado com o Node.js, mas pode não ser o caso...
2. [Git](https://git-scm.com/) (^2.20.1). 

### Instalando
Um passo a passo...
1. Execute o comando abaixo para download dos fontes deste repositório;
``` bash
git clone 
``` 
2. Vá para a pasta do projeto;
3. Execute o comando abaixo para que as modificações seja feitas neste branch (dev) e não no master (principal);
```bash
git checkout dev
``` 

4. Execute o comando abaixo
``` bash
# instalando as dependências
npm install
```
4.1 Se voce consegiu instalar as dependências com sucesso vá para a seção 5. Caso dê o erro
```bash
ZlibError: zlib: Cannot read property 'length' of null 
```
Verifique sua versão do node... deveria ser ^12... Por algum motivo você deve está com uma versão muito abaixo.
Se for o caso, use o comando
```bash
nvm install 12
nvm use 12
```
>Ou uma versao mais nova que a 12 e então, novamente,
```bash
# instalando as dependências
npm install
```

5. Execute o comando 
``` bash
# server hospedado na porta localhost:8080
npm run serve
```
Start to code it!

PS: Para quem gosta de usar o VSCode existe uma extensão bastante útil que pode ser utilizada: a Vue VS Code Extesion Pack.


