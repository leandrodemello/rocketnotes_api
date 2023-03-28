module.exports = {
   bail: true, // A VARREDURA É PAUSADA AO SE DETECTADO ALGUM ERRO PARA SER FEITA A CORREÇÃO
   coverageProvider: "v8",

   testMatch: [
      "<rootDir>/src/**/*.spec.js"
   ],
}