// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.

// Example 1:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// Example 3:
// Input: s = "MerryChristmas"
// Output: false

// Example 4:
// Input: s = "AbCdEfGh"
// Output: true

// https://leetcode.com/problems/determine-if-string-halves-are-alike

function halvesAreAlike(str) {
  // split string in half
  const middleIndex = str.length/2
  const firstHalf = str.substr(0, middleIndex).split('');
  const secondHalf = str.substr(middleIndex, str.length).split('');

  let firstHalfCount = vowelCounter(firstHalf);
  let secondHalfCount = vowelCounter(secondHalf);
  
  return firstHalfCount === secondHalfCount

  function vowelCounter(array){
    let totalCount = 0;
    const vowelMap = {
        a: true, 
        e: true, 
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true
      }
      // loop over letters
      array.forEach(letter => {
        // compare to map of vowels
        if (vowelMap[letter]) {
          // increment counter if includes
          totalCount++;
      }
    })
    return totalCount;
  }
}

console.log( halvesAreAlike("book") );
// => true
console.log( halvesAreAlike("textbook") );
// => false
console.log( halvesAreAlike("MerryChristmas") );
// => false
console.log( halvesAreAlike("AbCdEfGh") );
// => true