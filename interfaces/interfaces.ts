const playBox: HTMLElement = document.getElementById('play-box') as HTMLElement;
const todoInner: HTMLElement = document.getElementById('todo-inner') as HTMLElement;
const todoForm: HTMLElement = document.getElementById('todo-form') as HTMLElement;
const property: HTMLInputElement = document.getElementById('property') as HTMLInputElement;
const value: HTMLInputElement = document.getElementById('value') as HTMLInputElement;
const formButton: HTMLElement = document.getElementById('form-button') as HTMLElement;
const submit: HTMLElement = document.getElementById('submit') as HTMLElement;
const reset: HTMLElement = document.getElementById('reset') as HTMLElement;
const success: HTMLElement = document.getElementById('success') as HTMLElement;
const wrong: HTMLElement = document.getElementById('wrong') as HTMLElement; 
const todoListEl: HTMLElement = document.getElementById('todo-list') as HTMLElement;

interface Todo {
    name: string,
    description: string,
    daysToComplete: number
}

interface TodoFunc {
    (todo: Todo, todos: Todo[]): void
}

const addTodo: TodoFunc = (todo: Todo, todos: Todo[]) => {
    todos.push(todo);
}

const populateTodoList = (todos: Todo[]): void => {
    todoListEl.innerHTML = '';
    todos.forEach(el => todoListEl.innerHTML += `<tr><td>${el.name}</td><td>${el.description}</td><td>${el.daysToComplete}</td></tr>`);
}

let todoObj: Partial<Todo> = {};
const todoList: Todo[] = [];

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!todoObj[property.value]) {
        todoInner.innerHTML += `<p style="text-indent: 40px;">${property.value}: ${/^\d+$/.test(value.value) ? value.value : `"${value.value}"`},<p>`;
        todoObj[property.value] = /^\d+$/.test(value.value) ? Number(value.value) : value.value;
    }
    property.value = '';
    value.value = '';
})

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const todoKeys = Object.keys(todoObj);
    if (todoKeys.length === 3 
        && todoKeys.indexOf('name') !== -1
        && todoKeys.indexOf('description') !== -1
        && todoKeys.indexOf('daysToComplete') !== -1
        && typeof todoObj.name === 'string'
        && typeof todoObj.description === 'string' 
        && typeof todoObj.daysToComplete === 'number') {
        success.style.display = 'flex';
        reset.style.visibility = 'visible';
        const newTodo: Todo = todoObj as Todo;
        addTodo(newTodo, todoList);
        populateTodoList(todoList);
        todoObj = {};
        todoInner.innerHTML = '';
        property.value = '';
        value.value = '';
    } else {
        wrong.style.display = 'flex';
        reset.style.visibility = 'visible';
    }   
    submit.style.visibility = 'hidden';
})

reset.addEventListener('click', (event) => {
    success.style.display = 'none';
    wrong.style.display = 'none';
    reset.style.visibility = 'hidden';
    submit.style.visibility = 'visible';
    todoObj = {};
    todoInner.innerHTML = '';
    property.value = '';
    value.value = '';
})