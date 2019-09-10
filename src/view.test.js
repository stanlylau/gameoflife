const { parseBoard } = require("./view");

test("Parse game board", () => {
  expect(parseBoard(`x`)).toEqual([[0,0]]);
});
