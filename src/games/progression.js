import { generateRandomNumber, gameEngine } from '../index.js';

const questions = [];
const answersOnQuestions = [];

const makeQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = generateRandomNumber(5, 10);
    const startProgression = generateRandomNumber(1, 10);
    const arrayOfNum = [startProgression];
    const step = generateRandomNumber(2, 6);
    for (let j = 0; j < progressionLength; j += 1) {
      arrayOfNum.push(arrayOfNum[j] + step);
    }
    const randomPosition = generateRandomNumber(0, progressionLength);
    answersOnQuestions.push(arrayOfNum[randomPosition]);
    arrayOfNum[randomPosition] = '..';
    questions.push(arrayOfNum.join(' '));
  }
};

const playProgression = () => {
  makeQuestions();
  console.log('What number is missing in the progression?');
  gameEngine(questions, answersOnQuestions);
};

export default playProgression;
