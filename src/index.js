import readlineSync from 'readline-sync';

const helloName = (name) => {
  name = readlineSync.question('May I have your name?: ');
  return console.log('Hello, ' + name + '!');
}

export default helloName
