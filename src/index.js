import readlineSync from 'readline-sync';
import playerName from './cli.js';

const generateRandomNumber = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;

const victory = `Congratulation, ${playerName}!`;
const failure = `Let's try again, ${playerName}!`;

const gameEngine = (gameQuestions, correctAnswers) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${gameQuestions[i]}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswers[i]) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswers[i]}".`);
      return console.log(failure);
    }
    console.log('Correct!');
  }
  return console.log(victory);
};

export { generateRandomNumber, gameEngine };
