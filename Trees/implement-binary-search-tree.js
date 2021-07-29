class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while(current){
      // 3 things can happen at each node.  It's equal value, it's less, it's more.
      if (current.value === value) {
        // No need for duplicates;
        return undefined;
      }
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          current = null;
          return this;
        }
        current = current.left;
      }
      if (current.value < value) {
        if (current.right === null) {
          current.right = newNode;
          current = null;
          return this;
        }
        current = current.right;
      }
    }
  }
  lookup(value) {
    if (this.root === null) {
      return this;
    }
    let current = this.root;
    while(current){
      if (current.value === value) {
        return current;
      }
      else if (current.value > value) {
        if(!current.left) {
          return false;
        }
        current = current.left;
      }
      else if (current.value < value) {
        if (!current.right) {
          return false;
        }
        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(15);
tree.insert(9)
tree.insert(55)
tree.insert(22)
tree.insert(99)
tree.insert(1)
tree.insert(5)
console.log('Results', JSON.stringify(tree));
// {
//   "root":{
//     "value":15,
//     "left":{
//       "value":9,
//       "left":{
//         "value":1,
//         "left":null,
//         "right":{
//           "value":5,
//           "left":null,
//           "right":null
//         }
//       },
//       "right":null
//     },
//     "right":{
//       "value":55,
//       "left":{
//         "value":22,
//         "left":null,
//         "right":null
//       },
//       "right":{
//         "value":99,
//         "left":null,
//         "right":null
//       }
//     }
//   }
// }
//  OR LOOKS LIKE THIS
//      15
//     /  \
//   9     55
//  /    22  99
// 1
//  \
//   5

console.log(tree.lookup(1))
// {
//   value: 1,
//   left: null,
//   right: Node { value: 5, left: null, right: null }
// }
console.log(tree.lookup(100000))
// false