const router = require("express").Router();
const assetRoutes = require("./assets");

// Book routes
router.use("/assets", assetRoutes);

module.exports = router;
