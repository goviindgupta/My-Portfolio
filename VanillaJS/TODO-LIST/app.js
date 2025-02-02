const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('change', filterTodo) // Change 'click' to 'change'

function addTodo(event) {
    event.preventDefault()

    if (todoInput.value.trim() === '') return; // Prevent empty todos

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    saveLocalTodos(todoInput.value)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    todoInput.value = ''
}

function deleteCheck(e) {
    const item = e.target

    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement
        todo.classList.add('fall')

        removeLocalTodos(todo)

        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.children 

    Array.from(todos).forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
            case 'uncompleted': 
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
        }
    })
}

function saveLocalTodos(todo) {
    let todos = localStorage.getItem('todos') 
        ? JSON.parse(localStorage.getItem('todos')) 
        : []
    
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    let todos = localStorage.getItem('todos') 
        ? JSON.parse(localStorage.getItem('todos')) 
        : []

    todos.forEach(function(todo) {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        const newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)

        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)

        todoList.appendChild(todoDiv)
    })
}

function removeLocalTodos(todo) {
    let todos = localStorage.getItem('todos') 
        ? JSON.parse(localStorage.getItem('todos')) 
        : []

    const todoText = todo.querySelector('.todo-item').innerText
    todos = todos.filter(t => t !== todoText) // Remove the matching todo
    localStorage.setItem('todos', JSON.stringify(todos))
}
