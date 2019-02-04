import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const getName = readlineSync.question('May I have your name?: ');

const helloName = (name) => {

  return console.log('Hello, ' + name + '!');
}
helloName(getName);

export default helloName
