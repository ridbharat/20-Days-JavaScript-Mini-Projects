// Project: To-Do List
let todos = [];

function addTodo(task) {
    todos.push(task);
    console.log(`Added: ${task}`);
}

function listTodos() {
    console.log("Your To-Dos:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

addTodo("Learn JavaScript");
addTodo("Build a project");
listTodos();