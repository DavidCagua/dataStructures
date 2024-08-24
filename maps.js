/*
Objects are unordered whereas maps are ordered
keys in objects can only be srting or symbol, maps can be any type
obj has prototype and default keys, maps dont
objs are not iterables maps are
number of items in obj must be determined manually in a map is readily avalible
obj can have functions maps cant
*/

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// map.set("c", 3);

// for (const [key, value] of map) {
//   console.log(`${key}:${value}`);
// }

class CustomMap {
  constructor() {
    this.data = {}; // Simulating internal data structure (could be a hash table)
    this.size = 0;
  }

  set(key, value) {
    let hash = JSON.stringify(key); // Simplified hash calculation (not a true hash)
    this.data[hash] = value; // Store the value associated with the hash
    this.size++; // Update the size of the map
  }

  get(key) {
    let hash = JSON.stringify(key);
    return this.data[hash]; // Retrieve the value associated with the key
  }

  has(key) {
    let hash = JSON.stringify(key);
    return !!this.data[hash]; // Returns true if key exists, false otherwise
  }

  delete(key) {
    let hash = JSON.stringify(key);
    if (this.data[hash]) {
      delete this.data[hash]; // Remove the entry from the map
      this.size--; // Update the size of the map
      return true;
    } else {
      return false; // Key does not exist in the map
    }
  }

  getSize() {
    return this.size;
  }

  *[Symbol.iterator]() {
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        yield [JSON.parse(key), this.data[key]]; // Parse key back to its original value
      }
    }
  }
}

// Usage
let myMap = new CustomMap();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

for (const [key, value] of myMap) {
  console.log(`${key}:${value}`);
}
/*
big-o time complexity

add - O(1)
delete - O(1)
has - O(1)
*/
