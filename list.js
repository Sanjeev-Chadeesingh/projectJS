console.log('hey');

var todos = ['Practice javascript'];

var input = prompt('What would you like to do?');

while(input !== 'quit') {
    if (input === 'list') {
        listTodos();
    } else if (input === 'new') {
        addTodo();
    } else if (input === 'delete') {
        deleteTodo();
    }
    input = prompt('What would you like to do?');
}
console.log('Okay, you quit the app.');

function listTodos() {
    console.log('**************');
        todos.forEach(function(todo, i) {
            console.log(i + ': ' + todo);
        });
        console.log('**************');
};

function addTodo() {
    var newTodo = prompt('Enter new todo');
        todos.push(newTodo);
        console.log('Added todo');
};

function deleteTodo() {
    var index = prompt('Enter Index Of Todo To Delete');
        todos.splice(index, 1);
        console.log('Deleted todo');
};