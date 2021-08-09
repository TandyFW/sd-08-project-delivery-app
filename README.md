### Projeto Delivery-App

Projeto final de backend do curso da Trybe, desenvolvido em grupo de 5 pessoas.
Participantes:
* https://github.com/IvanildoCandido
* https://github.com/Ludilly
* https://github.com/giovannabetti
* https://github.com/RitaJeveaux

---

## Como rodar o projeto:

* git clone
* Use o comando npm install na pasta raíz do projeto
* Use o comando npm install na pasta frontend
* Use o comando npm install na pasta backend
* Certifique-se que seu Mysql está rodando na sua máquina
* Na pasta back end crie um arquivo .env com as seguintes configurações:
NODE_ENV=development
API_PORT=3001
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=[nome do usuário do seu Mysql]
MYSQL_PASSWORD=[Senha do seu Mysql]
MYSQL_DB_NAME=delivery-app
EVAL_ALWAYS_RESTORE_DEV_DB=true
SECRET=MySecretPassword

* Na pasta raiz do projeto use o comando npm run dev
