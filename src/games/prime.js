import game from '../core';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => generateNum(0, 10);

const checkAnswer = (question) => {
  if (+question === 1 && +question === 2) {
    return 'yes'; // костыль?
  }
  const checkPrime = (num, i) => {
    if (+num % i === 0) {
      if (i === +num) {
        return 'yes';
      }
      return 'no';
    }
    return checkPrime(num, i + 1);
  };
  return checkPrime(question, 2);
};

const primeGame = () => game(description, generateQuestion, checkAnswer);

export default primeGame;
