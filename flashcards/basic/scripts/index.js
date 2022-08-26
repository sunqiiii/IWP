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
document.getElementById('show1').onclick = function(){
  q.innerHTML = quiz[i].question;
}
document.getElementById('q').onclick = function() {
  a.innerHTML = quiz[i].answer;
}

function previous() {
    if (i > 0) {
     i = i - 1;
  }
  else if (i === 0) {
    i = quiz.length - 1;
  }
  q.innerHTML = quiz[i].question;
  a.innerHTML = " ";
}

function next() {
  if (i < quiz.length - 1) {
    i = i + 1;
  }
  else if (i === quiz.length - 1) {
    i = 0
  }
  q.innerHTML = quiz[i].question;
  a.innerHTML = " ";
}
