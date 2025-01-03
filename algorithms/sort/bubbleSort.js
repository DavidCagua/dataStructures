/*

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

Here's how it works:

Pass through the list: Start at the beginning of the list and compare the first two elements.
Swap if necessary: If the first element is greater than the second, swap them.
Move to the next pair: Compare the second and third elements, and swap if necessary. Continue this for each adjacent pair in the list.
Repeat: After each full pass, the largest element will have "bubbled" to its correct position at the end of the list. The next pass will only need to consider the unsorted part of the list.
Stop when sorted: The algorithm stops when no swaps are needed in a pass, indicating the list is sorted.
Example:
For the list [5, 3, 8, 4, 2], the steps would be:

First pass: [5, 3, 8, 4, 2] → [3, 5, 8, 4, 2] → [3, 5, 8, 4, 2] → [3, 5, 4, 8, 2] → [3, 5, 4, 2, 8]
Second pass: [3, 5, 4, 2, 8] → [3, 5, 4, 2, 8] → [3, 4, 5, 2, 8] → [3, 4, 2, 5, 8]
Third pass: [3, 4, 2, 5, 8] → [3, 4, 2, 5, 8] → [3, 2, 4, 5, 8]
Fourth pass: [3, 2, 4, 5, 8] → [2, 3, 4, 5, 8]
Now the list is sorted: [2, 3, 4, 5, 8].

Time complexity: The average and worst-case time complexity of bubble sort is O(n²), where n is the number of elements in the list.
*/

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
