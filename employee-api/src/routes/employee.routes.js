
// Arquivo responsavel pelas rotas da API

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

//Definindo as rotas do CRUD - Employee

// Rota responsável por criar um novo Colaborador POST localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

module.exports = router;