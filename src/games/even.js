import gameEngine from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const makeGameSettings = (roundsCount) => {
  const settings = {
    rounds: [],
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = generateRandomNumber(0, 100);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    settings.rounds[i] = { question: randomNumber, answer };
  }
  return settings;
};

const playIsEven = () => {
  gameEngine(makeGameSettings);
};

export default playIsEven;
