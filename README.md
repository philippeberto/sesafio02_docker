# Desafio 02 - Módulo Docker - FullCycle 2.0

## Prisma e EJS

Tomei a liberdade de utilizar um ORM para praticar. Também quis deixar o layout mais bonito e segui o layout do portal do curso :D

## Mysql

É necessário criar uma pasta mysql na raíz do projeto, pois a mantive ignorada pelo git.

## Execução dos containers

O projeto deve ser executado normalmente com o comando abaixo.

```
docker-compose up
```

Caso haja algum motivo para execução dos containers separadamente, pode ser feito

```
docker-compose up db

docker-compose up node

docker-compose up nginx

```