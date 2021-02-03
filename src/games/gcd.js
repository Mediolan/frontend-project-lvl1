import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const findGCD = (num1, num2) => {
  let divider = (num1 > num2 ? num2 : num1);
  while ((num1 % divider !== 0) || (num2 % divider !== 0)) {
    divider -= 1;
  }
  return divider;
};

const makeSettigns = (roundsCount) => {
  const settings = {
    rounds: [],
    rule: 'Find the greatest common divisor of given numbers.',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber1 = generateRandomNumber(1, 100);
    const randomNumber2 = generateRandomNumber(1, 100);
    settings.rounds[i] = {
      question: `${randomNumber1} ${randomNumber2}`,
      answer: findGCD(randomNumber1, randomNumber2).toString(),
    };
  }
  return settings;
};

const playGCD = () => {
  gameEngine(makeSettigns);
};

export default playGCD;
