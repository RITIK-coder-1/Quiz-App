let scoreNumber = 0 // it tracks the score
let optionChoosen = false // it looks if any of the options is chosen or not

// Selecting Elements -->

const options = document.getElementsByClassName("options")
const question = document.getElementById("question")
let score = document.getElementById("score")
const next = document.getElementById("next")

// Fetching API --->

const questionsData = fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple")
questionsData
.then(Response => Response.json())
.then(data => {
    console.log(data);
    const results = data.results[randomQuestion()]
    console.log(results);
    const questions = results.question
    console.log(questions);
    const correct = results.correct_answer
    console.log(correct);
    const incorrect = results.incorrect_answers
    console.log(incorrect);
    const answers = [correct, ...incorrect]
    console.log(answers);

    question.innerText = `${questions}`

    answers.sort(() => Math.random() - 0.5)
})

function randomQuestion() {
    return Math.floor(Math.random() * 10)
}
