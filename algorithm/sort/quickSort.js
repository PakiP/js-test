var arr = require('./arr');

//快排
//递归实现
function quickSort1(arr, left, right) {
  if (left < right) {
    var x = arr[right];
    var i = left - 1;
    var temp;
    for (var j = left; j <= right; j++) {
      if (arr[j] <= x) {
        i++;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    quickSort1(arr, left, i-1);
    quickSort1(arr, i+1, right);
  }
  return arr;
}

function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat([pivot], quickSort2(right))
}

// console.log(quickSort1(arr, 0, arr.length - 1));
console.log(quickSort2(arr))