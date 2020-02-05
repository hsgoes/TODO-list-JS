let botaoAdicionar = document.getElementById("adicionar-tarefa")
let tarefas = document.getElementById("tasks")
let inputTarefa = document.getElementById("tarefa-digitada")

let novaTarefa = `<div class="col-md-4">
    <div class="cardTarefa row">
        <div class="texto-tarefa">

        </div>
        <div class="botao-tarefa">
            <img src="imagens/check.png" width="32">
        </div>
    </div>
</div>`

botaoAdicionar.onclick = function () {

    let valorDigitado = inputTarefa.value

    let novaTarefa = `<div class="col-md-4">
    <div class="cardTarefa">
            <div class="texto-tarefa">
                ${valorDigitado}
            </div>
            <div class="botao-tarefa">
                <img src="imagens/check.png" width="32">
            </div>
    </div>
    </div>`

    tarefas.innerHTML += novaTarefa;
}