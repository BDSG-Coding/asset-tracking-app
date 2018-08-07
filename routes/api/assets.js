const router = require("express").Router();
const assetsController = require("../../controllers/assetsController");

// Matches with "/api/assets"
router.route("/")
  .get(assetsController.findAll)
  .post(assetsController.create);

// Matches with "/api/assets/:id"
router
  .route("/:id")
  .get(assetsController.findById)
  .put(assetsController.update)
  .delete(assetsController.remove);

module.exports = router;
