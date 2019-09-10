const board = require("./board");

describe("board", () => {
  it("should return neighbours", () => {
    let b = board.create_board();
    expect(b.get_neighbours()).toEqual(undefined);
  });
});
