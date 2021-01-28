import { generateRandomNumber, gameEngine } from '../index.js';

const makeQuestions = () => {
  const setting = { rounds: [] };
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = generateRandomNumber(5, 10);
    const startProgression = generateRandomNumber(1, 10);
    const arrayOfNum = [startProgression];
    const step = generateRandomNumber(2, 10);
    for (let j = 0; j < progressionLength; j += 1) {
      arrayOfNum.push(arrayOfNum[j] + step);
    }
    const randomPosition = generateRandomNumber(0, progressionLength);
    setting.rounds[i] = { answer: arrayOfNum[randomPosition] };
    arrayOfNum[randomPosition] = '..';
    setting.rounds[i].question = arrayOfNum.join(' ');
  }
  setting.rules = 'What number is missing in the progression?';
  return setting;
};

const playProgression = () => {
  gameEngine(makeQuestions);
};

export default playProgression;
