window.onload = function () {
    var filesEle = document.getElementById("files");
    document.getElementById("btnShow").onclick = function () {
        var filelist = filesEle.files;
        for (var i = 0; i < filelist.length; i++) {
            var file = filelist[i];
            console.log(`第${i}个文件是${file.name},该文件的类型是${file.type},该文件大小为${file.size}`);
        }
        console.log("------------------------");
    };
};