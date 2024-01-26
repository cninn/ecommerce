const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ msg: "User already exists" });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const { ...user } = req.body;
    console.log(user);
    await User.create(user);
    const data = {
      user: {
        id: user._id,
      },
    };
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.status(200).json({ token, ...user });
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist " });
    } else {
      const passCompare = user.password === req.body.password;
      if (passCompare) {
        const data = {
          user: {
            id: user._id,
          },
        };
        const token = jwt.sign(data, process.env.JWT_SECRET);
        res.status(200).json({ token, user });
      } else {
        return res.status(400).json({ msg: "Wrong Password" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, findUser };
