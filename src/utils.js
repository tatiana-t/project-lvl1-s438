const generateNum = (start, end) => {
  return Math.round(start - 0.5 + Math.random() * (end - start + 1));
};

export default generateNum;
