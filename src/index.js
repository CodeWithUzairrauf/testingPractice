import calculator from "./caculator"
import cipher from "./caesarCipher"
import analayzeArray from "./analayzeArray"

function capitalize(str) {
  if (!str) return ''; // handle empty or null strings
  return str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
  return str.split('').reverse().join('');
}

document.write(capitalize("hello" + " "));       
document.write(reverseString("hello"));    

calculator()
cipher()
analayzeArray()