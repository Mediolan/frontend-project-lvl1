import { generateRandomNumber, gameEngine } from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const makeQuestions = () => {
  const setting = { rounds: [] };
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber(0, 100);
    setting.rounds[i] = { question: randomNumber, answer: isEven(randomNumber) };
  }
  setting.rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return setting;
};

const playIsEven = () => {
  gameEngine(makeQuestions());
};

export default playIsEven;
