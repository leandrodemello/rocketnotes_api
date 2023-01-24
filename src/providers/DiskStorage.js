const fs = require("fs"); //MANIPULAÇÃO DE ARQUIVOS
const path = require("path");  // PARA NAVEGAR PELOS DIRETÓRIOS
const uploadConfig = require("../configs/upload");  

class DiskStorage {
   async saveFile(file) { //SALVAR FOTO
      await fs.promises.rename(
         path.resolve(uploadConfig.TMP_FOLDER, file),
         path.resolve(uploadConfig.UPLOADS_FOLDER, file)
      );

      return file;
   }

   async deleteFile(file) { //DELETAR FOTO
      const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

      try {
         await fs.promises.stat(filePath);
      }  catch {
         return;
      }
      
      await fs.promises.unlink(filePath);
   }
}

module.exports = DiskStorage;