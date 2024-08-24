/*
JS object is a special implementation of the hash table data structure 
however, Object class adds its own keys, key that you input may conflict and oberwrite the inherited default properties

a hashing function accepts the string key, converts it into a hash code using a defined logic and the maps it into 
a numeric index that is within the bounds of the array

*/

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total = key.charCodeAt(index);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "bruce");
table.set("age", 25);
console.log(table);
