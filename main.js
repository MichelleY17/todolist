import { todos } from './data/todos.js';
    const todoList = document.querySelector('.list-group');
    const showCompleted = document.getElementById('show-completed').checked;
render();

function render() {
    const toCompleteCount = todos.filter(todo => !todo.done).length;
    const totalTaskCount = todos.length;
    for (const todo of todos){
        const task = document.createElement("li");
        task.className = "list-group-item";
        // console.log(task);
        task.textContent = todo.description;
        todoList.appendChild(task);
    } 
};


// function addTodo(description) {
    
//     if (!description.trim()) {
//         alert('TODO vuota');
//         return;
//     }
//     if (todos.some(todo => todo.description === description)) {
//         alert('TODO già esistente');
//         return;
//     }

//     todos.push({ description, done: false });
//     render();
// }
// document.getElementById('add-new-btn').addEventListener('click', () => {
//     const input = document.querySelector('.input-group input');
//     addTodo(input.value);
//     input.value = '';
// });

// document.querySelector('.list-group').addEventListener('change', event => {
//     if (event.target.matches('.form-check-input'));
// })