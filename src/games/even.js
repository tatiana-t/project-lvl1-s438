import game from '../core';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => generateNum(0, 100);

const checkAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => game(description, generateQuestion, checkAnswer);

export default evenGame;
