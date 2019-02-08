import getAnswer from './modules/getAnswer';

// const ROUND_AMOUNT = 3; // количество раундов

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const name = getAnswer('May I have your name? ');
console.log(`Hello, ${name}!\n`);


// проверка ответа
const checkAnswer = (number, answer) => {
  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    return true;
  }
  return false;
};

// игра
const evenGame = (rounds) => {
  if (rounds <= 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  // спросить и получить ответ
  const number = (Math.random() * 100).toFixed();
  console.log(`Question: ${number}`);
  const answer = getAnswer('Your answer: ').toLowerCase();
  const result = checkAnswer(number, answer);

  // проверка ответа
  if (result) {
    console.log('Correct!');
    evenGame(rounds - 1);
  } else {
    let correctAnswer = '';
    if (answer === 'yes') {
      correctAnswer = 'no';
    } else {
      correctAnswer = 'yes';
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};
// evenGame(ROUND_AMOUNT);


// шаг 5
// // проверка ответа
// const checkAnswer = (number, answer) => {
//   if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
//     return true;
//   }
//   return false;
// };
//
// // игра
// const evenGame = (rounds) => {
//   // let result = {};
//   if (rounds <= 0) {
//     // console.log(`Congratulations, ${name}!`);
//
//     const result = {win: true};
//     console.log('win', result);
//     return result;
//   }
//   // спросить и получить ответ
//   const number = (Math.random() * 100).toFixed();
//   console.log(`Question: ${number}`);
//   const answer = getAnswer('Your answer: ').toLowerCase();
//   // const result = checkAnswer(number, answer);
//
//   // проверка ответа
//   if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
//     console.log('Correct!');
//     evenGame(rounds - 1);
//   } else {
//     let correctAnswer = '';
//     if (answer === 'yes') {
//       correctAnswer = 'no';
//     } else {
//       correctAnswer = 'yes';
//     }
//     const result = {win: false, answer: answer, correctAnswer: correctAnswer};
//     // console.log('error', result);
//     return result;
//     // console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
//   }
// };
export default evenGame;
