const router = require("express").Router();
const rocksController = require("../../controllers/rocksController");

// Matches with "/api/rocks"
router.route("/")
  .get(rocksController.findAll)
  .post(rocksController.create);

// Matches with "/api/rocks/:id"
router
  .route("/:id")
  .get(rocksController.findById)
  .put(rocksController.update)
  .delete(rocksController.remove);

module.exports = router;
