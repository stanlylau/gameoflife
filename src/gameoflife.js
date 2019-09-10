const game_of_life = list_of_positions => {
  list_of_positions;
    if(list_of_positions != null){
        list_of_positions.map(item => console.log(item));
    }
};

function count_neighbours(thisCell, all_alive_positions) {
  for (p in all_alive_positions) {
  }
  return 42;
}

// TODO: What Happens to Cell?

// TODO: Should Die

// TODO: Should Live

function parseBoard(str) {
  return str;
}

module.exports = { game_of_life, count_neighbours };
