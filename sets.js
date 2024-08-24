/*
can hold a collection of values
the values must be unique
can contain a mix of different data types 
dinamically sized
do not maintain an insertion order
are iterables

*/
class CustomSet {
  constructor() {
    this.data = {};
    this.size = 0;
  }

  add(value) {
    let hash = JSON.stringify(value);
    if (!this.data[hash]) {
      this.data[hash] = value;
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  has(value) {
    let hash = JSON.stringify(value);
    return !!this.data[hash];
  }

  delete(value) {
    let hash = JSON.stringify(value);
    if (this.data[hash]) {
      delete this.data[hash];
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  getSize() {
    return this.size;
  }

  *[Symbol.iterator]() {
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        yield JSON.parse(key); // Parse key back to its original value
      }
    }
  }
}

// Usage
let mySet = new CustomSet();
mySet.add(1);
mySet.add(2);

// Using the for-of loop to iterate through the set
for (let value of mySet) {
  console.log(value);
}

/*
big-o time complexity

add - O(1)
delete - O(1)
has - O(1)
*/
