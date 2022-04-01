const sumArr = require("./algo6");

test("should be merged", () => {
  expect(sumArr(["1", "2", "3"], ["2", "4", "1"])).toEqual(["3", "6", "4"]);
  expect(sumArr(["2", "7", "3"], ["2", "4", "9"])).toEqual(["4", "11", "12"]);
  expect(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])).toEqual(["4", "11", "12", "8", "2"]);
  expect(sumArr(["2", "4", "9"], ["2", "7", "3", "8", "2"])).toEqual(["4", "11", "12", "8", "2"]);
});
