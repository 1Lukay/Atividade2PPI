const mysql = require("mysql2")

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1231",
    database: "cursos"
})

conexao.connect(function(erro){
    if(erro){
        console.log(erro)
    }else{
        console.log("Banco conectado")
    }
})

module.exports = conexao