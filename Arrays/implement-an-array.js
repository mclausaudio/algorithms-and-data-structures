// In this file, I will be implementing my own Array-like data structure

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // Get item at an index - O(1)
  get(index) {
    return this.data[index];
  }
  // Add item to end of array - O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // Remove last item of array - O(1)
  pop() {
    if (this.length > 0) {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    } else {
      return this.data;
    }
  }
  // Delete an index of the array, and shift all indexes after that down by one - O(n)
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return this.length;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // The final index will still exist, need to delete and decrement length
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

console.log(newArray); // { length: 0, data: {} }
console.log('1', newArray.push('Hello'));
console.log('2', newArray.push('World'));
console.log('3', newArray); // { length: 2, data: { '0': 'Hello', '1': 'World' } }
console.log('4', newArray.pop());
console.log('5', newArray); // { length: 1, data: { '0': 'Hello' } }
console.log('6', newArray.push('there'));
console.log('7', newArray.push('!'));
console.log('8', newArray); // { length: 3, data: { '0': 'Hello', '1': 'there', '2': '!' } }
console.log('9', newArray.delete(1));
console.log('10', newArray); // { length: 2, data: { '0': 'Hello', '1': '!' } }

// Running this script will return the following to the console:
// 1 1
// 2 2
// 3 MyArray { length: 2, data: { '0': 'Hello', '1': 'World' } }
// 4 World
// 5 MyArray { length: 1, data: { '0': 'Hello' } }
// 6 2
// 7 3
// 8 MyArray { length: 3, data: { '0': 'Hello', '1': 'there', '2': '!' } }
// 9 2
// 10 MyArray { length: 2, data: { '0': 'Hello', '1': '!' } }
