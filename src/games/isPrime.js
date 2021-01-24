import { generateRandomNumber, gameEngine } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questions = [];
const answersOnQuestions = [];

const makeQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    questions.push(generateRandomNumber(1, 120));
    answersOnQuestions.push(isPrime(questions[i]));
  }
};

const playIsPrime = () => {
  makeQuestions();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameEngine(questions, answersOnQuestions);
};

export default playIsPrime;
