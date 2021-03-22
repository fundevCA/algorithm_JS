// Merge Sort, O(NlogN)
// This sorting algorithm takes more memory,
// but better time complexity than insertion Sort.

// Compares the first element of the arrays and put the small one into the result array
// use Recursion to break down to small array

let mergeSort = function(array) {
  if (array.length < 2) return array;
  let pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}
