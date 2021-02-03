import readlineSync from 'readline-sync';

const gameEngine = (getSettings) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const settings = getSettings();
  const victory = `Congratulations, ${playerName}!`;
  const failure = `Let's try again, ${playerName}!`;
  console.log(settings.rule);
  for (let i = 0; i < settings.rounds.length; i += 1) {
    console.log(`Question: ${settings.rounds[i].question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== settings.rounds[i].answer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${settings.rounds[i].answer}".`);
      return console.log(failure);
    }
    console.log('Correct!');
  }
  return console.log(victory);
};

export default gameEngine;
