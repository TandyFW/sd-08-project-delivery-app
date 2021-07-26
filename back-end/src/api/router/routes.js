const router = require("express").Router();
const userController = require('../controllers/userController');
const productController = require("../controllers/productController");
const middlewares = require("../middlewares/userValidations");

router.post("/login", userController.validUser);
router.post("/users", middlewares.findUserByNameOrEmail, userController.addUser);
router.get("/users", userController.getAllUsers);

router.get('/products', productController.getAllProducts);

module.exports = router;
