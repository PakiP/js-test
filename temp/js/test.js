function distinct(arr) {
    var l =arr.length;
    for (var i = 0; i <l; i++ ) {
        for (var j = i + 1; j < l; j++ ) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                l--;
                j--;
            }
        }
    }
    return arr;
}

var arra = [1,2,3,4,4,1,1,2,1,1,1];
console.log(distinct(arra));    //返回[3,4,2,1]