const { count_neighbours } = require("./countNeighbours");

const game_of_life = list_of_positions => {
  if(list_of_positions != null){
      list_of_positions.map(item => console.log(item));
  }
};

// TODO: What Happens to Cell?

// TODO: Should Die

// TODO: Should Live

function parseBoard(str) {
  return str;
}

module.exports = { game_of_life };
