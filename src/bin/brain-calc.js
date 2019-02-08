#!/usr/bin/env node
import welcome from '../games/modules/welcome';
import getName from '../games/modules/getName';
import gameOver from '../games/modules/gameOver';
import ROUND_AMOUNT from '../games/modules/rounds';
import calcGame from '../games/brain-calc';

welcome('What is the result of the expression?');
const name = getName();
const result = calcGame(ROUND_AMOUNT);
// console.log('result', result);
gameOver(result.win, result.answer, result.correctAnswer, name);
