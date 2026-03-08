const conexao = require("./conexao")

function listarCursos(callback){

    let sql = "SELECT * FROM curso"

    conexao.query(sql, callback)

}

function adicionarCurso(curso, callback){

    let sql = "INSERT INTO curso (titulo, descricao, carga_horaria, instrutor, nivel, preco) VALUES (?,?,?,?,?,?)"

    conexao.query(sql,
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

function deletarCurso(id, callback){

    let sql = "DELETE FROM curso WHERE id=?"

    conexao.query(sql,[id],callback)

}

module.exports = {
    listarCursos,
    adicionarCurso,
    atualizarCurso,
    deletarCurso
}