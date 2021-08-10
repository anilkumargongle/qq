const quizDB = [{
        question: "Q1: HTML stands for?",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3"
    },
    {
        question: "Q2: The correct sequence of HTML tags for starting a webpage is ?",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Body, Title",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following element is responsible for making the text bold in HTML ?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "ans4"
    },
    {
        question: "Q4: Which of the following tag is used to insert a line-break in HTML ?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    },
    {
        question: "Q5: Which of the following tag is used for inserting the largest heading in HTML ?",
        a: "<h3>",
        b: "<h5>",
        c: "<h6>",
        d: "<h1>",
        ans: "ans4"
    },
    {
        question: "Q6: How to create an unordered list (a list with the list items in bullets) in HTML ?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<i>",
        ans: "ans1"
    },
    {
        question: "Q7: Which character is used to represent the closing of a tag in HTML ?",
        a: " '' ",
        b: "!",
        c: "/",
        d: ".",
        ans: "ans3"
    },
    {
        question: "Q8: How to create an ordered list (a list with the list items in numbers) in HTML ?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<i>",
        ans: "ans2"
    },
    {
        question: "Q9: Which of the following element is responsible for making the text italic in HTML ?",
        a: "<i>",
        b: "<italic>",
        c: "<it>",
        d: "<pre>",
        ans: "ans1"
    },
    {
        question: "Q10: <input> is - ?",
        a: "a format tag.",
        b: "an empty tag.",
        c: "All of the above",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q11: Which of the following tag is used to make the underlined text ?",
        a: "<i>",
        b: "<ul>",
        c: "<u>",
        d: "<pre>",
        ans: "ans3"
    },
    {
        question: "Q12: Which of the following tag is used to define options in a drop-down selection list ?",
        a: "<select>",
        b: "<list>",
        c: "<dropdown>",
        d: "<option>",
        ans: "ans4"
    },
    {
        question: "Q13:  HTML tags are enclosed in- ?",
        a: "# and #",
        b: "{ and }",
        c: "! and ?",
        d: "< and >",
        ans: "ans4"
    },
    {
        question: "Q14: Which of the following tag is used to add rows in the table ?",
        a: "<td> and </td>",
        b: "<th> and </th>",
        c: "<tr> and </tr>",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q15: The <hr> tag in HTML is used for ?",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        ans: "ans4"
    },
    {
        question: "Q16: Which of the following attribute is used to provide a unique name to an element ?",
        a: "class",
        b: "id",
        c: "type",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q17: Which of the following HTML tag is used to display the text with scrolling effect ?",
        a: "<marquee>",
        b: "<scroll>",
        c: "<div>",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q18: Which of the following HTML tag is the special formatting tag ?",
        a: "<p>",
        b: "<b>",
        c: "<pre>",
        d: "None of the abov",
        ans: "ans3"
    },
    {
        question: "Q19: Which of the following is the container for <tr>, <th>, and <td> ?",
        a: "<data>",
        b: "<table>",
        c: "<group>",
        d: "All of the above",
        ans: "ans2"
    },
    {
        question: "Q20: What are the types of unordered or bulleted list in HTML ?",
        a: "disc, square, triangle",
        b: "polygon, triangle, circle",
        c: "disc, circle, square",
        d: "All of the above",
        ans: "ans3"
    },
    {
        question: "Q21: Which of the following HTML attribute is used to define inline styles ?",
        a: "style",
        b: "type",
        c: "class",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q22: Which of the following is the paragraph tag in HTML ?",
        a: "<p>>",
        b: "<b>",
        c: "<pre>",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q23: An HTML program is saved by using the ____ extension ?",
        a: ".ht>",
        b: ".html",
        c: ".hml",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q24: A program in HTML can be rendered and read by - ?",
        a: "Web browser",
        b: "Server",
        c: "Interpreter",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q25: The tags in HTML are - ?",
        a: "case-sensitive",
        b: "in upper case",
        c: "not case sensitive",
        d: "in lowercase",
        ans: "ans3"
    },
    {
        question: "Q26: Which of the following is the root tag of the HTML document ?",
        a: "<body>",
        b: "<head>",
        c: "<title>",
        d: "<html>",
        ans: "ans4"
    },
    {
        question: "Q27: In HTML5, which of the following tag is used to initialize the document type ?",
        a: "<Doctype HTML>",
        b: "<\Doctype html>",
        c: "<Doctype>",
        d: "<!DOCTYPE html>",
        ans: "ans4"
    },
    {
        question: "Q28: Which of the following are the attributes of the tag ?",
        a: "method",
        b: "action",
        c: "Both (a) & (b)",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q29: Which is the correct way to comment out something in HTML ?",
        a: "Using ## and #",
        b: "Using <!-- and -->",
        c: "Using </-- and -/->",
        d: "Using <!-- and -!>",
        ans: "ans2"
    },
    {
        question: "Q30: Which HTML tag is used to display the power in expression, i.e., (x2 - y2) ?",
        a: "<sup>>",
        b: "<sub>",
        c: "<p>",
        d: "None of the above",
        ans: "ans1"
    }


];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Agian</button>
        `;

        showScore.classList.remove('socreArea');
    }
});