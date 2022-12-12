const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite")

class UsersController {

  //funcionalidade de criação do usuário
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    
    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  //funcionalidade de atualização do usuário
  async update (request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    //Conecção com o banco de dados
    const database = await sqliteConnection();  
    //buscar pelo usuário (selecione todos os dados da tabela de usuários onde o id seja =)
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]); 

    if (!user) { //se o usuário não existir...
      throw new AppError("Usuário não encontrado.");
    }

    // verificar se o email atualizado já existe
    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    // se já existir, mostrar msg de ...
    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em  uso.");
    }

    user.name = name ?? user.name; //?? verifica se tem conteúdo, se não tem permanece o que já tinha
    user.email = email ?? user.email;

    if( password && !old_password ) {
      throw new AppError("Você precisa informar a senha antiga para definir uma nova senha.");
    }

    if( password && old_password ) {
      const checkOldPassword =  await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    // atualize na tabela de usuário e defina os seguintes dados
    await database.run(`
    UPDATE users SET 
    name = ?, 
    email = ?,
    password = ?, 
    updated_at = DATETIME('now')
    WHERE id = ?`, 
    [user.name, user.email, user.password, id]);

    return response.json();
  }
  
}
    
    
module.exports = UsersController;