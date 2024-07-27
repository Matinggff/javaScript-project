import { generateUUID } from "./script.js";

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector(".todo-input");
    const addButton = document.querySelector(".add-button");
    const completeButton = document.querySelector(".complete-button");
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

    completeButton.addEventListener('click', () => {
        todoesJson.forEach((item) => {
            if (item.completed) {
                const listItem = document.getElementById(item.id);
                if (listItem) {
                    listItem.classList.toggle('completed');
                }
            }
        })
        localStorage.setItem("todoes", JSON.stringify(todoesJson));
    })
    
    todoesHtml.addEventListener('click', (e)=> {
        if (e.target.classList.contains('delete-button')) {
            const todoId = e.target.parentElement.getAttribute('id')

            todoesJson = todoesJson.filter((item)=> item.id !== todoId)

            todoesRender()
            localStorage.setItem("todoes", JSON.stringify(todoesJson))
        }

    })
    
    

    function todoesRender() {
        todoesHtml.innerHTML = '';
        todoesJson.forEach((item) => {


            const listItem = document.createElement('li');
            listItem.textContent = item.text;
            listItem.id = item.id;
            listItem.classList.add("to")

            if (item.completed) {
                listItem.classList.toggle('completed')
            }

            const checkItem = document.createElement('input');
            checkItem.type = "checkbox";
            checkItem.checked = item.completed;

            checkItem.addEventListener('change', () => {
                item.completed = checkItem.checked;
                localStorage.setItem("todoes", JSON.stringify(todoesJson));
            })

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            listItem.appendChild(deleteButton)
            listItem.appendChild(checkItem)
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





