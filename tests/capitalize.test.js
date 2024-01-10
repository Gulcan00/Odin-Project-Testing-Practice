import capitalize from '../scripts/capitalize.js';

test('empty string returns empty', () => 
    expect(capitalize('')).toBe('')
);

test('single char gets capitalized', () => 
    expect(capitalize('a')).toBe('A')
);

test('first char of word capitalized', () =>
    expect(capitalize('word')).toBe('Word')
);

test('capitalize first char of sentence', () => 
    expect(capitalize('this is a test.')).toBe('This is a test.')
);

test('numerical string unchanged', () => 
    expect(capitalize('1234')).toBe('1234')
);

test('leading whitespace preserved', () =>
    expect(capitalize(' leading whitespace')).toBe(' leading whitespace')
);

test('only first char of mixed case changed', () =>
    expect(capitalize('miXed CaSe')).toBe('MiXed CaSe')
);

test('number input returns invalid input', () =>
    expect(capitalize(1234)).toBe('Invalid input')
);