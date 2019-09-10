const { x, game_of_life, count_neighbours } = require("./gameoflife");

describe("count neighbours", () => {
  it("empty", () => {
    expect("game").not.toBeUndefined();
    //expect(count_neighbours()).toEqual(42);
  });
  it("given 3 cells", () => {
    let a_list_of_positions = [[1, 2], [3, 4], [5, 6]];
    game_of_life(a_list_of_positions);
  })
});

test.skip("Parse game board", () => {
  expect(`x`).toEqual("x");
});
