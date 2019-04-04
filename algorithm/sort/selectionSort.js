var arr = require('./arr');

//选择排序
function selectionSort(arr) {
  var len = arr.length;
  var minIdx,
      temp;
  console.time('Time');
  for (var i = 0; i < len - 1; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  console.timeEnd('Time');
  return arr;
}

console.log(selectionSort(arr))