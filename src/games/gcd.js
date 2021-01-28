import { generateRandomNumber, gameEngine } from '../index.js';

const findHighestDevider = (num1, num2) => {
  let devider = (num1 > num2 ? num2 : num1);
  while ((num1 % devider !== 0) || (num2 % devider !== 0)) {
    devider -= 1;
  }
  return devider;
};

const makeQuestions = () => {
  const setting = { rounds: [] };
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    setting.rounds[i] = {
      question: `${randomNumber1} ${randomNumber2}`,
      answer: findHighestDevider(randomNumber1, randomNumber2),
    };
  }
  setting.rules = 'Find the greatest common divisor of given numbers.';
  return setting;
};

const playGCD = () => {
  gameEngine(makeQuestions);
};

export default playGCD;
