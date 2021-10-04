
// Arquivo responsável pela chamada da API na aplicação do BackEnd

const express =  require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem Vindo(a) a API Node.js + postgreSQL + Azure',
        version: '1.0.0'
    });
});

module.exports = router;