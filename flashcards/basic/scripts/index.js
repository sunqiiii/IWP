class flashcards {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let q = document.getElementById("q");
let a = document.getElementById("a");
let quiz = [];

quiz.push(new flashcards('What is 3+5?', 'more than six?'));
quiz.push(new flashcards('What color is the sky?', 'blue'));
quiz.push(new flashcards('Is ice cold?', 'yes'));

let i = 0
document.getElementById('q').onclick = function() {
  a.innerHTML = quiz[i].answer;
}

function previous() {
  while (i < quiz.length) {
    q.innerHTML= quiz[i].question;
    a.innerHTML= "";
  } i = i + 1;
}

function next() {
  while (i < quiz.length) {
    q.innerHTML= quiz[i].question;
    a.innerHTML= "";
  } i = i + 1;
}
