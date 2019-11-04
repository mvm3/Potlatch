/* Importando configuração do servidor */
const app = require('./config/server');
/* Parametrizar a porta de escuta, ou seja, a porta que o servidor escuta requisições */
app.listen(80, () => console.log('Servidor online'));