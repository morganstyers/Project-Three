const router = require("express").Router();
const rockRoutes = require("./rocks");

router.use("/rocks",rockRoutes);

module.exports = router;
