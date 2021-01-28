import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameEngine = (getSetting) => {
  const setting = getSetting();
  const playerName = greetings();
  const victory = `Congratulation, ${playerName}!`;
  const failure = `Let's try again, ${playerName}!`;
  console.log(setting.rules);
  for (let i = 0; i < setting.rounds.length; i += 1) {
    console.log(`Question: ${setting.rounds[i].question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== setting.rounds[i].answer.toString()) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${setting.rounds[i].answer}".`);
      return console.log(failure);
    }
    console.log('Correct!');
  }
  return console.log(victory);
};

export { generateRandomNumber, gameEngine };
