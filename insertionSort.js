let tempArray = [6, 5, 2, 4, 7, 3, 2, 1];

let insertionSort = function(array) {
  let i = 1,
    j,
    temp;
  for (i; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; array[j] > temp && j >= 0; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

console.log(insertionSort(tempArray));
