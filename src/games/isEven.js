import { generateRandomNumber, gameEngine } from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const makeQuestions = (roundsCount = 3) => {
  const settings = {
    rounds: [],
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = generateRandomNumber(0, 100);
    settings.rounds[i] = { question: randomNumber, answer: isEven(randomNumber) };
  }
  return settings;
};

const playIsEven = () => {
  gameEngine(makeQuestions);
};

export default playIsEven;
