const path = require("path");
const  multer = require("multer");
const crypto = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");//ONDE A IMAGEM CHEGA
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads"); //ONDE A IMAGEM REALMENTE VAI FICAR

const MULTER = {  //BIBLIOTECA PARA FAZER O UPLOAD
   storage: multer.diskStorage({
      destination: TMP_FOLDER, //ONDE O ARQUIVO VAI SER SALVO
      filename(request, file, callback) { //PARA O ARQUIVO TER UM NOME ÚNICO
         const fileHash = crypto.randomBytes(10).toString("hex");
         const fileName = `${fileHash}-${file.originalname}`;

         return callback(null, fileName);
      },
   }),
};

module.exports = {
   TMP_FOLDER,
   UPLOADS_FOLDER,
   MULTER,
}
