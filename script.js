//Array vazio que vai receber minhas tasks
let tasks = [];

//Função para criar o ID da minha tarefa
function createId() {
    return Math.floor(Math.random() * 1000);
}

//Função para criar minha tarefa
function createTask() {
    let taskName = document.getElementById('inputTask').value; //task.name receberá meu input
    let task = { id: createId(), name: taskName }; //task será o nome do meu objeto, que receberá uma propriedade(id e name) e um método(function e taskName).
    let valor = '';
    if (taskName == valor) {
        return alert('Por favor, insira uma tarefa!!');
    } else {
        tasks.push(task); //A function .push adiciona ao array TASKS, o meu objeto TASK
        localStorage.setItem('tasks', JSON.stringify(tasks)); //Função para adicionar o array na memória.
        updateList();
    }
}

//Essa function cria a lista e atualiza ela
function updateList() {
    let list = '<ul>';
    for (task of tasks) {
        list +=
            '<li id=' +
            
            "<ul id='titleTask'>" +
            task.name +
            '</button></li>';
        list += '</ul>';
    }
    let update = document.getElementById('tasksList');
    update.innerHTML = list;
    document.getElementById('inputTask').value = '';
}

//Essa function limpa todos os dados do array;
function clearAll() {
    if (tasks == '') {
        return alert('Por favor insira uma tarefa');
    }
    let confirmation = window.confirm('Deseja apagar todas as suas tarefas?');
    if (confirmation) {
        tasks = [];
        alert('Tarefas apagadas');
        let buttonClearAll = document.getElementsByClassName('clearAll');
    }
    localStorage.setItem('tasks', JSON.stringify(tasks)); //Função para adicionar o array na memória
    updateList();
}

//Essa function para armazenar os dados
function loadAll() {
    let elementsTasks = localStorage.getItem('tasks');
    if (elementsTasks) {
        tasks = JSON.parse(elementsTasks);
        updateList();
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateList();
} 
  
loadAll();
