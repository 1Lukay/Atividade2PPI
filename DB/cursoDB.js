import conexao from "./conexao.js"

function listarCursos(callback){

    let sql = "SELECT * FROM curso"

    conexao.query(sql, callback)

}
//função para listar os cursos do banco de dados, recebe um callback para lidar com o resultado da consulta
function adicionarCurso(curso, callback){   

    let sql = "INSERT INTO curso (titulo, descricao, carga_horaria, instrutor, nivel, preco) VALUES (?,?,?,?,?,?)"

    conexao.query(sql,   //array de valores para os campos do curso
        [   
            curso.titulo,
            curso.descricao,
            curso.carga_horaria,
            curso.instrutor,
            curso.nivel,
            curso.preco
        ],
        callback
    )
}
//função para adicionar um novo curso ao banco de dados, recebe um objeto curso e um callback para lidar com o resultado da inserção
function atualizarCurso(id, curso, callback){   

    let sql = "UPDATE curso SET titulo=?, descricao=?, carga_horaria=?, instrutor=?, nivel=?, preco=? WHERE id=?"

    conexao.query(sql,
        [
            curso.titulo,
            curso.descricao,
            curso.carga_horaria,
            curso.instrutor,
            curso.nivel,
            curso.preco,
            id
            ],
        callback
    )
}
//função para atualizar um curso existente no banco de dados, recebe o id do curso a ser atualizado, um objeto curso com os novos dados e um callback para lidar com o resultado da atualização
function deletarCurso(id, callback){

    let sql = "DELETE FROM curso WHERE id=?"
 
    
    conexao.query(sql,[id],callback)

}

export default {
    listarCursos,
    adicionarCurso,
    atualizarCurso,
    deletarCurso
}