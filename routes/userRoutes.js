const { Router } = require("express");
const router = Router();

const { signupuser, loginuser } = require("../controllers/userController");

router.post("/signup",signupuser);

router.post("/login", loginuser)

module.exports = router;