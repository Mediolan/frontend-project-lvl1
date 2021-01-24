import { generateRandomNumber, gameEngine } from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const questions = [];
const answersOnQuestions = [];

const makeQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    questions.push(generateRandomNumber(0, 100));
    answersOnQuestions.push(isEven(questions[i]));
  }
};

const playIsEven = () => {
  makeQuestions();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameEngine(questions, answersOnQuestions);
};

export default playIsEven;
