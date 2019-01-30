let addition = require('./js/functions');

test('adds 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('adds 30 + 70 to equal 100', () => {
    expect(addition(30, 70)).toBe(100);
});

//fails on purpose
// test('adds 20 + 70 to equal 100', () => {
//    expect(addition(20, 70)).toBe(100);
//  });