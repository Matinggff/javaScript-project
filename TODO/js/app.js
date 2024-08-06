import { generateUUID } from "./script.js";

class TodoApp {
    constructor() {
        this.input = document.querySelector(".todo-input");
        this.addButton = document.querySelector(".add-button");
        this.completeButton = document.querySelector(".complete-button");
        this.incompleteButton = document.querySelector(".incomplete-button");
        this.deleteAllButton = document.querySelector(".delete-all-button");
        this.todoesHtml = document.querySelector(".todoes");
        this.emptyImage = document.querySelector(".empty-image");
        this.todoesJson = JSON.parse(localStorage.getItem("todoes")) || [];

        this.addEventListeners();
        this.renderTodos();
    }

    addEventListeners() {
        this.addButton.addEventListener("click", () => this.addTodo());
        this.completeButton.addEventListener("click", () => this.filterTodos(true));
        this.incompleteButton.addEventListener("click", () => this.filterTodos(false));
        this.deleteAllButton.addEventListener("click", () => this.deleteAllTodos());
        this.todoesHtml.addEventListener('click', (e) => this.handleTodoClick(e));
    }

    addTodo() {
        const taskText = this.input.value.trim();
        if (taskText !== '') {
            const newTodo = {
                id: generateUUID(), 
                text: taskText,
                completed: false 
            };
            this.todoesJson.push(newTodo);
            localStorage.setItem("todoes", JSON.stringify(this.todoesJson));
            this.renderTodos();
            this.input.value = '';
        }
    }

    renderTodos() {
        this.todoesHtml.innerHTML = '';
        this.todoesJson.forEach((item) => {
            const listItem = this.createTodoElement(item);
            this.todoesHtml.appendChild(listItem);
        });
        this.updateEmptyImage();
    }

    createTodoElement(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item.text;
        listItem.id = item.id;
        listItem.classList.add("to");

        if (item.completed) {
            listItem.classList.add('completed');
        }

        const checkItem = document.createElement('input');
        checkItem.type = "checkbox";
        checkItem.checked = item.completed;
        checkItem.addEventListener('change', () => this.toggleTodoComplete(item, checkItem, listItem));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        listItem.appendChild(deleteButton);
        listItem.appendChild(checkItem);

        return listItem;
    }

    toggleTodoComplete(item, checkItem, listItem) {
        item.completed = checkItem.checked;
        listItem.classList.toggle('completed', item.completed);
        localStorage.setItem("todoes", JSON.stringify(this.todoesJson));
    }

    filterTodos(showCompleted) {
        this.todoesHtml.innerHTML = '';
        const filteredTodoes = this.todoesJson.filter(item => item.completed === showCompleted);
        filteredTodoes.forEach((item) => {
            const listItem = this.createTodoElement(item);
            this.todoesHtml.appendChild(listItem);
        });
        this.updateEmptyImage(filteredTodoes);
    }

    deleteAllTodos() {
        this.todoesJson = [];
        localStorage.setItem("todoes", JSON.stringify(this.todoesJson));
        this.renderTodos();
    }

    handleTodoClick(e) {
        if (e.target.classList.contains('delete-button')) {
            const todoId = e.target.parentElement.getAttribute('id');
            this.todoesJson = this.todoesJson.filter((item) => item.id !== todoId);
            this.renderTodos();
            localStorage.setItem("todoes", JSON.stringify(this.todoesJson));
        }
    }

    updateEmptyImage(filteredTodoes = this.todoesJson) {
        if (filteredTodoes.length > 0) {
            this.emptyImage.style.display = 'none';
        } else {
            this.emptyImage.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});