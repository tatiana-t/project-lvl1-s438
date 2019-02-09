/*
   0. количество раундов
   1. приветствие
   2. правила*
   3. знакомство
   4. вопрос*
     4.1 проверка*
   5. ответ
   4. результат

   * - нужны данные конкретной игры
*/

import readlineSync from 'readline-sync';

const ROUND_AMOUNT = 3;

const intro = (description) => {
  //разное для каждой игры
  console.log(`Welcome to the Brain Games!\n${description}`);
};

const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const question = () => {
  //разное для каждой игры
};

const answer = (question) => {
  const answer = readlineSync.question(`Question: ${question}`);
  return answer;
};

const checkAnswer = (answer) => {
  //разное для каждой игры
};



const response = (win, answer, correctAnswer, name) => {
  // console.log(win, answer, correctAnswer, name);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};
