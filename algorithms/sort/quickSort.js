/*
Quicksort is a highly efficient, divide-and-conquer sorting algorithm that works 
by selecting a "pivot" element from the array.
 It then partitions the array into two subarrays:

Elements less than the pivot.
Elements greater than the pivot.
The pivot is placed in its correct position within the sorted array. 
The process is then recursively applied to the subarrays on either side of the pivot until the entire array is sorted.

Quicksort is known for its average-case time complexity of O(n log n), 
but its worst-case time complexity can be O(n²) if the pivot is poorly chosen.
*/
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]
