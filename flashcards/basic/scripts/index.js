class question {
  constructor (question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let quiz = [];
quiz.push(new question('What is 3+5?', 'more than six?'));
quiz.push(new question('What color is the sky?', 'blue'));
quiz.push(new question('Is ice cold?', 'yes'));

let i = 0;
while (i < quiz.length)  {
  console.log(quiz[i].question + ' ' + quiz[i].answer);
  ++i
}
