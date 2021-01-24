import { generateRandomNumber, gameEngine } from '../index.js';

const possibleOperators = '+-*';

const questions = [];
const answersOnQuestions = [];

const makeQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = possibleOperators[generateRandomNumber(0, possibleOperators.length)];
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    switch (randomOperator) {
      case '+':
        questions.push(`${randomNumber1} ${randomOperator} ${randomNumber2}`);
        answersOnQuestions.push(randomNumber1 + randomNumber2);
        break;
      case '-':
        questions.push(`${randomNumber1} ${randomOperator} ${randomNumber2}`);
        answersOnQuestions.push(randomNumber1 - randomNumber2);
        break;
      case '*':
        questions.push(`${randomNumber1} ${randomOperator} ${randomNumber2}`);
        answersOnQuestions.push(randomNumber1 * randomNumber2);
        break;
      default:
    }
  }
};
const playCalculator = () => {
  makeQuestions();
  console.log('What is the result of the expression?');
  gameEngine(questions, answersOnQuestions);
};

export default playCalculator;
