//Declaration for the class child
//
class question {
// A constructor is a special function used to create an instance of the class
constructor(question, answer) {
this.question = question;
this.answer = answer;
// We will set this to true when answered correctly.
}
}
// Declare a new array
let quiz = [];
// Create three questions and push them onto the quiz array
quiz.push(new question('What is 3+5?', 'more than six?'));
quiz.push(new question('What color is the sky?', 'blue'));
quiz.push(new question('Is ice cold?', 'yes'));

// Loop through the array printing out the question and the answer
let i = 0;
while (i < quiz.length)  {
console.log(quiz[i].question + ' ' + quiz[i].answer);
++i
}
