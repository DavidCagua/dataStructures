/*
An in-place quicksort is a version of the quicksort algorithm 
that sorts the array without requiring additional memory for another array. 

It rearranges elements within the original array by using the following steps:

Choose a Pivot: Select a pivot element from the array (this can be the first, last, middle, or a random element).

Partition the Array: Reorder the array so that all elements less than the pivot are on the left of the 
pivot and all elements greater than the pivot are on the right. 
The pivot is then placed in its correct sorted position.

Recursively Apply Quicksort: The same process is applied recursively to the left and right 
subarrays (the sections before and after the pivot), until each subarray contains only one or no elements.

This method requires no extra arrays, as the sorting is done within the original array 
by swapping elements, making it "in-place." The space complexity is O(log n) due to the recursive calls, 
but the algorithm does not use extra space for copying elements.
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [8, 20, -2, 4, -6];
quickSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
