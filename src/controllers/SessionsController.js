const knex = require("../database/knex"); //IMPORTADA A CONECÇÃO COM O BANCO DE DADOS
const AppError = require("../utils/AppError") // IMPORTAR O APPERROR PARA EVENTUAIS ERROS OU DIVERGENCIA DE DADOS

const { compare } = require("bcryptjs");  //COMPARAR SE A SENHA E A CORRETA DO USUÁRIO

const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

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

      const { secret, expiresIn } = authConfig.jwt;
      const token = sign({}, secret, {
         subject: String(user.id),
         expiresIn
      })

      return response.json({ user, token });
   }
}

module.exports = SessionsController;