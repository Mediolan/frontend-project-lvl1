import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameEngine = (getSettings) => {
  const settings = getSettings();
  const playerName = greetings();
  const victory = `Congratulation, ${playerName}!`;
  const failure = `Let's try again, ${playerName}!`;
  console.log(settings.rules);
  for (let i = 0; i < settings.rounds.length; i += 1) {
    console.log(`Question: ${settings.rounds[i].question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== settings.rounds[i].answer.toString()) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${settings.rounds[i].answer}".`);
      return console.log(failure);
    }
    console.log('Correct!');
  }
  return console.log(victory);
};

export { generateRandomNumber, gameEngine };
