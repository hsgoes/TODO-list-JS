let botaoAdicionar = document.getElementById("adicionar-tarefa")
let botaoConcluir = document.getElementsByClassName("botao-tarefa")
let tarefas = document.getElementById("tasks")
let inputTarefa = document.getElementById("tarefa-digitada")
let listaTarefas = localStorage.getItem('listaDeTarefas') ? JSON.parse(localStorage.getItem('listaDeTarefas')) : []

<<<<<<< HEAD
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
=======
const mostrarNaTela = arrayTarefas => {
    arrayTarefas.forEach(textoTarefa => {
        let novaTarefa = `<div class="col-md-4">
    <div class="cardTarefa">
            <div class="texto-tarefa overflow-auto" style="margin-left: 10px">
                ${textoTarefa}
            </div>
            <div class="botao-tarefa">
                <img src="imagens/check.png" width="32">
            </div>
>>>>>>> 63ef2c29b4836934b17366f1fb7ef2240c087ef0
    </div>
    </div>`

        //Insere uma nova tarefa após "beforeend" depois da tag pai das tarefas
        tarefas.insertAdjacentHTML("beforeend", novaTarefa)

        let objTarefaNova = tarefas.lastElementChild

        btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild

        btnCheckTarefaNova.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
            listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

            salvarTarefaLocalStorage(listaTarefas)
        }
    });
}

mostrarNaTela(listaTarefas);

<<<<<<< HEAD


botaoAdicionar.addEventListener("click", function add() {
    
    let valorDigitado = inputTarefa.value
=======
const salvarTarefaLocalStorage = tarefas => {
    let tarefasJSON = JSON.stringify(tarefas)
    localStorage.setItem("listaDeTarefas", tarefasJSON)
    console.log("Lista de tarefas salva!")
}

>>>>>>> 63ef2c29b4836934b17366f1fb7ef2240c087ef0

const criarTarefa = (event) => {

    if (event.keyCode == 13 || event.type == "click") {
        //adiciona o valor que usuário digitou ao campo
        let valorDigitado = inputTarefa.value;
        if (valorDigitado == "") {
            alert("Você deve digitar uma tarefa")
            return
        }

        listaTarefas.push(valorDigitado)
        salvarTarefaLocalStorage(listaTarefas)

        //limpa o campo
        inputTarefa.value = "";

        let novaTarefa = `<div class="col-md-4">
    <div class="cardTarefa">
            <div class="texto-tarefa overflow-auto" style="margin-left: 10px">
                ${valorDigitado}
            </div>
            <div class="botao-tarefa">
                <img src="imagens/check.png" width="32">
            </div>
    </div>
    </div>`

<<<<<<< HEAD
    tarefas.innerHTML += novaTarefa;
})




    botaoConcluir[0].addEventListener('click', removeParticipante)
    botaoConcluir[1].addEventListener('click', removeParticipante)


function removeParticipante(e) {

      console.log(e.target)

    e.target.parentNode.parentNode.classList.add('red')
    setTimeout(() => { e.target.parentNode.parentNode.remove(); }, 1500) };
=======
        //Insere uma nova tarefa após "beforeend" depois da tag pai das tarefas
        tarefas.insertAdjacentHTML("beforeend", novaTarefa)

        let objTarefaNova = tarefas.lastElementChild

        btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild

        btnCheckTarefaNova.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)

            salvarTarefaLocalStorage(listaTarefas)
        }
    }
}


inputTarefa.addEventListener("keypress", criarTarefa)
botaoAdicionar.addEventListener("click", criarTarefa)

const construirTarefas = () => {

}
>>>>>>> 63ef2c29b4836934b17366f1fb7ef2240c087ef0
