document.ondragover = function () {
    return false;
};
document.ondrop = function () {
    return false;
};

var boxEle = document.getElementById("box");

boxEle.ondragover = function () {
    return false;
};

boxEle.ondragend = function (ev) {
    boxEle.style.position = "absolute";
    boxEle.style.left = ev.pageX + "px";
    boxEle.style.top = ev.pageY + "px";
    return false;
};