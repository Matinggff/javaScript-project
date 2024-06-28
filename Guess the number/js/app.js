const randomNumber = Math.floor(Math.random() * 100) + 1;

let userForm = document.querySelector(".userForm");
let textBox = document.querySelector("#text");
let hearts = document.querySelector(".hearts");
let gameover = document.querySelector(".body");

let heart = 10;
let attempts = 0;

hearts.innerText = "Hearts: " + heart;

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let guess = e.target.guess.value;

    if (heart === 0) {
        textBox.innerText = "GAME OVER!!";
        gameover.classList.replace("body", "gameover");
        
        let newButton = document.createElement("button");
        newButton.classList.add("newButton");
        newButton.textContent = "Play Again";
        newButton.type = "submit";
        newButton.addEventListener("click", () => {
            location.reload();
        });
        
        let buttonContainer = document.getElementById("buttonContainer");
        buttonContainer.appendChild(newButton);
    } else if (guess < 1 || guess > 100) {
        textBox.innerText = "Please Enter a valid Number";
    } else {
        attempts++;

        if (randomNumber > guess) {
            textBox.innerText = "TOO LOW. TRY AGAIN!!";
            heart--;
            hearts.innerText = "Hearts: " + heart;
        } else if (randomNumber < guess) {
            textBox.innerText = "TOO HIGH. TRY AGAIN!!";
            heart--;
            hearts.innerText = "Hearts: " + heart;
        } else {
            textBox.innerText = "YOU WIN! The number was " + randomNumber + ". It took you " + attempts + " attempts.";
            heart = 10;

            let newButton = document.createElement("button");
            newButton.classList.add("newButton");
            newButton.textContent = "Play Again";
            newButton.type = "submit";
            newButton.addEventListener("click", () => {
                location.reload();
            });

            let buttonContainer = document.getElementById("buttonContainer");
            buttonContainer.appendChild(newButton);
        }
    }
});
