const questions = [{
    "ques": "What is the name of Naruto's signature jutsu?",
    "a": "Rasengan",
    "b": "Chidori",
    "c": "Shadow Clone Technique",
    "d": "Amaterasu",
    "ans": "a"
},
{
    "ques": "Who is the leader of Akatsuki?",
    "a": "Madara Uchiha",
    "b": "Obito Uchiha",
    "c": "Pain (Nagato)",
    "d": "Sasuke Uchiha",
    "ans": "c"
},
{
    "ques": "Who was the founder of the Uchiha clan and one of the primary antagonists in Naruto?",
    "a": "Itachi Uchiha",
    "b": "Kakashi Hatake",
    "c": "Tobirama Senju",
    "d": "Madara Uchiha",
    "ans": "d"
},
{
    "ques": "Who are known as the Legendary Sannin?",
    "a": "Jiraiya, Orochimaru, Tsunade",
    "b": "Kakashi, Guy, Asuma",
    "c": "Sasuke, Naruto, Sakura",
    "d": "Itachi, Kisame, Deidara",
    "ans": "a"
},
{
    "ques": "Who is the creator of the Shadow Clone Technique in the Naruto series?",
    "a": "Kakashi Hatake",
    "b": "Minato Namikaze",
    "c": "Tobirama Senju",
    "d": "Jiraiya",
    "ans": "c"
}
]

// Variables
var ques_index = 0;
const question = document.getElementById("question");
const optionsArray = document.querySelectorAll(".optionSelector")
var right = 0, wrong = 0;
const len = questions.length;

// Functions
const nextQuestion = () => {

    if (ques_index === len) {
        endQuiz();
        return;
    }
    resetOptions();
    const data = questions[ques_index];

    question.innerText = `${ques_index + 1}. ${data.ques}`;
    optionsArray[0].nextElementSibling.innerText = data.a;
    optionsArray[1].nextElementSibling.innerText = data.b;
    optionsArray[2].nextElementSibling.innerText = data.c;
    optionsArray[3].nextElementSibling.innerText = data.d;

}

const submitAnswer = () => {

    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var value = radios.length > 0 ? radios[0].value : null;
    console.log(value);

    if (value == null) {
        alert("Please select an option")
    }

    else {
        const data = questions[ques_index];
        const correctAns = data.ans;

        const answer = getAnswer();

        // Checking if selected answer is correct
        if (answer == correctAns) {
            right++;
        } else {
            wrong++;
        }
        ques_index++;
        nextQuestion();
        return;
    }
}

const getAnswer = () => {

    let answer;
    optionsArray.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;

}

const resetOptions = () => {
    optionsArray.forEach(
        (input) => {
            input.checked = false;
        });
}

const endQuiz = () => {
    const quizBox = document.querySelector(".quiz_box");
    quizBox.innerHTML = `
        <h2>Thank you for playing Naruto quiz</h2>
        <h3>Your score: ${right} / ${len}</h3>
    `
}

// Initial call
nextQuestion();

// Final result
if (ques_index == len) {
    console.log(wrong);
    console.log(right);
}