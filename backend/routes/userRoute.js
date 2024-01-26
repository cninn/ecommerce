const express = require("express");
const router = express.Router();
const {createUser,findUser} = require("../controllers/userController");


router.post('/signup',createUser)
        .post('/login',findUser)





module.exports = router;