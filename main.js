class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo() {
        this.todos.push('Novo todo');
        console.log('Console', this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
};