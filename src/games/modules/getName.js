import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default getName;
