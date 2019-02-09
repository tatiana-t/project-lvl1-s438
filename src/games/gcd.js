import {
  cons,
  car,
  cdr,
} from 'hexlet-pairs';
import game from '../core';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const generateQuestion = () => {
    const numbers = cons((Math.random() * 10).toFixed(), (Math.random() * 10).toFixed());
    return `${car(numbers)} ${cdr(numbers)}`;
  };

  const checkAnswer = (question) => {
    const task = question.split(' ');
    const a = task[0];
    const b = task[1];

    const aDivisor = [];
    const bDivisor = [];
    const i = 2;
    const resultArray = [];
    const count = (num, divisors, acc) => {
      console.log(num, acc);
      if (acc > num) {
        return divisors;
      }
      if (num === 1) {
        divisors.push(acc);
        return divisors;
      }

      if (num % acc === 0) {
        divisors.push(acc);
        return count(num / acc, divisors, acc);
      }
      return count(num, divisors, acc + 1);
    };

    count(a, aDivisor, i);
    count(b, bDivisor, i);
    // console.log(aDivisor);
    // console.log(bDivisor);
    const checkArrays = () => {
      aDivisor.forEach((aItem) => {
        bDivisor.forEach((bItem) => {
          console.log(aItem, bItem);
          if (aItem === bItem) {
            resultArray.push(aItem);
          }
        });
      });
    };
    checkArrays();

    const result = resultArray.sort((x, y) => {
      if (x > y) return x;
      if (y > x) return y;
      return resultArray;
    });
    if (result.length === 0) {
      return (1).toString();
    }
    console.log('result ', result);
    return (result[result.length - 1]).toString();
  };

  game(rules, generateQuestion, checkAnswer);
};

export default gcdGame;
