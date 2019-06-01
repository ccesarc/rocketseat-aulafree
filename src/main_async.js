import { rejects } from "assert";

//alert('caio');
// import { soma } from './funcoes';

// console.log('Retorno : ', soma(1, 2));

// class TodoList {
//     constructor() {
//         this.todos = [];
//     }
//     addTodo() {
//         this.todos.push('Novo todo');
//         console.log('Console', this.todos);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.addTodo();
// };

const MinhaLista = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 2000);
});

//es-6
// MinhaLista().then(response => {
//     console.log(response);
// }).catch(reject => {
//     console.log('Erro : ', reject);
// });

//es-8

// async function executarPromise() {
//     //const response = await MinhaLista();
//     console.log('Resposta : ', await MinhaLista());
//     console.log('Resposta : ', await MinhaLista());
//     console.log('Resposta : ', await MinhaLista());
//     console.log('Resposta : ', await MinhaLista());
// }

const executarPromise = async() => {
    //const response = await MinhaLista();
    console.log('Resposta : ', await MinhaLista());
    console.log('Resposta : ', await MinhaLista());
    console.log('Resposta : ', await MinhaLista());
    console.log('Resposta : ', await MinhaLista());
}

executarPromise();