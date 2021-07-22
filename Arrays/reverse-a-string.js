// Reverse a String (note: Most times, "string" challenges are actually array challenges)
// If "Hi My Name Is Michael" is passed in
// "leahciM sI emaN yM iH" is returned

function reverseStr(str) {
  // check the input first (make sure a number, undefined, etc. isn't being passed in accidentally)
  if (!str || typeof str !== "string") {
    return "A string wasn't passed in"
  }

  const reversedArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArr.push(str[i])
  }
  return reversedArr.join('')
}

const reverseStr2 = str => [...str].reverse().join("")

console.log( reverseStr("Good afternoon") )
console.log( reverseStr2("My name is Michael Claus") )