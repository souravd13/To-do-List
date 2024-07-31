var todoList = document.querySelector("#todo-list");
var form = document.querySelector("form");
function todo(id,todoText){
    this.id = id;
    this.todoText = todoText;
    this.completed = false;
}
function renderToDo(){
    todoList.innerHTML = '';
    listOfTodos.forEach(todo => {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = todo.todoText;
        var button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click",() => deleteTodo(todo.id));
        li.appendChild(span);
        li.appendChild(button);
        li.addEventListener("click",() => toggleCompleted(todo.id));
        if (todo.completed) {
            li.classList.add('completed');
        }
        todoList.appendChild(li);
        document.querySelector("#todo-input").value = "";       
    }); 
}
function deleteTodo(id) {
    listOfTodos = listOfTodos.filter(todo => todo.id != id);
    renderToDo();
}
function toggleCompleted(id){
    listOfTodos.forEach(todo => {
        if(todo.id===id){
            todo.completed=!todo.completed;
        }
        renderToDo();
    });
}
var listOfTodos = [];
document.querySelector("#add-button").addEventListener("click",function (){
    var newItem = new todo(Date.now(),document.querySelector("#todo-input").value.trim());
    if (newItem.todoText!=""){
        listOfTodos.push(newItem);
        renderToDo();
        event.preventDefault();
    }
    else {
        alert("Please enter a To-Do !!");
    } 
});
