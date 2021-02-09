import gameEngine from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const makeGameSettings = (roundsCount) => {
  const possibleOperators = '+-*';
  const settings = {
    rounds: [],
    rule: 'What is the result of the expression?',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomOperator = possibleOperators[generateRandomNumber(0, possibleOperators.length - 1)];
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    switch (randomOperator) {
      case '+':
        settings.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: (randomNumber1 + randomNumber2).toString(),
        };
        break;
      case '-':
        settings.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: (randomNumber1 - randomNumber2).toString(),
        };
        break;
      case '*':
        settings.rounds[i] = {
          question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
          answer: (randomNumber1 * randomNumber2).toString(),
        };
        break;
      default:
    }
  }
  return settings;
};
const playCalculator = () => {
  gameEngine(makeGameSettings);
};

export default playCalculator;
