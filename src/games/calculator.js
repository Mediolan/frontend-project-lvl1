import { generateRandomNumber, gameEngine } from '../index.js';

const makeQuestions = () => {
  const possibleOperators = '+-*';
  const setting = { rounds: [] };
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = possibleOperators[generateRandomNumber(0, possibleOperators.length)];
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    switch (randomOperator) {
      case '+':
        setting.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: randomNumber1 + randomNumber2,
        };
        break;
      case '-':
        setting.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: randomNumber1 - randomNumber2,
        };
        break;
      case '*':
        setting.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: randomNumber1 * randomNumber2,
        };
        break;
      default:
    }
  }
  setting.rules = 'What is the result of the expression?';
  return setting;
};
const playCalculator = () => {
  gameEngine(makeQuestions());
};

export default playCalculator;
