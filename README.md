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
   npm i url
   npm i pragma
   npm i cors
```
-----------------
# Rotas e entidades 🔀

Pensando nas necessidades de um cinema real, nosso projeto se constitui em quatro entidades, sendo elas: Filmes, Ingressos, Salas e Combos. Abaixo trazemos alguns exemplos de como as  requisições e respostas podem ser realizadas em nossa aplicação, para Criar, Ler, Atualizar e Deletar objetos.

----------------
## Implementação dos verbos do HTTP

## Rotas do projeto

```
url/combos
url/filmes
url/ingresso
url/sala

```

## 1. Exemplos para requisição do verbo GET

Para acessar as rotas do projeto, basta utilizar um dos comandos abaixo referente a entidade que deseja ler.

```
url/combos
url/filmes
url/ingresso
url/sala

```
## 2. Exemplos para requisição do verbo POST
O POST poderá ser utilizado para adicionar um novo objeto a entidade desejada. A requisição deve conter um objeto no formato JSON com todos os atributos presentes no modelo de cada entidade. Por exemplo, para o caso de adição de um novo filme:


POST: url/filmes


```
  {
    "nome": "De Volta para o Futuro",
    "genero": "Ficção científica",
    "duracao": "2hrs",
    "anoLancamento": 1985,
    "diretor": "Robert Zemeckis",
    "sinopse": "Viajando no tempo em um carro modificado"
  }

```

_E a resposta deverá ser:_

```
  {
    "error": false,
    "message": "Cadastrado com sucesso!"
  }
```

_E isso significa que o novo filme foi cadastrado no banco de dados._

POST: url/combos

```
{
    name: "MEGA",
    price: 30.00,
    item1: "Pipoca Mega", 
    item2: "Coca-Cola 400ml", 
    item3: "Mentos"
}

```

POST: url/ingresso

```
{
    filme: 'Nome do filme', 
    sala: 1, 
    cadeira: 250, 
    dataHora: '12/06/2022 20:00', 
    precoIngresso: 40.00
}

```

POST: url/sala

```
{
    "cadeiras_comuns": INTEGER,
    "cadeiras_namoradeiras": INTEGER,
    "espaço_cadeirantes": INTEGER,
    "certificado_de_vistoria_anual": true || false,
    "categoria_da_sala": "IMAX" || "XD" || "Macro XE" || "XPlus" || "RealD" || "D-Box"

}
```


## 3. Exemplos para requisição do verbo PUT

Para a operação PUT deve ser passado o parâmetro _id_, da unidade que se almeja atualizar, após a url da requisição. Assim como na requisição POST, a requisição deve conter um objeto no formato JSON com todos os atributos presentes no modelo de cada entidade. Como a seguir:  

```
PUT: url/filmes/id
{
        "nome": "Teste",
		"genero": "Teste",
		"duracao": "Teste",
		"anoLancamento": "Teste",
		"diretor": "Teste",
		"sinopse": "Teste"
	}

```
PUT: url/combos/id
```
{
    name: "MEGA",
    price: 30.00,
    item1: "Pipoca Mega", 
    item2: "Coca-Cola 400ml", 
    item3: "Mentos"
}
```

PUT: url/ingresso/id
```
{
    filme: 'Nome do filme', 
    sala: 1, 
    cadeira: 250, 
    dataHora: '12/06/2022 20:00', 
    precoIngresso: 40.00
}
```
PUT: url/sala/id

```
{
    "cadeiras_comuns": INTEGER,
    "cadeiras_namoradeiras": INTEGER,
    "espaço_cadeirantes": INTEGER,
    "certificado_de_vistoria_anual": true || false,
    "categoria_da_sala": "IMAX" || "XD" || "Macro XE" || "XPlus" || "RealD" || "D-Box"

}
```
## 4. Exemplos para requisição do verbo DELETE

Para a operação DELETE deve ser passado o parâmetro _id_, da unidade que se almeja deletar, após a url da requisição. Como a seguir:  
```
DELETE: url/combos/id

DELETE: url/filmes/id

DELETE: url/ingresso/id

DELETE: url/sala/id

```



## Contribuidores 👩‍💻👨‍💻

  <table>
    <tr align='center'>    
      <td align="center">
          <a href="https://github.com/mirnatetzner">
            <img src='https://avatars.githubusercontent.com/u/85193127?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>Mirna Tetzner</b>
            </sub>
          </a>
        </td>
      <td align="center">
          <td align="center">
          <a href="https://github.com/alicebranq">
            <img src='https://avatars.githubusercontent.com/u/102565368?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>Alice Branquinho</b>
            </sub>
          </a>
        </td>
      <td align="center">
          <a href="https://github.com/systemilc">
            <img src='https://avatars.githubusercontent.com/u/34551203?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>Isaac Costa</b>
            </sub>
          </a>
      </td>
      <td align="center">
        <a href="https://github.com/joaofmds">
          <img src='https://avatars.githubusercontent.com/u/95502785?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>João Souza</b>
            </sub>
          </a>
      </td>
    </tr>
   </table>
   
  ## Deploy da aplicação na Heroku:
 https://cine-indie-api-resilia.herokuapp.com/{entidade}
