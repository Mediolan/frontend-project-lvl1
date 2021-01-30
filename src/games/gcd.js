import { generateRandomNumber, gameEngine } from '../index.js';

const findHighestDevider = (num1, num2) => {
  let divider = (num1 > num2 ? num2 : num1);
  while ((num1 % divider !== 0) || (num2 % divider !== 0)) {
    divider -= 1;
  }
  return divider;
};

const makeQuestions = (roundsCount = 3) => {
  const settings = {
    rounds: [],
    rules: 'Find the greatest common divisor of given numbers.',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    settings.rounds[i] = {
      question: `${randomNumber1} ${randomNumber2}`,
      answer: findHighestDevider(randomNumber1, randomNumber2),
    };
  }
  return settings;
};

const playGCD = () => {
  gameEngine(makeQuestions);
};

export default playGCD;
