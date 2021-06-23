import { Todo } from "../classes/Todo.js";

class App {
  input = document.querySelector("input");
  ul = document.querySelector("ul");
  todos = [];

  constructor() {
    this.getLocaleStorageTodo();
    this.paintTodos();
    this.input.addEventListener("keyup", (event) => this.handleKeyUp(event));
  }

  handleKeyUp(event) {
    // console.log(event.key);
    if (event.key === "Enter") {
      // console.log(event.target.value);
      const newTodo = new Todo(event.target.value);
      this.todos.push(newTodo);
      const li = this.createTodoLi(newTodo);
      this.ul.appendChild(li);
      this.input.value = "";
      this.updateLocaleStorage();
    }
  }
  
  createTodoLi(newTodo) {
    //creo li
    const li = document.createElement("li");
    
    //creo checkbox
    const checkbox = this.createCheckbox(newTodo);

    //añado en li
    li.appendChild(checkbox);

    // creo p
    const p = document.createElement('p');
    p.innerText = newTodo.text;
    
    //añado p
    li.appendChild(p);

    //creo i
    const i = this.createIcon("fa-trash");
    i.addEventListener('click', () => this.removeTodo(newTodo.id));
    li.appendChild(i);

    return li;
  }
  
  createIcon(className) {
    const i = document.createElement("i");
    i.classList.add("fas", className);

    return i;
  }

  createCheckbox(todo) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener('click', () => this.updateTodo(todo.id));

    return checkbox;
  }

  updateTodo(id){
    this.todos = this.todos.map((todo) => {
      return todo.id === id ? {...todo, isCompleted : !todo.isCompleted } : todo;
    });
    this.updateLocaleStorage();
    this.paintTodos();
  }

  removeTodo(id){
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.updateLocaleStorage();
    this.paintTodos();
  }

  updateLocaleStorage() {
    //convierto array en JSON
    const jsonTodos = JSON.stringify(this.todos);

    //guardo en localstorage
    localStorage.setItem("TODOS", jsonTodos);

    this.count = this.todos.length + 1;
  }

  getLocaleStorageTodo() {
    const jsonTodos = localStorage.getItem("TODOS");
    if (!jsonTodos) {
      return;
    }
    const parsedTodos = JSON.parse(jsonTodos);
    this.todos = parsedTodos;
  }

  paintTodos() {
    this.ul.innerHTML = ' ';
    this.todos.forEach((todo) => {
      const li = this.createTodoLi(todo);
      this.ul.appendChild(li);
    });
  }
}

new App();
