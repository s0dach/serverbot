const Router = require("express");
const router = new Router();
const listRouter = require("./listRouter");
const lectionRouter = require("./lectionRouter");

router.use("/list", listRouter);
router.use("/lection", lectionRouter);

module.exports = router;
