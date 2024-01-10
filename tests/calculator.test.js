import calculator from '../scripts/calculator.js';

test('adds two positive numbers', () => {
    const myCalculator = calculator();
    expect(myCalculator.add(5, 3)).toBe(8);
});

test('adds two negative numbers', () => {
    const myCalculator = calculator();
    expect(myCalculator.add(-4, -6)).toBe(-10);
});

test('subtracts two numbers', () => {
    const myCalculator = calculator();
    expect(myCalculator.sub(10, 5)).toBe(5);
});

test('divides two positive numbers', () => {
    const myCalculator = calculator();
    expect(myCalculator.div(10, 2)).toBeCloseTo(5);
});

test('divides and results in decimal', () => {
    const myCalculator = calculator();
    expect(myCalculator.div(7, 3)).toBeCloseTo(2.33);
});

test('multiplies two numbers', () => {
    const myCalculator = calculator();
    expect(myCalculator.mul(6, 7)).toBe(42);
});

test('divides two positive numbers', () => {
    const myCalculator = calculator();
    expect(myCalculator.div(10, 0)).toBe('Cannot divide by 0')
});