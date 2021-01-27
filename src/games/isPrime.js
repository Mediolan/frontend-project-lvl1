import { generateRandomNumber, gameEngine } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeQuestions = () => {
  const setting = { rounds: [] };
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber(1, 120);
    setting.rounds[i] = { question: randomNumber, answer: isPrime(randomNumber) };
  }
  setting.rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return setting;
};

const playIsPrime = () => {
  gameEngine(makeQuestions());
};

export default playIsPrime;
