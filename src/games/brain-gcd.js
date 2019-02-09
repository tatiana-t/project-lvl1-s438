import {
  cons,
  car,
  cdr,
} from 'hexlet-pairs';
import getAnswer from './modules/getAnswer';

// вычисление ответа
const getCorrectAnswer = (numbers) => {
  const a = +car(numbers);
  const b = +cdr(numbers);

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
      return
    }

    if (num % acc === 0) {
      divisors.push(acc);
      return count(num / acc, divisors, acc);
    } else {

      // console.log(acc + 1);
      return count(num, divisors, acc + 1);
    }
  }

  count(a, aDivisor, i);
  count(b, bDivisor, i);
console.log(aDivisor);
console.log(bDivisor);
  const checkArrays = () => {
    aDivisor.forEach((aItem) => {
      bDivisor.forEach((bItem) => {
        console.log(aItem, bItem);
        if (aItem === bItem) {

          resultArray.push(aItem);
        }
      })
    })
  };
checkArrays();

const result = resultArray.sort((a, b) => {
    if (a > b) return a;
    if (b > a) return b;
  });
  if (result.length === 0) {
    return 1
  } else {
    return result[result.length-1];
  }

};

const gcdGame = (rounds) => {
  let result = {};
  if (rounds <= 0) {
    result = {
      win: true
    };
  }
  // спросить и получить ответ
  const numbers = cons((Math.random() * 100).toFixed(), (Math.random() * 100).toFixed());

  console.log(`Question: ${car(numbers)} ${cdr(numbers)}`);
  const answer = getAnswer('Your answer: ');
  const correctAnswer = getCorrectAnswer(numbers);
  console.log(correctAnswer);
  // проверка ответа
  if (correctAnswer === +answer) {
    console.log('Correct!');
    gcdGame(rounds - 1);
  } else {
    result = {
      win: false,
      answer,
      correctAnswer,
    };
    // return result;
  }
  return result;
};
// calcGame(ROUND_AMOUNT);
export default gcdGame;
