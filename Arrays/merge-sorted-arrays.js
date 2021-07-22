// Merge two sorted arrays, into one sorted array
// example mergeSortedArrays( [0, 3, 4, 31], [4, 6, 30] )
// => [ 0, 3, 4, 4, 6, 30, 31 ]


function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];
  // check the input
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Provide 2 arrays"
  }
  if (arr1.length === 0 && arr2.length > 0) {
    return arr2;
  }
  if (arr2.length === 0 & arr1.length > 0) {
    return arr1;
  }

  let i = 0;
  let j = 0;
  let item1 = arr1[i];
  let item2 = arr2[j];

  while (item1 || item2) {
    if (item2 === undefined || item1 < item2) {
      mergedArr.push(item1);
      i++;
      item1 = arr1[i]
    } else {
      mergedArr.push(item2);
      j++;
      item2 = arr2[j]
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 7, 9, 31], [-3, 4, 6, 30]))
// => [ -3, 0, 3,  4,  4, 6, 7, 9, 30, 31]
console.log(mergeSortedArrays([0, 3], [-3, 4, 6, 30, 99]))
// => [ -3,  0,  3, 4, 6, 30, 99 ]
console.log(mergeSortedArrays([], [-3, 4]))
// => [-3, 4]
console.log(mergeSortedArrays([], []))
// => []
console.log(mergeSortedArrays([-3, 4]))
// => Provide 2 arrays
console.log(mergeSortedArrays('string', [-3, 4]))
// => Provide 2 arrays