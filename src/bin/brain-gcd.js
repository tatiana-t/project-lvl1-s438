#!/usr/bin/env node
import welcome from '../games/modules/welcome';
import getName from '../games/modules/getName';
import gameOver from '../games/modules/gameOver';
import ROUND_AMOUNT from '../games/modules/rounds';
import gcdGame from '../games/brain-gcd';

welcome('Find the greatest common divisor of given numbers.');
const name = getName();
const result = gcdGame(ROUND_AMOUNT);
// console.log('result', result);
gameOver(result.win, result.answer, result.correctAnswer, name);
