class stack {
  constructor() {
    this.items = []; // Simulating internal data structure (could be a hash table)
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
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
