const { add, subtract } = require('./calculator')

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 13 - 8 to equal 5', () => {
    expect(subtract(13, 8)).toBe(5);
});