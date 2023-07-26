const Tarefa = require('../models/tarefaModel');
let tarefas = [];

async function getTarefas(req,res){
    tarefas = await Tarefa.listarTarefas();
    console.log(tarefas);
    res.render('tarefas', {tarefas}); //renderiza a tarefas.ejs
}

function addTarefa(req,res){
    const{title} = req.body;

    const tarefa = new Tarefa(null, title , false);
    tarefa.salvar();
    
    res.redirect('/tarefas');//redireciona para rota
}
function deleteTarefa(req, res) { 
    const { id } = req.body; 
    tarefas = tarefas.filter(tarefa => tarefa.id != id); 
    res.redirect('/tarefas'); 
}

function updateTarefa(req, res) {
    const { id, title, description } = req.body;
    tarefas = tarefas.map(tarefa => {
        if (tarefa.id == id) {
            tarefa.title = title;
            tarefa.description = description;
        }
        return tarefa;
    });
    res.redirect('/tarefas');
}

module.exports = { getTarefas, addTarefa, deleteTarefa, updateTarefa};
  
