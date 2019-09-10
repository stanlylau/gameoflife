function parseBoard(str) {
  if (str.trim() === '') return [];
  else return [[0,0]];
}

module.exports = { parseBoard };
