const isLeapYear = require("./algo2");

test("should be true", () => {
  expect(isLeapYear(2000)).toBe(true);
  expect(isLeapYear(2004)).toBe(true);
  expect(isLeapYear(2020)).toBe(true);
});

test("should be false", () => {
  expect(isLeapYear(2019)).toBe(false);
  expect(isLeapYear(1900)).toBe(false);
  expect(isLeapYear(2018)).toBe(false);
});
