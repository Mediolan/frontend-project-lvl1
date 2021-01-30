import { generateRandomNumber, gameEngine } from '../index.js';

const makeQuestions = (roundsCount = 3) => {
  const possibleOperators = '+-*';
  const settings = {
    rounds: [],
    rules: 'What is the result of the expression?',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomOperator = possibleOperators[generateRandomNumber(0, possibleOperators.length)];
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    switch (randomOperator) {
      case '+':
        settings.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: randomNumber1 + randomNumber2,
        };
        break;
      case '-':
        settings.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: randomNumber1 - randomNumber2,
        };
        break;
      case '*':
        settings.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: randomNumber1 * randomNumber2,
        };
        break;
      default:
    }
  }
  return settings;
};
const playCalculator = () => {
  gameEngine(makeQuestions);
};

export default playCalculator;
