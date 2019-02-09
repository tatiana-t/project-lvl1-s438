import game from '../core';

const PROGRESSION_LEHGTH = 10;

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';

  const generateQuestion = () => {
    const d = (Math.random() * 100).toFixed();
    const firstNum = (Math.random() * 10).toFixed();
    const space = (Math.random() * 10).toFixed();
    const createProgression = (i, progressionArray, num) => {
      if (i <= 0) {
        return progressionArray;
      }
      progressionArray.push(num);
      return createProgression(i - 1, progressionArray, +num + +d);
    };

    const progression = createProgression(PROGRESSION_LEHGTH, [], firstNum);
    progression[space] = '..';
    return progression.join(' ');
  };

  const checkAnswer = (question) => {
    const progression = question.split(' ');
    if (!Number.isNaN(+progression[progression.length - 1])
    && !Number.isNaN(+progression[progression.length - 2])) {
      const result = +progression[progression.length - 1] - +progression[progression.length - 2];
      return (result).toString();
    }
    return (+progression[progression.length - 3] - +progression[progression.length - 4]).toString();
  };

  game(rules, generateQuestion, checkAnswer);
};

export default progressionGame;
