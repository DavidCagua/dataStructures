let array = [0, 1, 2, "david"];
array.push(4);
array.unshift(0);
array.pop();
array.shift();

console.log(array);

/*
map
filter
reduce
concat
slice
splice

big-o time complexity

insert/remove from end - O(1)
insert/remove from beginning - O(n) por que tiene que reiniciar el array
access - O(1)
search - O(n)
push/pop - O(1)
shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)
*/
