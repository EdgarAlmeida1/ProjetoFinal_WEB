const Express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = Express();
var cors = require('cors')

//Conecta ao banco

//mongoose.connect('mongodb+srv://localhost:27017/Trabalho');
mongoose.connect('mongodb+srv://admin:admin@test.bgulh.mongodb.net/test'); 

//Carrega os Models

const Usuario = require('./models/Usuario');
const Corretor = require('./models/Corretor');
const Imovel = require('./models/Imovel');
const Venda = require('./models/Venda');

//Carrega as Rotas
const indexRoute = require('./routes/index');
const UsuarioRote = require('./routes/UsuarioRote');
const CorretorRote = require('./routes/CorretorRote');
const ImovelRote = require('./routes/ImovelRote');
const VendaRote = require('./routes/VendaRote');
const RelatorioRote = require('./routes/RelatorioRote');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use('/', indexRoute);
app.use('/Usuario', UsuarioRote);
app.use('/Corretor', CorretorRote);
app.use('/Imovel', ImovelRote);
app.use('/Venda', VendaRote);
app.use('/Relatorio', RelatorioRote);

module.exports = app;