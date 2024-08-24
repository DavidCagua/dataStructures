const obj = {
  name: "bruce",
  age: 24,
  "is-male": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["is-male"]);
// delete obj["is-male"];
// console.log(obj);
obj.sayMyName();

// Object .keys() .values() .entries()
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

/*
big-o time complexity

insert - O(1)
remove - O(1)
access - O(1)
search - O(n)
Object.keys(obj) - O(n)
Object.values(obj) - O(n)
Object.entries(obj) - O(n)
*/
