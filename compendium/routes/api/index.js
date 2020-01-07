const router = require("express").Router();
const rockRoutes = require("./rocks");

// Rock routes
router.use("/rocks", rockRoutes);

module.exports = router;
