const express = require("express");
const router = express.Router();

router.use("/detail", require("./detailRouter"));
router.use("/upload", require("./uploadRouter"));
router.use("/mypage", require("./mypageRouter"));
router.use("/login", require("./loginRouter"));
router.use("/singup", require("./signupRouter"));

module.exports = router;