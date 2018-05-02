Para importar o banco, entre no terminal e digite:

mongoimport --db apoiasedb --collection apoios --file apoios.json
mongoimport --db apoiasedb --collection apoiadors --file apoiadors.json
mongoimport --db apoiasedb --collection campanhas --file campanhas.json

Para rodar o programa, entre pelo terminal na pasta apoiaseapi e digite:

npm start

Entre na pasta apoiaseclient e digite

ng serve

Talvez seja necessário dar um "npm install" dentro das duas pastas.