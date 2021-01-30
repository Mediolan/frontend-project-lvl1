import { generateRandomNumber, gameEngine } from '../index.js';

const makeQuestions = (roundsCount = 3) => {
  const settings = {
    rounds: [],
    rules: 'What number is missing in the progression?',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const progressionLength = generateRandomNumber(5, 10);
    const startProgression = generateRandomNumber(1, 10);
    const arrayOfNum = [startProgression];
    const step = generateRandomNumber(2, 10);
    for (let j = 0; j < progressionLength; j += 1) {
      arrayOfNum.push(arrayOfNum[j] + step);
    }
    const randomPosition = generateRandomNumber(0, progressionLength);
    settings.rounds[i] = { answer: arrayOfNum[randomPosition] };
    arrayOfNum[randomPosition] = '..';
    settings.rounds[i].question = arrayOfNum.join(' ');
  }
  return settings;
};

const playProgression = () => {
  gameEngine(makeQuestions);
};

export default playProgression;
