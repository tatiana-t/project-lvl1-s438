import game from '../core';

const progresionLength = 10;
const description = 'What number is missing in the progression?';

const generateQuestion = () => {
  const space = +(Math.random() * 10).toFixed();
  const d = (Math.random() * 100).toFixed();
  const firstNum = (Math.random() * 10).toFixed();
  const i = 0;

  const progressionArray = [];
  progressionArray.push(firstNum);

  for (let i = 1; i < progresionLength + 1; i++) {
    progressionArray.push(+firstNum + +d * i);
  }
  progressionArray[space] = '..';
  return progressionArray.join(' ');

// const generateProgression = (i, d, firstNum) => {
//
// }


};

const checkAnswer = (question) => {
  const progression = question.split(' ');
  let space; // пропущенный элемент
  let d;
  //узнать какой элемент пропущен
  for (let i = 0; i < progression.length; i++) {
    if (space && d) {
      break;
    }
    if (progression[i] === '..') {
      space = i;
    } else {
      if (progression[i + 1] !== '..') {
        d = +progression[i + 1] - +progression[i];
        // console.log(+progression[i + 2], +progression[i + 1]);

      }
    }
  }

  // console.log(+progression[0], d, space);
  return (+progression[0] + d * space).toString();
};

const progressionGame = () => game(description, generateQuestion, checkAnswer);

export default progressionGame;
