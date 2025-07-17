function caesarCipher(str, shift) {
  return str
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

function shiftChar(char, shift) {
  if (isUpperCase(char)) {
    return shiftWithinRange(char, shift, 'A'.charCodeAt(0));
  } else if (isLowerCase(char)) {
    return shiftWithinRange(char, shift, 'a'.charCodeAt(0));
  } else {
    return char; 
  }
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function shiftWithinRange(char, shift, baseCode) {
  const offset = char.charCodeAt(0) - baseCode;
  const newOffset = (offset + shift) % 26;
  const wrappedOffset = newOffset < 0 ? newOffset + 26 : newOffset;
  return String.fromCharCode(baseCode + wrappedOffset);
}

console.log(caesarCipher('xyz', 3));          
console.log(caesarCipher('HeLLo', 3));        
console.log(caesarCipher('Hello, World!', 3)); 
console.log(caesarCipher('Zebra-123!', 1));    
console.log(caesarCipher('Attack at dawn!', -5)); 

