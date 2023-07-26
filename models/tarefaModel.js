class Tarefa{
    constructor(id,title,description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
    static listarTarefas(){
        const db = require('./database');
        let tarefas = db.query("SELECT * FROM tarefa")
        return tarefas;
    }
    async salvar(){
        const db = require('./database');
        let resp = await db.query(`INSERT INTO tarefa (title) VALUES ('${this.title}')`);
        console.log(resp);
    }
    
}

module.exports = Tarefa;