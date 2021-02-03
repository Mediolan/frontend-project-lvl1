import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const makeSettigns = (roundsCount) => {
  const settings = {
    rounds: [],
    rule: 'What number is missing in the progression?',
  };
  for (let i = 0; i < roundsCount; i += 1) {
    const progressionLength = generateRandomNumber(5, 10);
    const startProgression = generateRandomNumber(1, 10);
    const progression = [startProgression];
    const step = generateRandomNumber(2, 10);
    for (let j = 0; j < progressionLength; j += 1) {
      progression.push(progression[j] + step);
    }
    const randomPosition = generateRandomNumber(0, progressionLength);
    settings.rounds[i] = { answer: progression[randomPosition].toString() };
    progression[randomPosition] = '..';
    settings.rounds[i].question = progression.join(' ');
  }
  return settings;
};

const playProgression = () => {
  gameEngine(makeSettigns);
};

export default playProgression;
