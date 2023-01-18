const knex = require("../database/knex"); //IMPORTADA A CONECÇÃO COM O BANCO DE DADOS
const AppError = require("../utils/AppError") // IMPORTAR O APPERROR PARA EVENTUAIS ERROS OU DIVERGENCIA DE DADOS

class SessionsController {
   async create(request, response) {
      const { email, password } = request.body;

      const user = await knex("users").where({ email }).first();

      if (!user) {
         throw new AppError("E-mail e/ou senha incorreta", 401);
      }

      return response.json(user);
   }
}

module.exports = SessionsController;