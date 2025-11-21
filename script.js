var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "High Text Making Line", "Hyper Transfer Markup Link", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        choices: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which property is used to change text color in CSS?",
        choices: ["font-color", "text-style", "color", "font-style"],
        answer: "color"
    },
    {
        question: "Which CSS property controls spacing inside a box?",
        choices: ["padding", "margin", "spacing", "border"],
        answer: "padding"
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        choices: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: "<script>"
    },
    {
        question: "Which method is used to print data in the console?",
        choices: ["console.print()", "console.log()", "print()", "log.console()"],
        answer: "console.log()"
    },
    {
        question: "Which keyword declares a constant in JS?",
        choices: ["var", "let", "static", "const"],
        answer: "const"
    },
    {
        question: "Which operator is used for strict equality?",
        choices: ["==", "===", "!=", "!=="],
        answer: "==="
    },
    {
        question: "React is a ____?",
        choices: ["Framework", "Library", "Programming language", "Compiler"],
        answer: "Library"
    },
    {
        question: "Which hook is used to manage state in React?",
        choices: ["useEffect", "useState", "useContext", "useRef"],
        answer: "useState"
    },
    {
        question: "Which command creates a new React app?",
        choices: ["npm start react", "npx create-react-app myApp", "react-create app", "npm init react"],
        answer: "npx create-react-app myApp"
    },
    {
        question: "Bootstrap is a ____?",
        choices: ["Backend framework", "CSS framework", "Database", "JavaScript library"],
        answer: "CSS framework"
    },
    {
        question: "Which class makes text bold in Bootstrap?",
        choices: ["fw-bold", "font-heavy", "bold-text", "txt-bold"],
        answer: "fw-bold"
    },
    {
        question: "Which Git command initializes a repository?",
        choices: ["git start", "git init", "git begin", "git create"],
        answer: "git init"
    },
    {
        question: "Which Git command is used to upload code to GitHub?",
        choices: ["git commit", "git push", "git upload", "git save"],
        answer: "git push"
    },
    {
        question: "Which JS method converts JSON to an object?",
        choices: ["JSON.parse()", "JSON.toObject()", "parse.JSON()", "object.JSON()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which React hook runs after every render?",
        choices: ["useState", "useRender", "useEffect", "useMemo"],
        answer: "useEffect"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        choices: ["#", "//", "/*", "--"],
        answer: "//"
    },
    {
        question: "Which HTML element is used for the largest heading?",
        choices: ["<h6>", "<h3>", "<heading>", "<h1>"],
        answer: "<h1>"
    },
    {
        question: "What is the default display of a <div>?",
        choices: ["inline", "block", "inline-block", "flex"],
        answer: "block"
    },
    {
        question: "Which Bootstrap class creates a button?",
        choices: ["btn", "button", "btn-default", "button-primary"],
        answer: "btn"
    },
    {
        question: "Which CSS unit is relative to the root font size?",
        choices: ["px", "em", "rem", "%"],
        answer: "rem"
    },
    {
        question: "React components must start with _____?",
        choices: ["lowercase letter", "uppercase letter", "number", "underscore"],
        answer: "uppercase letter"
    },
    {
        question: "Which flexbox property centers items horizontally?",
        choices: ["align-items", "justify-content", "center-items", "flex-center"],
        answer: "justify-content"
    },
    {
        question: "Which tag is used for JavaScript external file?",
        choices: ["<script src='...'>", "<javascript src='...'>", "<js link='...'>", "<file js='...'>"],
        answer: "<script src='...'>"
    }
];

// TIMER
var timeleft = 120;
var countDownElement = document.getElementById("count-down");

function startCountDown() {
    var timer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(timer);
            showScores();
        } else {
            countDownElement.innerText = "Time Left: " + timeleft + " Seconds";
            timeleft--;
        }
    }, 1000);
}
startCountDown();

// QUIZ VARIABLES
var currentQuestionIndex = 0;
var score = 0;

// DISPLAY QUESTION
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showScores();
        return;
    }

    var currentQuestion = questions[currentQuestionIndex];

    document.getElementById("questions").innerText = currentQuestion.question;

    // OPTIONS
    for (let i = 0; i < 4; i++) {
        let btn = document.getElementById("btn" + i);
        btn.classList.remove("selected", "disabled");
        btn.innerText = currentQuestion.choices[i];

        btn.onclick = function () {
            selectOption(btn, currentQuestion.choices[i]);
        };
    }

    document.getElementById("progress").innerText =
        "Question " + (currentQuestionIndex + 1) + " of " + questions.length;
}

// HIGHLIGHT SELECTION
function selectOption(button, answer) {
    let allBtns = document.querySelectorAll(".option");

    allBtns.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    setTimeout(() => {
        checkAnswer(answer);
    }, 300);
}

// CHECK ANSWER
function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    displayQuestion();
}

// END QUIZ
function showScores() {
    document.querySelector(".card").innerHTML = `
        <h2 class="text-center fw-bold text-success">Quiz Completed</h2>
        <h3 class="text-center mb-4">Your Score: ${score} / ${questions.length}</h3>
        <div class="text-center">
            <a href="index.html" class="btn btn-primary px-4 py-2">Play Again</a>
        </div>
    `;
}

// START QUIZ
displayQuestion();
