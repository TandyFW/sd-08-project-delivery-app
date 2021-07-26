const router = require("express").Router();
const controller = require("../controllers/userController");
const middlewares = require("../middlewares/userValidations");

router.post("/login", controller.validUser);
router.post("/users", middlewares.findUserByNameOrEmail,controller.addUser);
router.get("/users", controller.getAllUsers);

module.exports = router;
