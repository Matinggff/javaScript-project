document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("user-name").value;

    if (userName.trim() !== "") {
        document.getElementById("login-section").style.display = "none";
        
        document.getElementById("quiz-section").scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Please enter your name");
    }
});

const quizQuestions = [
    {
        question: "In what year did the United States host the FIFA World Cup for the first time?",
        options: ["1986", "1994", "2002", "2010"],
        correctAnswer: "1994"
    },
    {
        question: "What is the capital city of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "George Orwell", "Mark Twain", "Charles Dickens"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which element is represented by the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Gold", "Silver"],
        correctAnswer: "Oxygen"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        correctAnswer: "George Washington"
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "Europe", "South America"],
        correctAnswer: "Asia"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O"
    }
];


let currentQuestionIndex = 0;


const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const nextButton = document.querySelector(".next-btn");


function showQuestion() {

    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(label);
    });
}


nextButton.addEventListener("click", function() {

    const selectedOption = document.querySelector('input[name="answer"]:checked');

 
    if (selectedOption) {
        const userAnswer = selectedOption.value;

     
        const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
        if (userAnswer === correctAnswer) {
            alert("Correct Answer!");
        } else {
            alert("Wrong Answer!");
        }

       
        currentQuestionIndex++;

      
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            alert("Quiz completed!");
           
            document.querySelector('.quiz').style.display = 'none'; 
    
        }
    } else {
        alert("Please select an answer!");
    }
});


showQuestion();

