import readlineSync from 'readline-sync';
//
const getAnswer = (text) => {
  const answer = readlineSync.question(text);
  return answer;
};

export default getAnswer;
