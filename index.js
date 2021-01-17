import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const validation = (playerAnswer, correctAnswer) => (playerAnswer === correctAnswer ? 'Correct' : 'Incorrect');

const playGame = (playerName) => {
  for (let i = 0; i < 3;) {
    const randomNumber = generateRandomNumber();
    const correctAnswer = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (validation(playerAnswer, correctAnswer) === 'Correct') {
      i += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
  console.log(`Congratulation, ${playerName}`);
};

export default playGame;
