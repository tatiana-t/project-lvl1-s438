import game from '../core';
import generateNum from '../utils';

const progressionLength = 10;
const description = 'What number is missing in the progression?';

const generateQuestion = () => {
  const space = generateNum(0, 10);
  const d = generateNum(0, 100);
  const firstNum = generateNum(0, 10);

  const progressionArray = [];
  progressionArray.push(firstNum);

  for (let i = 1; i < progressionLength + 1; i++) {
    progressionArray.push(+firstNum + +d * i);
  }
  progressionArray[space] = '..';
  return progressionArray.join(' ');
};

const findFirst = (progression) => {
  if (progression[0] !== '..') {
    return +progression[0];
  }
  return null;
};

const findD = (progression, first) => {
  if (progression[0] !== '..' && progression[1] !== '..') {
    return +progression[1] - +progression[0];
  }
  return +progression[3] - +progression[2];
};

const findSpace = (progression) => {
  for (let i = 0; i < progression.length; i++) {
    if (progression[i] === '..') {
      return i;
    }
  }
};

const checkAnswer = (question) => {
  const progression = question.split(' ');
  const first = findFirst(progression);
  const d = findD(progression, first);
  const space = findSpace(progression);
  if (first) {
   return (first + d * space).toString();
  }
  return (+progression[1] - d).toString();
};

const progressionGame = () => game(description, generateQuestion, checkAnswer);

export default progressionGame;
