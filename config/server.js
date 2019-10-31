/* Importar módulo do framework express */
const express = require('express');
/* Importar módulo do consign */
const consign = require('consign');

/* Iniciar Objeto express */
const app = express();
/* Efetuar autoload com o consign */
consign()
.include('app/routes')
.include('app/controllers')
.include('app/models')
.into(app);

/* Exportar o objeto app*/
module.exports = app;
