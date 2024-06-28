const randomNumber = Math.floor(Math.random() * 100) + 1;

const heartsContainer = document.getElementById("hearts-container");
let userForm = document.querySelector(".userForm");
let textBox = document.querySelector("#text");
let hearts = document.querySelector(".hearts");
let gameover = document.querySelector(".body");

let heart = 10;
let attempts = 0;
let win = false;


function upHearts() {
    heartsContainer.innerHTML = '';
    for (let i = 0; i < heart; i++) {
        const heartItem = document.createElement("div");
        heartItem.className = "item";

        const heartImg = document.createElement("img");
        heartImg.src = "img/heart.png";
        heartItem.appendChild(heartImg);
        heartsContainer.appendChild(heartItem);
    
    }
}
upHearts()


userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let guess = e.target.guess.value;

    if (heart === 0) {
        textBox.innerText = "GAME OVER!!";
        gameover.classList.replace("body", "gameover");

        let buttonContainer = document.getElementById("buttonContainer");
        buttonContainer.innerHTML = '';
        
        let newButton = document.createElement("button");
        newButton.classList.add("newButton");
        newButton.textContent = "Play Again";
        newButton.type = "submit";
        newButton.addEventListener("click", () => {
            location.reload();
        });
        
        
        buttonContainer.appendChild(newButton);
    } else if (guess < 1 || guess > 100) {
        textBox.innerText = "Please Enter a valid Number";
    } else {
        if (win == false) {
            attempts++;            
        }

        if (randomNumber > guess) {
            textBox.innerText = "TOO LOW. TRY AGAIN!!";
            heart--;
            upHearts()
        } else if (randomNumber < guess) {
            textBox.innerText = "TOO HIGH. TRY AGAIN!!";
            heart--;
            upHearts()
        } else {
            win=true;
            textBox.innerText = "YOU WIN! The number was " + randomNumber + ". It took you " + attempts + " attempts.";
            heart = 10;
            let buttonContainer = document.getElementById("buttonContainer");
            buttonContainer.innerHTML = '';

            let newButton = document.createElement("button");
            newButton.classList.add("newButton");
            newButton.textContent = "Play Again";
            newButton.type = "submit";
            newButton.addEventListener("click", () => {
                win=false;
                location.reload();
            });

            buttonContainer.appendChild(newButton);
        }
    }
});






