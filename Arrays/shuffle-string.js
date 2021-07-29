// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Input: 
//  s =       "codeleet"
//  indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
//          01234567
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const restoreString = function(s, indices) {
    const answer = [];
    // Loop over array and create an index to letter map
    const letterMap = {};
    indices.forEach((num, i) => {
        letterMap[num] = s[i]
    });
    // Loop over array and push each indexes corresponding numbers
    for (let i = 0; i < indices.length; i++) {
        answer.push(letterMap[i]);
    };
    return answer.join('');
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]));
// => leetcode
console.log(restoreString('clheiam', [2,6,3,5,1,4,0]));
// => michael
console.log(restoreString('aiohn', [3,1,4,2,0]));
// => nihao
console.log(restoreString('ohal', [1,0,3,2]));
// => hola