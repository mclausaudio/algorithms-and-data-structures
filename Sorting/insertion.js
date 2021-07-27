//  This sort is useful for times when you're pretty sure the list is almost sorted
//  Can be ineffecient, but can almost get O(n) when the list is already nearly sorted
//  Also performs well with small data sets

function insertion(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    if (array[i] < array[i-1]) {
      // lets remove array[i], save it to a variable, to insert somewhere
      let numberToInsert = array[i];
      array.splice(i, 1);
      //Let's loop over numbers in front of array[i-1] and find where we need to insert;
      for (let j = 0; j < i; j++) {
        if (numberToInsert < array[j]) {
          array.splice(j, 0, numberToInsert);
          break;
        }
      }
    }
  }
  return array;
}

const nums = [3, 2, 7, 4, 99, -2, 44, 321, 3, 3, 123, 6, 1, 0, -4, 34];

console.log(insertion(nums));
// => [ -4, -2, 0, 1, 2, 3, 3, 3, 4, 6, 7, 34, 44, 99, 123, 321 ]