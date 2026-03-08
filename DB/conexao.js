import mysql from "mysql2" // Importa o módulo mysql2 para se conectar ao banco de dados MySQL

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1231",
    database: "cursos"}  )

conexao.connect(function(erro){
    if(erro){
        console.log(erro)
    }else{
        console.log("Banco conectado")
      }
})
//criar conexao com o banco dedaos 
export default conexao