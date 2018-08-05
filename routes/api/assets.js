const router = require("express").Router();
const assetsController = require("../../controllers/assetsController");

// Matches with "/api/books"
router.route("/")
  .get(assetsController.findAll)
  .post(assetsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(assetsController.findById)
  .put(assetsController.update)
  .delete(assetsController.remove);

module.exports = router;
