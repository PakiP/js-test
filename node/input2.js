var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

function decodeText(date, text) {
  var letters = ['ABCDEFGHI', 'JKLMNOPQR', 'STUVWXYZ*'];
  var m = +date.split(' ')[0];
  var d = +date.split(' ')[1];

  function leftShift(arr, length, k){
    while (k--) {
      var tmp = arr[0];
      for(let i = 0; i < length; i++){
        arr[i] = arr[i+1];
      }
      arr[length-1] = tmp;
    }
  }
  leftShift(letters, letters.length, m-1)

  let map = [];
  for (let i = 0; i < 3; i++) {
    map[i] = letters[i].split('');
    leftShift(map[i], 9, d-1)
    map[i] = map[i].join('');
  }

  let code = [];
  let textArr = text.split('');
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] === ' ') {
      textArr[i] = '*'
    }
    for (let j = 0; j < map.length; j++) {
      if (map[j].indexOf(textArr[i]) !== -1) {
        code.push(j+1 + '' + (map[j].indexOf(textArr[i])+1))
      }
    }
  }
  return code.join(' ');
}

rl.on('line', function(line) {
  lines.push(line);
  if (lines.length === 2) {
    var arr1 = lines[0];
    var arr2 = lines[1];
    console.log(decodeText(arr1, arr2));
  }
})

rl.on('close',function(){
  process.exit()
})