const { count_neighbours, neighbours } = require("./countNeighbours");

const game_of_life = list_of_positions => {
  var result = [];
  if (list_of_positions != null) {
    list_of_positions.map(pos => {
      const count = count_neighbours(pos, list_of_positions);
      if (2 === count || 3 === count) {
        result.push(pos);
      }
      neighbours(pos).map((probably_dead)=>{
        if (3 === count_neighbours(probably_dead, list_of_positions)) {
          result.push(pos);
        }
      });
    });
  }

  return result;
};

module.exports = { game_of_life };
