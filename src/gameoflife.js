const game_of_life = list_of_positions => {
  list_of_positions.forEach((pos)=> {
    if (count_neighbours(pos, list_of_positions) == 2) {
    }
  });
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
