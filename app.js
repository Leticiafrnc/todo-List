const form = document.querySelector('form')
form.addEventListener('submit', (event) => { // escuta quando alguém clicar no botão submit. Depois tem uma função que pega o evento
event.preventDefault() // quando a página é recarregada o evento pegado some, então usamos essa função para que ele apareça

const inputTodo = document.querySelector('#inputTodo')
const valueTodo = inputTodo.value;

if (valueTodo) {
    createLi(valueTodo)
}else{
    alert('Insira uma tarefa!')
}
})

function createLi(text) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    const div = document.createElement('div')

    button.textContent = 'Apagar tarefa' // texto do botão
    div.textContent = text;
    button.onclick = () => deleteLi(li);

    //aparecer tarefa, pois em cima ela cria mais não parece na minha página
    const ul = document.querySelector('ul')
    ul.appendChild(li); // essa função faz aparecer
    li.appendChild(div)
    li.appendChild(button)
}

function deleteLi(li) {
    li.remove()
}