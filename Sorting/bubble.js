// Implement a bubble sort.  O(n^2)

// [3, 9, 5, 1, 8, 2, 65, 1, 0, 64, 1098, 2, 6, 11]

function bubbleSort(array) {
    if (!Array.isArray(array)){
      return "Please provide array"
    }
    if (array.length === 0) {
      return array;
    }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const valueToSwap = array[j + 1];
        array[j + 1] = array[j];
        array[j] = valueToSwap;
      }
    }
  }

  return array;
}

console.log( bubbleSort([3, 9, 5, 1, 8, 2, 65, 1, 0, 64, 1098, 2, 6, 11]) )
// => [ 0,  1,  1, 2, 2, 3, 5, 6, 8, 9, 11, 64, 65, 1098 ]