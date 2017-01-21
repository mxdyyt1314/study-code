/**
 * Created by meng on 2017/1/2.
 */

var winWidth = 1366;
var winHeight = 768;
var r = 6;
var fillColor = "#D67A85";
var marginLeft = 0;
var marginTop = 0;

//Tue Jan 03 2017 12:33:21 GMT+0800 (中国标准时间)
var endTime = new Date(2017, 0, 3, 12, 33, 21);
var res;

window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = winWidth;
    canvas.height = winHeight;
    var cxt = canvas.getContext("2d");

    res = getResSenconds();

    setInterval(function () {
        drawTime(cxt);
        update();
    }, 30);

};

function update() {
    var nextRes = getResSenconds();
    if (nextRes !== res) {
        res = nextRes;
    }
}

function getResSenconds() {
    var res = endTime.getTime() - Date.now();
    if (res === 0) return 0;
    return res / 1000;
}

function drawTime(cxt) {

    var hour = parseInt(res / 3600);
    var minute = parseInt((res - hour * 3600) / 60);
    var senconds = res % 60;


    cxt.clearRect(0, 0, winWidth, winHeight);
    drawNum(parseInt(hour / 10), marginLeft, marginTop, cxt);
    drawNum(parseInt(hour % 10), marginLeft + 15 * (r + 1), marginTop, cxt);
    drawNum(parseInt(10), marginLeft + 30 * (r + 1), marginTop, cxt);
    drawNum(parseInt(minute / 10), marginLeft + 39 * (r + 1), marginTop, cxt);
    drawNum(parseInt(minute % 10), marginLeft + 54 * (r + 1), marginTop, cxt);
    drawNum(parseInt(10), marginLeft + 69 * (r + 1), marginTop, cxt);
    drawNum(parseInt(senconds / 10), marginLeft + 78 * (r + 1), marginTop, cxt);
    drawNum(parseInt(senconds % 10), marginLeft + 93 * (r + 1), marginTop, cxt);
}

function drawNum(num, startX, startY, cxt) {
    var numsArr = digit[num];
    for (var i = 0; i < numsArr.length; i++) {
        for (var j = 0; j < numsArr[i].length; j++) {
            if (numsArr[i][j] === 1) {
                //绘制圆形
                cxt.beginPath();
                cxt.arc(
                    startX + j * 2 * (r + 1) + (r + 1),
                    startY + i * 2 * (r + 1) + (r + 1),
                    r, 0, 2 * Math.PI);
                cxt.fillStyle = fillColor;
                cxt.fill();
            }
        }
    }
}