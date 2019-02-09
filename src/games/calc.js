import {
  cons,
  car,
  cdr,
} from 'hexlet-pairs';
import game from '../core';


const calcGame = () => {
  const rules = 'What is the result of the expression?';

  const generateQuestion = () => {
    const numbers = cons((Math.random() * 10).toFixed(), (Math.random() * 10).toFixed());
    const operators = ['+', '-', '*'];
    const getOperator = (operatorsArray) => {
      const i = (Math.random() * 2).toFixed();
      return operatorsArray[i];
    };
    const operator = getOperator(operators);
    return `${car(numbers)} ${operator} ${cdr(numbers)}`;
  };

  const checkAnswer = (question) => {
    const task = question.split(' ');

    if (task[1] === '+') {
      return (+task[0] + +task[2]).toString();
    }
    if (task[1] === '-') {
      return (+task[0] - +task[2]).toString();
    }
    return (+task[0] * +task[2]).toString();
  };

  game(rules, generateQuestion, checkAnswer);
};

export default calcGame;
//
// // вычисление ответа
// const correctAnswer = (numbers, operator) => {
//   if (operator === '-') {
//     return +car(numbers) - +cdr(numbers);
//   }
//   if (operator === '+') {
//     return +car(numbers) + +cdr(numbers);
//   }
//   return +car(numbers) * +cdr(numbers);
// };
//
//
// // const ROUND_AMOUNT = 3; // количество раундов
// const calcGame = (rounds) => {
//   let result = {};
//   if (rounds <= 0) {
//     // console.log(`Congratulations, ${name}!`);
//     result = {
//       win: true
//     };
//     // return result;
//   }
//   // спросить и получить ответ
//   const numbers = cons((Math.random() * 10).toFixed(), (Math.random() * 10).toFixed());
//   const operators = ['+', '-', '*'];
//   const getOperator = (operatorsArray) => {
//     const i = (Math.random() * 2).toFixed();
//     return operatorsArray[i];
//   };
//   const operator = getOperator(operators);
//   // console.log(operator);
//   console.log(`Question: ${car(numbers)} ${operator} ${cdr(numbers)}`);
//   const answer = getAnswer('Your answer: ');
//   const correctAnswer = getCorrectAnswer(numbers, operator);
//   console.log(correctAnswer);
//   // проверка ответа
//   if (correctAnswer === +answer) {
//     console.log('Correct!');
//     calcGame(rounds - 1);
//   } else {
//     result = {
//       win: false,
//       answer,
//       correctAnswer,
//     };
//     // return result;
//   }
//   return result;
// };
// // calcGame(ROUND_AMOUNT);
// export default calcGame;
