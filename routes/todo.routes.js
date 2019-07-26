const router = require("express").Router();
const { TodoController } = require("../controllers");

// router.get("/:id", TodoController.index);
router.get("", TodoController.getTodo);
// router.post("", TodoController.index);
// router.put("", TodoController.index);
// router.delete("", TodoController.index);

module.exports = router;
