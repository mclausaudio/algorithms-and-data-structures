// Implement my own hash table
// 
// Search: O(1)
// Insert: O(1)
// Lookup: O(1)
// Delete: O(1)
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
  // Simple hashing function
  // O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  
  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]){
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
    }
    return this.data[address];
  }

  // Most of the time O(1), if no collisions.
  // But if collisions, still very small amount of loop iterations
  // Worst case, can become O(n)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] ===  key) {
          return currentBucket[i][1]; 
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i=0; i < this.data.length; i++) {
      // If this memory shelf has things in it
      if (this.data[i] && this.data[i].length) {
        // Loop over the shelf
        if (this.data[i].length > 1) {
          for(let j =0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0])
          }
        } else {
          keysArray.push(this.data[i][0][0])
        }
      }
    }
    return keysArray
  }
}

const myHashTable = new HashTable(3);
console.log( myHashTable.set("grapes", 100) );
// => [ [ 'grapes', 100 ] ]
console.log( myHashTable.set("tapes", 200) );
// => [ [ 'tapes', 200 ] ]
console.log( myHashTable.set("cables", 300) );
// => [ [ 'grapes', 100 ], [ 'cables', 300 ] ]
console.log( myHashTable.get("grapes") );
// => 100
console.log( myHashTable.get("records") );
// => undefined
console.log( myHashTable.get("tapes") );
// => 200
console.log( myHashTable.get("cables") );
// => 300
console.log( myHashTable.keys() )
// => [ 'grapes', 'cables', 'tapes' ]