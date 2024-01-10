const plainTextAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let cipherTextAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function shiftArray(shift) {
  if (shift > 0) {
    for (let i = 0; i < shift; i++) {
      const first = cipherTextAlphabet.shift();
      cipherTextAlphabet.push(first);
    }
  } else {
    for (let i = 0; i < -1 * shift; i++) {
      const last = cipherTextAlphabet.pop();
      cipherTextAlphabet.unshift(last);
    }
  }
}

function getIndexes(str) {
  const strArr = str.split("");
  return strArr.map((char) => plainTextAlphabet.indexOf(char.toLowerCase()));
}

export default function caesarCipher(str, shift) {
  cipherTextAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  shiftArray(shift);
  const indexes = getIndexes(str);
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    if (indexes[i] !== -1) {
      cipher += str[i].match(/[A-Z]/)
        ? cipherTextAlphabet[indexes[i]].toUpperCase()
        : cipherTextAlphabet[indexes[i]];
    } else {
      cipher += str[i];
    }
  }
  return cipher;
}
