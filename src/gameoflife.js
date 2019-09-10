

const game_of_life = list_of_positions => {
  var result = [];
  if(list_of_positions != null){
      list_of_positions.map(pos => {
        if( 2===count_neighbours(pos, list_of_positions)) {
          result.push(pos);
        }
        if( 3===count_neighbours(pos, list_of_positions)) {
          result.push(pos);
        }
      });
  }

  return result;
};

// TODO: What Happens to Cell?

// TODO: Should Die

// TODO: Should Live

function parseBoard(str) {
  return str;
}

module.exports = { game_of_life };
