import { todos } from './data/todos.js';
    const todoList = document.querySelector('.list-group');
    // const  showCompletedTask = todos.filter(todo => !todo.done);
    const showCompleted = document.getElementById('show-completed').checked;
    // showCompleted.addEventListener("click",function(){
    //     showCompletedTask = showCompleted ? todos : todos.filter(todo => !todo.done);
    //     render();
    // })
    // console.log(showCompleted)

render();

function render() {
    todoList.innerHTML = '';
    const toCompleteCount = todos.filter(todo => !todo.done).length;
    const totalTaskCount = todos.length;
    for (const todo of todos){
        const task = document.createElement("li");
        task.className = "list-group-item";
        // console.log(task);
        task.innerHTML = `
            <span></span>
            <input type="checkbox">
        `;
        task.querySelector("span").textContent = todo.description;
        task.querySelector("input").checked = todo.done;
        todoList.appendChild(task);
    } 
    document.querySelector('h3 span:first-child').textContent = toCompleteCount;
    document.querySelector('h3 span:last-child').textContent = totalTaskCount;
};


function addTodo(description) {
    
    if (!description.trim()) {
        alert('TODO vuota');
        
        return;
    }
    if (todos.some(todo => todo.description === description)) {
        alert('TODO già esistente');

        return;
    }

    todos.push({ description, done: false });
    render();
}


document.getElementById('add-new-btn').addEventListener('click', () => {
    const input = document.querySelector('.input-group input');
    addTodo(input.value);
    input.value = '';
});

document.querySelector('.list-group').addEventListener('change', event => {
    if (event.target.matches('.form-check-input'));
})