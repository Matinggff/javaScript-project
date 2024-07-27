import { generateUUID } from "./script.js";

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector(".todo-input");
    const addButton = document.querySelector(".add-button");
    const completeButton = document.querySelector(".complete-button");
    const incompleteButton = document.querySelector(".incomplete-button");
    const deleteAllButton = document.querySelector(".delete-all-button");
    const todoesHtml = document.querySelector(".todoes");
    const emptyImage = document.querySelector(".empty-image");
    let todoesJson = JSON.parse(localStorage.getItem("todoes")) || [];

    todoesRender();

    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();

        if (taskText !== '') {
            const newTodo = {
                id: generateUUID(), 
                text: taskText,
                completed: false 
            };
            todoesJson.push(newTodo);
            localStorage.setItem("todoes", JSON.stringify(todoesJson));
            todoesRender();
            input.value = '';
        }
    });

    completeButton.addEventListener("click", () => {
        filterTodoes(true);
    });

    incompleteButton.addEventListener("click", () => {
        filterTodoes(false);
    });

    deleteAllButton.addEventListener("click", () => {
        todoesJson = [];
        localStorage.setItem("todoes", JSON.stringify(todoesJson));
        todoesRender();
    });

    todoesHtml.addEventListener('click', (e)=> {
        if (e.target.classList.contains('delete-button')) {
            const todoId = e.target.parentElement.getAttribute('id');
            todoesJson = todoesJson.filter((item) => item.id !== todoId);
            todoesRender();
            localStorage.setItem("todoes", JSON.stringify(todoesJson));
        }
    });

    function todoesRender() {
        todoesHtml.innerHTML = '';
        todoesJson.forEach((item) => {
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

            checkItem.addEventListener('change', () => {
                item.completed = checkItem.checked;
                listItem.classList.toggle('completed', item.completed);
                localStorage.setItem("todoes", JSON.stringify(todoesJson));
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            listItem.appendChild(deleteButton);
            listItem.appendChild(checkItem);
            todoesHtml.appendChild(listItem);
        });

        if (todoesJson.length > 0) {
            emptyImage.style.display = 'none';
        } else {
            emptyImage.style.display = 'block';
        }
    }

    function filterTodoes(showCompleted) {
        todoesHtml.innerHTML = '';
        const filteredTodoes = todoesJson.filter(item => item.completed === showCompleted);

        filteredTodoes.forEach((item) => {
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

            checkItem.addEventListener('change', () => {
                item.completed = checkItem.checked;
                listItem.classList.toggle('completed', item.completed);
                localStorage.setItem("todoes", JSON.stringify(todoesJson));
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            listItem.appendChild(deleteButton);
            listItem.appendChild(checkItem);
            todoesHtml.appendChild(listItem);
        });

        if (filteredTodoes.length > 0) {
            emptyImage.style.display = 'none';
        } else {
            emptyImage.style.display = 'block';
        }
    }
});
