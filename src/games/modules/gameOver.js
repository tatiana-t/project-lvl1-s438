const gameOver = (win, answer, correctAnswer, name) => {
  console.log(win, answer, correctAnswer, name);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};
export default gameOver;
