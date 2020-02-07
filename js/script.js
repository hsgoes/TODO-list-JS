let botaoAdicionar = document.getElementById("adicionar-tarefa")
let botaoConcluir = document.getElementsByClassName("botao-tarefa")
let tarefas = document.getElementById("tasks")
let inputTarefa = document.getElementById("tarefa-digitada")

/*
    Variável que recebe a parte do HTML que será adicionada para mostrar uma tarefa
*/
let novaTarefa = `<div class="col-md-4">
    <div class="cardTarefa row">
        <div class="texto-tarefa">

        </div>
        <div class="botao-tarefa">
            <img src="imagens/check.png" width="32">
        </div>
    </div>
</div>`



botaoAdicionar.addEventListener("click", function add() {
    
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
})




    botaoConcluir[0].addEventListener('click', removeParticipante)
    botaoConcluir[1].addEventListener('click', removeParticipante)


function removeParticipante(e) {

      console.log(e.target)

    e.target.parentNode.parentNode.classList.add('red')
    setTimeout(() => { e.target.parentNode.parentNode.remove(); }, 1500) };