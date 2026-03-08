const cursoDB = require("../DB/CursoDB")

function listar(req, res){

    cursoDB.listarCursos(function(erro, resultado){

        if(erro){
            res.send("Erro ao buscar cursos")
        }else{
            res.json(resultado)
        }

    })

}

function adicionar(req, res){

    let curso = req.body

    cursoDB.adicionarCurso(curso, function(erro){

        if(erro){
            res.send("Erro ao adicionar")
        }else{
            res.send("Curso cadastrado")
        }

    })

}

function atualizar(req, res){

    let id = req.params.id
    let curso = req.body

    cursoDB.atualizarCurso(id, curso, function(erro){

        if(erro){
            res.send("Erro ao atualizar")
        }else{
            res.send("Curso atualizado")
        }

    })

}

function deletar(req, res){

    let id = req.params.id

    cursoDB.deletarCurso(id, function(erro){

        if(erro){
            res.send("Erro ao deletar")
        }else{
            res.send("Curso removido")
        }

    })

}

module.exports = {
    listar,
    adicionar,
    atualizar,
    deletar
}