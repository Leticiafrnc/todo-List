

/* Criando o item como se fosse uma div no html, no caso fazemos o mesmo mais no js*/ 
const criarItem = (tarefa, status) => { /* texto de cada tarefa - status se feita ou não */
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div> 
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item) /*add o item criado*/
}

/*Criando JSON para simular um banco de dados*/

let banco = [
    {'tarefa': 'Estudar', 'status':''},
    {'tarefa':'Comer', 'status': 'checked'},
    {'tarefa':'teste', 'status': 'checked'}

]

/* Le o banco de dados e cria os elementos deles quando mudar os elemtos do banco ele atualiza a tela - Atulizar */

const limparTarefas = () =>{
    const todoList = document.getElementById('todoList')
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

const atulizarTela = () =>{
    limparTarefas()
    banco.forEach(item => criarItem(item.tarefa, item.status)); /*forEach - método do array para percorrer todo o array do banco de dados*/
}


/* função inserir nova tarefa */
const addItem = (event) => {
    const tecla = event.key;
    const texto = event.target.value /*pega a tarefa digitada*/
    if (tecla==='Enter') {
        banco.push({'tarefa': texto , 'status': ''})
        atulizarTela()
        event.target.value = '' /*limpa a caixa onde são escritas as tarefas*/
    }
}
document.getElementById('newItem').addEventListener('keypress', addItem)


/*quando clicar no checked marcar no banco*/

const clikItem = (evento) =>{
    const elemnto = evento.target;
}
document.getElementById('todoList').addEventListener('click', clikItem)


atulizarTela()