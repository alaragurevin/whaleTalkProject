let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (i = 0; i < input.length; i++) {
  //console.log('i is ' + [i])
  if (input[i] === 'e') {
    resultArray.push('e')
  } else if (input[i] === 'u') {
    resultArray.push('u')
  }
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j])
    }
  }
}

resultString = resultArray.join("");
console.log(resultString.toUpperCase());