/* 小明的女朋友最喜欢在网上买买买了，可是钱包里钞票有限，不能想买啥就买啥。
面对琳琅满目的物品，她想买尽可能多的种类，每种只买一件，同时总价格还不能超过预算上限。
于是她请小明写程序帮她找出应该买哪些物品，并算出这些物品的总价格。
.
输入规范：
每个输入包含两行。第一行是预算上限。
第二行是用空格分隔的一组数字，代表每种物品的价格。
所有数字都为正整数并且不会超过10000。
.
输出规范：
对每个输入，输出应买物品的总价格。
.
输入示例1:
100
50 50
输出示例1:
100
输入示例2:
188
50 42 9 15 105 63 14 30
输出示例2:
160 */

//最多商品种类问题

//预算
var limitMoney = 188;
//商品价格
var goodsPrice = [50, 42, 9, 15, 105, 63, 14, 30];

/**
 * 计算不超出限额的情况下
 * 购买最多种类商品的总价格
 * （每种商品购买一个）
 * @param limitMoney
 * @param goodsPrice
 */
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

console.log(mostGoodsWithinLimit(limitMoney, goodsPrice))