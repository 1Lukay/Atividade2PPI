// LISTAR CURSOS (GET)
function listarCursos(){

    fetch("http://localhost:3000/cursos")
    .then(res => res.json())
    .then(dados => {

        let container = document.querySelector(".cursos")
        container.innerHTML = ""

        dados.forEach(curso => {

            container.innerHTML += `
                <div class="curso-card">
                    <h3>${curso.titulo}</h3>
                    <p>Duração: ${curso.carga_horaria}h</p>
                    <p>Preço: R$ ${curso.preco}</p>

                    <button onclick="deletar(${curso.id})">Excluir</button>
                    <button onclick="editar(${curso.id})">Editar</button>
                </div>
            `
        })

    })
    
}
// POST
document.getElementById("formCurso").addEventListener("submit", function(e){

    e.preventDefault()

    let titulo = document.getElementById("titulo").value

    if(!titulo){
        document.getElementById("mensagem").innerText = "Preencha o título"
        return
    }

    let curso = {
        titulo: titulo,
        descricao: document.getElementById("descricao").value,
        carga_horaria: document.getElementById("carga").value,
        instrutor: document.getElementById("instrutor").value,
        nivel: document.getElementById("nivel").value,
        preco: document.getElementById("preco").value
    }

    fetch("http://localhost:3000/cursos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(curso)
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("mensagem").innerText = msg
        listarCursos()
    })

})
function deletar(id){

    fetch(`http://localhost:3000/cursos/${id}`, {
        method: "DELETE"
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("mensagem").innerText = msg
        listarCursos()
    })

}
function editar(id){

    let novoTitulo = prompt("Novo título:")

    if(!novoTitulo){
        return
    }

    fetch(`http://localhost:3000/cursos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            titulo: novoTitulo,
            descricao: "",
            carga_horaria: 0,
            instrutor: "",
            nivel: "",
            preco: 0
        })
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("mensagem").innerText = msg
        listarCursos()
    })
container.innerHTML += `
    <div class="curso-card">
        <h3>${curso.titulo}</h3>
        <p>Duração: ${curso.carga_horaria}h</p>
        <p>Preço: R$ ${curso.preco}</p>

        <button onclick="selecionarCurso(${curso.id})">Selecionar</button>
        <button onclick="deletar(${curso.id})">Excluir</button>
        <button onclick="editar(${curso.id})">Editar</button>
    </div>
`
function selecionarCurso(id){

    fetch("http://localhost:3000/cursos")
    .then(res => res.json())
    .then(dados => {

        let curso = dados.find(c => c.id == id)

        if(curso){
            document.getElementById("d_titulo").innerText = curso.titulo
            document.getElementById("d_descricao").innerText = curso.descricao
            document.getElementById("d_carga").innerText = curso.carga_horaria + "h"
            document.getElementById("d_instrutor").innerText = curso.instrutor
            document.getElementById("d_nivel").innerText = curso.nivel
            document.getElementById("d_preco").innerText = curso.preco
        }

    })
    
}

}

listarCursos()