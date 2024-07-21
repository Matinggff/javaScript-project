import { generateUUID } from "./script.js";

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector(".todo-input");
    const addButton = document.querySelector(".add-button");
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

    function todoesRender() {
        todoesHtml.innerHTML = '';
        todoesJson.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.text; 
            listItem.classList.add("to")

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            listItem.appendChild(deleteButton)
            todoesHtml.appendChild(listItem);


        });

        // Hide the empty image when there are tasks
        if (todoesJson.length > 0) {
            emptyImage.style.display = 'none';
        } else {
            emptyImage.style.display = 'block';
        }
    }
});
