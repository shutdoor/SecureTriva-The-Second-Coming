const router = require("express").Router();
const UserController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/login", UserController.login);

router.get("/logout", UserController.logout);

router.get("/loggedIn", UserController.loggedIn);

router.get("/isAdmin", UserController.isAdmin);

router.get("/update", auth, UserController.getUserInfo);
router.post("/update", auth, UserController.updateUser);

module.exports = router;
