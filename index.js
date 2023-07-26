const express = require('express'); 
const tarefaController = require('./controllers/tarefaController'); 
const app = express(); 

const port = 3000; 

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({ extended: true })); 

//ROTAS
app.get('/',(req,res)=>{res.send("<h3>Eaí tchê!<h3>")}); 

app.get('/tarefas', tarefaController.getTarefas); 
app.post('/tarefa', tarefaController.addTarefa); 
app.delete('/tarefa', tarefaController.deleteTarefa);
app.put('/tarefa', tarefaController.updateTarefa);
//app.post('/tarefa', tarefaController.editTarefa);
//app.delete('/tarefa', tarefaController.deleteTarefa); 
app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});

