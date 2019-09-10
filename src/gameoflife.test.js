const { game_of_life, count_neighbours } = require("./gameoflife");

it("abc", () => {
  expect(1).toEqual(1);
});

describe("count neighbours", () => {
  it("empty", () => {
    expect("game").not.toBeUndefined();
    expect(count_neighbours()).toEqual(42);
  });
});

test.skip("Parse game board", () => {
  expect(`x`).toEqual("x");
});
