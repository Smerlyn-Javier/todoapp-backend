const router = require("express").Router();
const { UserController } = require("../controllers");
const { AuthMdw } = require("../middlewares");

router.get("", AuthMdw, UserController.getUsers);
router.get("/:id", AuthMdw, UserController.getUser);
router.put("/:id", AuthMdw, UserController.update);
router.delete("/:id", AuthMdw, UserController.delete);

module.exports = router;
