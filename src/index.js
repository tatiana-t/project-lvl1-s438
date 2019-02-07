import readlineSync from 'readline-sync';

// const getAnswer = (text) => {
//   const answer = readlineSync.question(text);
//   return answer;
// };

// export default getAnswer;
const sayHello = () => {
  console.log('Welcome to the Brain Games!');

  const answer = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${answer}`);
}
export default sayHello;
