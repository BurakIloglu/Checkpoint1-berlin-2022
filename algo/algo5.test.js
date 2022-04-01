const getPoints = require("./algo5");

const scores = ["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"];

test("should return 12", () => {
  expect(getPoints(scores)).toBe(12);
});
