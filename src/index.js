
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
  return matrix.reduce((acc, val, i) => {
      if (i % 2 !== 0) val.reverse();
      return acc.concat(val);
  }, []);
}
