

/* Criando o item como se fosse uma div no html, no caso fazemos o mesmo mais no js*/ 
const criarItem = (tarefa, status) => { /* texto de cada tarefa - status se feita ou não */
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div> 
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item)
}



