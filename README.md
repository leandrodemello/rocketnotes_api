# RocketNotes API 

Este é o projeto RocketNotes, uma aplicação em Node.js que permite aos usuários cadastrar notas, preencher com informações como nome, descrição e nota, e adicionar tags relacionadas a cada nota.

O objetivo principal do projeto é fornecer uma API que permita aos usuários gerenciar suas notas de forma segura e eficiente. Para isso, foram implementadas as seguintes funcionalidades:

Criptografia de senhas: As senhas dos usuários são armazenadas de forma segura, utilizando algoritmos de criptografia para garantir a confidencialidade dos dados.

Validação de e-mail: O sistema realiza a validação dos endereços de e-mail fornecidos pelos usuários, garantindo que sejam inseridos no formato correto e evitando o cadastro de e-mails inválidos.

Cascade: Foi aplicado o conceito de cascade para garantir a integridade dos dados. Quando um usuário opta por excluir uma nota, todas as tags relacionadas a essa nota também são excluídas automaticamente, evitando registros inconsistentes.

### Funcionalidades principais

A API do RocketNotes oferece as seguintes funcionalidades principais:

Cadastro de usuários: Os usuários podem se cadastrar na aplicação, fornecendo um nome de usuário, endereço de e-mail e senha.

Autenticação de usuários: Os usuários podem fazer login na aplicação utilizando suas credenciais de acesso.

Criação de notas: Os usuários podem criar notas, preenchendo informações como nome, descrição e nota.

Adição de tags: Os usuários podem adicionar tags relacionadas a cada nota, permitindo uma organização mais eficiente das informações.

Edição e exclusão de notas: Os usuários podem editar as informações de suas notas existentes ou excluí-las caso não sejam mais necessárias.

### Tecnologias utilizadas

O projeto RocketNotes foi desenvolvido utilizando as seguintes tecnologias:

Node.js: Plataforma de execução de código JavaScript do lado do servidor.

Express.js: Framework web para Node.js, utilizado para criar a API.

### Front-End da API </br>
https://github.com/leandrodemello/rocketnotes

### Deploy
https://anotacoesfaceis.netlify.app/

### Como executar o projeto

Para executar o projeto RocketNotes em seu ambiente local, siga as etapas abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.

Clone este repositório para o seu diretório local: </br>
git clone <URL do repositório>

Acesse o diretório do projeto:</br>
cd RocketNotes

Instale as dependências do projeto:</br>
npm install

Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como a URL do banco de dados, informações de autenticação, etc.

Inicie a aplicação:</br>
npm start

Acesse a API em http://localhost:3000 e utilize um cliente de API, como o Postman ou Insomnia, para realizar as requisições.

### Contato
Se você quiser entrar em contato comigo para oportunidades de trabalho, colaborações ou apenas para dizer olá, sinta-se à vontade para me contatar por meio dos seguintes canais:

Email: leandro.devmcz@gmail.com </br>
Portfólio: https://leandromello.dev/ </br>
GitHub: https://github.com/leandrodemello </br>
Linkedin: https://www.linkedin.com/in/leandro-mello-47a24823b/

Obrigado pela visita e aproveite a exploração dos projetos!
