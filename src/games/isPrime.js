import { generateRandomNumber, gameEngine } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeQuestions = (roundsCount = 3) => {
  const settings = {
    rounds: [],
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = generateRandomNumber(1, 120);
    settings.rounds[i] = { question: randomNumber, answer: isPrime(randomNumber) };
  }
  return settings;
};

const playIsPrime = () => {
  gameEngine(makeQuestions);
};

export default playIsPrime;
