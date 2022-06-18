const quizData = [
    {
        question: "Elden Ring'de karşına çıkan ilk NPC kimdir?",
        a: "Millicent",
        b: "White Mask Varre",
        c: "Roderika",
        d: "Rya",
        correct: "b",
    },

    {
        question: "Geralt Of Rivia hangi Witcher okuluna gitmiştir?",
        a: "Kedi",
        b: "Aslan",
        c: "Kurt",
        d: "Ayı",
        correct: "c",
    },

    {
        question: "Çiftçi olmadan önce Cooper'ın işi neydi?",
        a: "Mühendis ve test pilotu",
        b: "Fizik profesörü",
        c: "Casus",
        d: "Öğretmen",
        correct: "a",
    },

    {
        question: "Fury filminin yönetmeni kimdir?",
        a: "Brad Pitt",
        b: "Don Collier",
        c: "Ethan Smith",
        d: "David Ayer",
        correct: "d",
    },

    {
        question: "Sherlock Holmes'un evinin kapı numarası nedir?",
        a: "221B",
        b: "220B",
        c: "221A",
        d: "222B",
        correct: "a",
    },

    {
        question: "Kratos'un babası kimdir?",
        a: "Odin",
        b: "Ares",
        c: "Zeus",
        d: "Poseidon",
        correct: "c",
    },

    {
        question: "Ford'un Ferrari'yi yenmesine kim yardım etti?",
        a: "John DeLorean",
        b: "Carroll Shelby",
        c: "Lee Iacocca",
        d: "Louis Chevrolet",
        correct: "b",
    },

    {
        question: "Hangisi Daenerys'in ejderhalarından biri değildir?",
        a: "Viserion",
        b: "Rhaegal",
        c: "Drogon",
        d: "Agheel",
        correct: "d",
    },

    {
        question: "Walter White'ın okuldaki branşı neydi?",
        a: "Biyoloji",
        b: "Fizik",
        c: "Kimya",
        d: "Matematik",
        correct: "c",
    },

];

const quiz = document.getElementById('quiz');
const answer = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()        
{
    selectAnswer();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function selectAnswer()    
{
    answer.forEach(answerQuestion => answerQuestion.checked = false)      
}

function selected()        
{
    let answerr

    answer.forEach(answerQuestion => 
        {
            if (answerQuestion.checked)
            {
                answerr = answerQuestion.id;
            }
        });
    
    return answerr;
}

btnSubmit.addEventListener('click', () =>  
{
    const answer = selected();

    if (answer)
    {
        if (answer === quizData[currentQuiz].correct)  
        {
            score++;    
        }
    }

    currentQuiz++;

    if (currentQuiz < quizData.length)
    {
        loadQuiz();
    }

    else
    {
        quiz.innerHTML = 
        `
            <h2>${score} / ${quizData.length} soruya doğru cevap verdin.</h2>

        `
    }
});