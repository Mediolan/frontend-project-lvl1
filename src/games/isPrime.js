import gameEngine from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeSettigns = (roundsCount) => {
  const settings = {
    rounds: [],
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = generateRandomNumber(1, 120);
    const primeOrNot = (isPrime(randomNumber)) ? 'yes' : 'no';
    settings.rounds[i] = { question: randomNumber, answer: primeOrNot };
  }
  return settings;
};

const playIsPrime = () => {
  gameEngine(makeSettigns);
};

export default playIsPrime;
