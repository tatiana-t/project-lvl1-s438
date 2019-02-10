import {
  cons,
  car,
  cdr,
} from 'hexlet-pairs';
import game from '../core';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const numbers = cons(generateNum(0, 10), generateNum(0, 10));
  return `${car(numbers)} ${cdr(numbers)}`;
};

const parseQuestion = (str) => {
  const task = str.split(' ');
  const pair = cons(task[0], task[1]);
  return pair;
};

const setOrder = (a, b) => {
  if (a < b) {
    return cons(b, a);
  }
  return cons(a, b);
};


const gcd = (a, b) => {
  if (b > 0) {
    const revisor = a % b;
    return gcd(b, revisor);
  }
  return a;
};


const checkAnswer = (question) => {
  const pair = parseQuestion(question);
  const orderedPair = setOrder(car(pair), cdr(pair));
  const a = car(orderedPair);
  const b = cdr(orderedPair);
  const result = gcd(a, b).toString();
  return result;
};

const gcdGame = () => game(description, generateQuestion, checkAnswer);

export default gcdGame;
