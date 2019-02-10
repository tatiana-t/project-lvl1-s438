import {
  cons,
  car,
  cdr,
} from 'hexlet-pairs';
import game from '../core';

const description = 'What is the result of the expression?';

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

const calcGame = () => game(description, generateQuestion, checkAnswer);


export default calcGame;
