const router = require("express").Router();
const { getUserById, getAllUsers, updateUser, deleteUser } = require("../controllers/usersController");
const { register, login, logout } = require("../controllers/authController");
const { allowIfLoggedIn, grantAccess } = require("../middlewares/accessMiddlewares");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", allowIfLoggedIn, logout);
router.get("/:id", allowIfLoggedIn, getUserById);
router.get("/", allowIfLoggedIn, grantAccess('readAny', 'user'), getAllUsers);
router.put("/:id", allowIfLoggedIn, grantAccess('updateAny', 'user'), updateUser);
router.delete("/:id", allowIfLoggedIn, grantAccess('deleteAny', 'user'), deleteUser); 

module.exports = router;