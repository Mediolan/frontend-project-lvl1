import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const makeSettigns = (roundsCount = 3) => {
  const settings = {
    rounds: [],
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = generateRandomNumber(0, 100);
    settings.rounds[i] = { question: randomNumber, answer: isEven(randomNumber) };
  }
  return settings;
};

const playIsEven = () => {
  gameEngine(makeSettigns);
};

export default playIsEven;
