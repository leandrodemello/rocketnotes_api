const config = require("../../../knexfile"); //trazer as configurações
const knex = require("knex"); //importar o knex

const connection = knex(config.development); //cria a conexão

module.exports = connection; //exporta a conexão 