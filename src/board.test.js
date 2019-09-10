const board = require("./board");

describe("board", () => {
  it("should return neighbours", () => {
    let b = board.create_board();
    expect(b.count_neighbours()).toEqual(undefined);
  });
});
