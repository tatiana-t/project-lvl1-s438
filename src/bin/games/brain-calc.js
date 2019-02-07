#!/usr/bin/env node

import {
  cons,
  car,
  cdr,
} from 'hexlet-pairs';

import getAnswer from '../../calc';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
const name = getAnswer('May I have your name? ');
console.log(`Hello, ${name}!\n`);


// вычисление ответа
const getCorrectAnswer = (numbers, operator) => {
  if (operator === '-') {
    return +car(numbers) - +cdr(numbers);
  }
  if (operator === '+') {
    return +car(numbers) + +cdr(numbers);
  }
  return +car(numbers) * +cdr(numbers);
};


const ROUND_AMOUNT = 3; // количество раундов
const calcGame = (rounds) => {
  if (rounds <= 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  // спросить и получить ответ
  const numbers = cons((Math.random() * 10).toFixed(), (Math.random() * 10).toFixed());
  const operators = ['+', '-', '*'];
  const getOperator = (operatorsArray) => {
    const i = (Math.random() * 2).toFixed();
    return operatorsArray[i];
  };
  const operator = getOperator(operators);
  // console.log(operator);
  console.log(`Question: ${car(numbers)} ${operator} ${cdr(numbers)}`);
  const answer = getAnswer('Your answer: ');
  const correctAnswer = getCorrectAnswer(numbers, operator);
  console.log(correctAnswer);
  // проверка ответа
  if (correctAnswer === +answer) {
    console.log('Correct!');
    calcGame(rounds - 1);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};
calcGame(ROUND_AMOUNT);
