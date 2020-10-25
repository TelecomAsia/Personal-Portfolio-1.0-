![image](https://user-images.githubusercontent.com/102565368/182753604-143dd23a-6ee2-4ba1-a283-f61c0cbe9457.png)

# _CineIndie_ API

A ideia era a criação do produto mínimo viável (MVC) de uma API Rest para web sites de cinemas independentes. Nosso objetivo é reduzir custos e tornar a organização do sistema de fluxo de informações de cinemas mais acessível, idependente de seu capital disponível.  
API Rest com CRUD das operações no padrão HTTP. A aplicação **"CineIndie API"** foi desenvolvida utilizando Node.js.

------------
## Configurando o ambiente:
-----------------
### Clonando o repositório na máquina local
1. Abra Git Bash.

2. Altere o diretório de trabalho atual para o local em que deseja ter o diretório clonado.

3. Digite git clone (clonar git) e cole a URL deste repositório.

```
$ git clone https://github.com/mirnatetzner/CineIndie-API.git
```
4. Finalmente, digite o comando cd e o nome do projeto para entrar no diretório do repositório clonado.
```
 $ cd CineIndie-API
```
----------------
### Dependências

Além disso, para o funcionamento correto da aplicação, é preciso instalar as dependências utilizadas. Estas foram: 

* **Express**
* **SQLite3**
* **Dotenv**
* **Pragma**
* **Path**
* **Url**
* **cors**

Para isso, você pode utilizar o comando simplificado:

```
npm i
```

Ou caso prefira, você pode instalá-las uma a uma utilizando, separadamente, o comando abaixo:

```
   npm i express
   npm i sqlite3
   npm i dotenv
   npm i path
   npm i 