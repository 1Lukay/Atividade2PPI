import express from "express"
import cursoController from "./controller/cursoController.js"
import cors from "cors"

const app = express() 

app.use(cors())
app.use(express.json())

app.use(express.json())

app.get("/cursos", cursoController.listar)

app.post("/cursos", cursoController.adicionar)

app.put("/cursos/:id", cursoController.atualizar)

app.delete("/cursos/:id", cursoController.deletar)

app.listen(3000,function(){
    console.log("Servidor rodando")

}


)



//Implementação do servidor HTTP para receber essas requisições, devolvendo corretamente as respostas; (GET, POST, PUT e DELETE)