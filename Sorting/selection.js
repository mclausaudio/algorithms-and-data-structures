// Implement a selection sort.  O(n^2)
// [3, 9, 5, 1, 8, 2, 65, 1, 0, 64, 1098, 2, 6, 11]

function selectionSort(array) {
  if (!Array.isArray(array)){
    return "Please provide array"
  }
  if (array.length === 0) {
    return array;
  }
  
  for (let i = 0; i < array.length; i++) {
    let leastIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[leastIndex] > array[j]) {
        leastIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[leastIndex];
    array[leastIndex] = temp;
  }
  return array;
}

console.log( selectionSort([3, 9, 5, 1, 8, 2, 65, 1, 0, 64, 1098, 2, 6, 11]) )
// => [ 0, 1, 1, 2, 2, 3, 5, 6, 8, 9, 11, 64, 65, 1098 ]
console.log( selectionSort([]) )
// => []