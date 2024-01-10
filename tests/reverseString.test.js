import reverseString from '../scripts/reverseString.js';

test('empty string returns empty', () =>
    expect(reverseString('')).toBe('')
);

test('reverses a word', () =>
    expect(reverseString('word')).toBe('drow')
);

test('reverses a sentence', () =>
    expect(reverseString('hello world')).toBe('dlrow olleh')
);

test('reverses complex string', () => 
    expect(reverseString('a1b2c3! ')).toBe(' !3c2b1a')
);