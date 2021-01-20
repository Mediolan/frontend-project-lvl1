import { generateRandomNumber, gameEngine } from '../src/index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playIsEven = () => {
  const questions = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];
  const correctAnswers = [isEven(questions[0]), isEven(questions[1]), isEven(questions[2])];
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameEngine(questions, correctAnswers);
};

export default playIsEven;
