
// Arquivo responsável por toda configuração e execução do BACK-END ('Employee')




const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta:', port);
});