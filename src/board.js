function create_board(width, height) {
  const grid = Array(height);
  for (let i = 0; i < height; i++) {
    grid[i] = Array(width);
  }
  return {
    get_neighbours: function(cell) {
      return [];
    }
  };
}

module.exports = { create_board };
