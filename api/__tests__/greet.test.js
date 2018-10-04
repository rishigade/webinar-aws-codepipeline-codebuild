const greet = require("../greet");

test('correct greeting is generated', () => {
  expect(greet.getLocalGreeting("en")).toBe("Hello!");
});
