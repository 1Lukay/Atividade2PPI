import express from "express"
import cursoController from "./controller/cursoController.js"

const app = express()

app.use(express.json())

app.get("/cursos", cursoController.listar)

app.post("/cursos", cursoController.adicionar)

app.put("/cursos/:id", cursoController.atualizar)

app.delete("/cursos/:id", cursoController.deletar)

app.listen(3000,function(){
    console.log("Servidor rodando")
})