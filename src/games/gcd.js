import { generateRandomNumber, gameEngine } from '../index.js';

const questions = [];
const answersOnQuestions = [];

const findHighestDevider = (num1, num2) => {
  let devider = (num1 > num2 ? num2 : num1);
  while ((num1 % devider !== 0) || (num2 % devider !== 0)) {
    devider -= 1;
  }
  return devider;
};

const makeQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateRandomNumber(0, 100);
    const randomNumber2 = generateRandomNumber(0, 100);
    questions.push(`${randomNumber1} ${randomNumber2}`);
    answersOnQuestions.push(findHighestDevider(randomNumber1, randomNumber2));
  }
};

const playGCD = () => {
  makeQuestions();
  console.log('Find the greatest common divisor of given numbers.');
  gameEngine(questions, answersOnQuestions);
};

export default playGCD;
