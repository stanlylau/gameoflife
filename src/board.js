function create_board(width, height) {
  const grid = Array(height);
  for (let i = 0; i < height; i++) {
    grid[i] = Array(width).fill(false);
  }
  return {
    get_neighbours: function(xy) {
      return [];
    },
    set_cell: function(xy, isAlive) {
      grid[xy[1]][xy[0]] = isAlive;
    }
  };
}

module.exports = { create_board };
