var video = videojs('my-video').ready(function(){
    var player = this;
  
    player.on('ended', function() {
        const quiz = document.getElementsByClassName('quiz-container');
        quiz[0].style.display = 'block';
        const video = document.getElementsByClassName('video-js');
        video[0].style.display = 'none';
    });
  });

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
deselectAnswer();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
}

function deselectAnswer() {
answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
let answer;

answerEls.forEach(answerEl => {
    if(answerEl.checked) {
       answer = answerEl.id;
    }
});

return answer;
}

submitBtn.addEventListener('click', () => {
const answer = getSelected();

if(answer) {
    if(answer === quizData[currentQuiz].correct) {
        score++;
        Swal.fire('Betul!');
    }else{
        Swal.fire({title: 'Tak betul! Jawapan yang betul ialah' + quizData[currentQuiz][quizData[currentQuiz].correct],
         text: quizData[currentQuiz].explanation, width: '38rem', });
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    } else { 
        quiz.innerHTML = `
        <h2> Anda menjawab soalan ${score}/${quizData.length} dengan betul</h2>

        <button onclick="location.reload()">
        Reload
        </button>
        `
        const complete_course = document.getElementById('complete_course');
        complete_course.style.display = 'block';

    }
}
})
