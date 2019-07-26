const router = require("express").Router();
const { UserController } = require("../controllers");

router.get("", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post("", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;
