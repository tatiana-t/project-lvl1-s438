/*
   0. количество раундов
   1. приветствие
   2. правила*
   3. знакомство
   4. вопрос*
     4.1 проверка - правильный ответ*
   5. ответ
   4. результат

   * - нужны данные конкретной игры
*/

import readlineSync from 'readline-sync';

const ROUND_AMOUNT = 3;
const game = (rules, generateQuestion, checkAnswer) => {
  // приветствие, правила
  console.log(`Welcome to the Brain Games!\n${rules}`);

  // знакомство, запись имени
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}`);

  const round = (level) => {
    if (level <= 0) {
      // завершение игры - победа
      console.log(`Congratulations, ${name}!`);
      return;
    }
    // если раунд больше 0 - продолжаем игру

    // задать вопрос
    const question = generateQuestion();
    const answer = readlineSync.question(`Question: ${question}\n`).toLowerCase();
    const correctAnswer = checkAnswer(question);

    // вывод конечного результата
    if (answer === correctAnswer) {
      console.log('Correct!');
      round(level - 1);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
  };

  // вызов игры
  round(ROUND_AMOUNT);
};

export default game;
