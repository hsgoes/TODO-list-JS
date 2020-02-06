let botaoAdicionar = document.getElementById("adicionar-tarefa")
let tarefas = document.getElementById("tasks")
let inputTarefa = document.getElementById("tarefa-digitada")
let listaTarefas = localStorage.getItem('listaDeTarefas') ? JSON.parse(localStorage.getItem('listaDeTarefas')) : []

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

const salvarTarefaLocalStorage = tarefas => {
    let tarefasJSON = JSON.stringify(tarefas)
    localStorage.setItem("listaDeTarefas", tarefasJSON)
    console.log("Lista de tarefas salva!")
}


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