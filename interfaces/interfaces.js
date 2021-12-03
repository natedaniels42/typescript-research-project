var playBox = document.getElementById('play-box');
var todoInner = document.getElementById('todo-inner');
var todoForm = document.getElementById('todo-form');
var property = document.getElementById('property');
var value = document.getElementById('value');
var formButton = document.getElementById('form-button');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');
var success = document.getElementById('success');
var wrong = document.getElementById('wrong');
var todoListEl = document.getElementById('todo-list');
var addTodo = function (todo, todos) {
    todos.push(todo);
};
var populateTodoList = function (todos) {
    todoListEl.innerHTML = '';
    todos.forEach(function (el) { return todoListEl.innerHTML += "<tr><td>".concat(el.name, "</td><td>").concat(el.description, "</td><td>").concat(el.daysToComplete, "</td></tr>"); });
};
var todoObj = {};
var todoList = [];
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!todoObj[property.value]) {
        todoInner.innerHTML += "<p style=\"text-indent: 40px;\">".concat(property.value, ": ").concat(/^\d+$/.test(value.value) ? value.value : "\"".concat(value.value, "\""), ",<p>");
        todoObj[property.value] = /^\d+$/.test(value.value) ? Number(value.value) : value.value;
    }
    property.value = '';
    value.value = '';
});
submit.addEventListener('click', function (event) {
    event.preventDefault();
    var todoKeys = Object.keys(todoObj);
    if (todoKeys.length === 3
        && todoKeys.indexOf('name') !== -1
        && todoKeys.indexOf('description') !== -1
        && todoKeys.indexOf('daysToComplete') !== -1
        && typeof todoObj.name === 'string'
        && typeof todoObj.description === 'string'
        && typeof todoObj.daysToComplete === 'number') {
        success.style.display = 'flex';
        reset.style.visibility = 'visible';
        var newTodo = todoObj;
        addTodo(newTodo, todoList);
        populateTodoList(todoList);
        todoObj = {};
        todoInner.innerHTML = '';
        property.value = '';
        value.value = '';
    }
    else {
        wrong.style.display = 'flex';
        reset.style.visibility = 'visible';
    }
    submit.style.visibility = 'hidden';
});
reset.addEventListener('click', function (event) {
    success.style.display = 'none';
    wrong.style.display = 'none';
    reset.style.visibility = 'hidden';
    submit.style.visibility = 'visible';
    todoObj = {};
    todoInner.innerHTML = '';
    property.value = '';
    value.value = '';
});
