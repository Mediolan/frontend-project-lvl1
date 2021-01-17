#!/usr/bin/env node
import playGame from '../index.js';
import greetings from '../src/cli.js';

const playerName = greetings();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

playGame(playerName);
