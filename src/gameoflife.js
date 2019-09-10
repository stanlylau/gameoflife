const { count_neighbours, neighbours } = require("./countNeighbours");

const game_of_life = list_of_positions => {
  var result = [];
  if (list_of_positions != null) {
    list_of_positions.map(pos => {
      if (2 === count_neighbours(pos, list_of_positions)) {
        result.push(pos);
      }
      if (3 === count_neighbours(pos, list_of_positions)) {
        result.push(pos);
      }
      neighbours().map(()=>{});;
    });
  }

  return result;
};

// TODO: What Happens to Cell?

// TODO: Should Die

// TODO: Should Live

module.exports = { game_of_life };
