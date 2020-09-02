# Banco de Dados II - SQL INJECTION

## Descrição

Esse é o projeto para a terceira etapa da segunda atividade prática de BDII, o objetivo aqui é a implementação de uma aplicação capaz de simular o problema do SQL injection. Um problema grave de segurança quando trabalhando a conexão e consultas da aplicação e o banco.

## Guia para rodar a aplicação

### Pré-requisitos

* Node.js: https://nodejs.org;
* postgresSQL: https://www.postgresql.org/;

### Inicializando

Clone o repositório

```
$ git clone https://github.com/geovanymds/banco-de-dados-II.git
```

Dentro do postgres, é necessário criar a seguinte tabela no banco de dados:

```
CREATE TABLE usuarios(username varchar NOT NULL,
                     pass varchar NOT NULL,
                     secret_information varchar NOT NULL);
                     
INSERT INTO usuarios VALUES ('<Nome de usuario>', '<senha>', '<um texto simples>');
```

### Executando a aplicação

Vá para o diretório SQL injection

```
$ cd sql_injection
```

Será necessário também alterar as configurações do arquivo .env para compatibilizar com suas credênciais do banco:

```
PG_USER = <usuário>
PG_HOST = localhost
PG_PASS = <senha>
PG_DB = <banco>
PG_PORT = <porta>
```
  
continue para executar o comando abaixo:

```
$ mpm install
$ mpm start
```

### O TESTE

Dentro de um navegador, acesse localhost:3000/index.
Em seguida é apresentado um formulário web para realização de um login, conectando com as credenciais do banco criado na etapa anterior.

Para o teste, você pode digitar tanto o nome de usuario cadastrado no banco e senha, ou no caso aplicar a sql injection digitando <' or 1=1--> no campo de usuários.
Isso fara com que a validação por consulta quebre, autenticando o primeiro valor da tabela e ingnorando a senha. Com ambos os métodos é possível ver pelo console do navegador que o login foi validado e as informações ddo usuario cadastrado são apresentadas.

Note que isso não acontece quando são inseridos outros valores de usuario e senha.
