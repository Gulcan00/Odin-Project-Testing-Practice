import caesarCipher from "../scripts/caesarCipher.js";

test("wraps from z to a with lowercase", () =>
  expect(caesarCipher("xyz", 3)).toBe("abc"));

test("shifts a lowercase word", () =>
  expect(caesarCipher("abc", 3)).toBe("def"));

test("preserves punctuation and spaces", () =>
  expect(caesarCipher("Hello, world!", 5)).toBe("Mjqqt, btwqi!"));

test("shifts with negative shift factor", () =>
  expect(caesarCipher("def", -3)).toBe("abc"));
