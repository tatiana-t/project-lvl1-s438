#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getAnswer = (text) => {
  const answer = readlineSync.question(text);
  return answer;
};
const ROUND_AMOUNT = 3; // количество раундов

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
evenGame(ROUND_AMOUNT);
