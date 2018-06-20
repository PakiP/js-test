var tip_msg = ['1', '2', '3']; //弹框
var msg = ['1', '2', '3', '4', '5']; //图片文字

var tip_num = 0;
var intervalId = null;
var bg = document.getElementsByClassName('bg');

//弹框
function incrementNum() {
    alert(tip_msg[tip_num++]);
    if (tip_num === tip_msg.length) {
        clearInterval(intervalId);
        bg[0].style.display = "none";
    }
}
intervalId = setInterval(incrementNum, 500);

var img_list = document.getElementById('img_list');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var text = document.getElementsByTagName('h1')[0];
var key = 0;

prev.style.display = 'none';

//图片切换
function switchImg(offset) {
    var dist = parseInt(img_list.style.left) + offset;
    img_list.style.left = dist + 'px';
    if (dist === -2560){
        next.style.display = 'none';
    }else next.style.display = 'block';
    if (dist === 0){
        prev.style.display = 'none';
    }else prev.style.display = 'block';
}

prev.onclick = function() {
    switchImg(640);
    text.innerHTML = msg[--key];
};

next.onclick = function() {
    switchImg(-640);
    text.innerHTML = msg[++key];
};


