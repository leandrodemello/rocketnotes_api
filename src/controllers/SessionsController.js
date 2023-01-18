const knex = require("../database/knex"); //IMPORTADA A CONECÇÃO COM O BANCO DE DADOS
const AppError = require("../utils/AppError") // IMPORTAR O APPERROR PARA EVENTUAIS ERROS OU DIVERGENCIA DE DADOS
const { compare } = require("bcryptjs");  //COMPARAR SE A SENHA E A CORRETA DO USUÁRIO



class SessionsController {
   async create(request, response) {
      const { email, password } = request.body;

      const user = await knex("users").where({ email }).first();
      if (!user) {
         throw new AppError("E-mail e/ou senha incorreta", 401);
      }

      const passwordMatched = await compare(password, user.password);
      if (!passwordMatched) {
         throw new AppError("E-mail e/ou senha incorreta", 401);
      }

      return response.json(user);
   }
}

module.exports = SessionsController;