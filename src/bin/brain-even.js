// #!/usr/bin/env node
// import welcome from '../games/modules/welcome';
// import getName from '../games/modules/getName';
// import gameOver from '../games/modules/gameOver';
// import ROUND_AMOUNT from '../games/modules/rounds';
import evenGame from '../games/brain-even';
const ROUND_AMOUNT = 3; // количество раундов
evenGame(ROUND_AMOUNT);

// шаг 5
// welcome('Answer "yes" if number even otherwise answer "no".');
// const name = getName();
// const result = evenGame(ROUND_AMOUNT);
// console.log('result', result);
// gameOver(result.win, result.answer, result.correctAnswer, name);
