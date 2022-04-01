const thirdAngle = require("./algo1");

test("should return 60", () => {
  expect(thirdAngle(90, 30)).toBe(60);
});

test("should return 60", () => {
  expect(thirdAngle(20, 80)).toBe(80);
});
