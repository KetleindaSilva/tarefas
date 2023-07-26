async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '02092005',
        database: 'tarefa'

    })
    console.log("Conectou com o mysql");
    global.connection = connection;
    return connection;
}
/*
* Método responsavel por um query no banco de dados
*/
async function query(sql) {
    const conn = await connect();
    console.log(connect);
    const [rows] = await conn.query(sql);
    return rows;
}


module.exports = { query };