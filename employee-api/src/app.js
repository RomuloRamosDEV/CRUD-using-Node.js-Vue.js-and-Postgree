
// Arquivo responsável por fazer a conexão com o arquivo 'server.js'

const express = require('express');
const cors = require('cors');

const app = express();

// ROTAS DA API EMPLOYEE
const index = require('./routes/index');
const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));

app.use (index);
app.use('/api/', employeeRoute);

module.exports = app;