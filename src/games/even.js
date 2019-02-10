import game from '../core';

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => (Math.random() * 100).toFixed();

const checkAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => game(description, generateQuestion, checkAnswer);

export default evenGame;
