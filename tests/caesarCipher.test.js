import caesarCipher from '../scripts/caesarCipher.js'

test('shifts a lowercase word', () => 
    expect(caesarCipher('abc', 3)).toBe('def')
);