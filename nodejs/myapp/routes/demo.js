var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("这是个demo页面");
});

module.exports = router;
