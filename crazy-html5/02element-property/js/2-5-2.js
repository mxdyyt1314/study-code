 var lis = document.getElementById("projectList").getElementsByTagName("li");
 for (var i = 0; i < lis.length; i++) {
     var li = lis[i];
     li.ondragstart = function (ev) {
         console.log("move");
         ev.dataTransfer.setData("text/plain", "<item>" + ev.target.innerHTML);
     }
 }
 var collectEle = document.getElementById("collect");
 collectEle.ondragover = function (ev) {
     return false;
 }
 collectEle.ondrop = function (ev) {
     console.log("drop");
     var text = ev.dataTransfer.getData("text/plain");
     if (text.indexOf("<item>") > -1) {
         var newEle = document.createElement("li");
         newEle.id = new Date().getUTCMilliseconds();
         newEle.innerHTML = text.substr(6);
         newEle.draggable = true;
         document.getElementById("collectUl").appendChild(newEle);
         newEle.ondragstart = function (ev) {
             ev.dataTransfer.setData("text/plain", "drop:" + newEle.id);
         };
     }
 };
 var dustbin = document.getElementById("dustbin");
 dustbin.ondragover = function () {
     return false;
 };
 dustbin.ondrop = function (ev) {
     var text = ev.dataTransfer.getData("text/plain");
     if (text.indexOf("drop:") > -1) {
         var id=text.substr(5);
         document.getElementById(id).remove();
     }
 };