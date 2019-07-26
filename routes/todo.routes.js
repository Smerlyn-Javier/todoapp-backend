const router = require("express").Router();
const { TodoController } = require("../controllers");

router.get("", TodoController.getTodos);
router.get("/:id", TodoController.getTodo);
router.post("", TodoController.create);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.delete);

module.exports = router;
