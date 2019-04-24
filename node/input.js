var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

function mostGoodsWithinLimit(limitMoney, goodsPrice) {
  var result = 0;
  goodsPrice.sort((a,b) => a-b);
  for (var i = 0; i < goodsPrice.length; i++) {
    var price = goodsPrice[i];
    result += price;
    if (result > limitMoney) {
      result -= price;
    }
  }
  return result;
}

rl.on('line', function(line) {
  lines.push(line);
  if (lines.length === 2) {
    var arr1 = +lines[0];
    var arr2 = lines[1].split(' ').map(Number);
    console.log(mostGoodsWithinLimit(arr1, arr2));
  }
})

rl.on('close',function(){
  process.exit()
})