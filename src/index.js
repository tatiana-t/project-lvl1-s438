import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');

  const answer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${answer}`);
};
export default sayHello;
