const Auth = require("express").Router();
const UserModel = require("../Models/UserModels.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register

Auth.post("/register", async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const EncPass = await bcrypt.hashSync(Password, salt);
    let newUser = new UserModel({
      Name: Name,
      Email: Email,
      Password: EncPass,
    });

    let NewNow = await newUser.save();
    res.status(200).json(NewNow);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
});

//login

Auth.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ Email: req.body.Email });

    if (!user) {
      return res.status(404).json("user not found");
    }
    const match = await bcrypt.compare(req.body.Password, user.Password);

    if (!match) {
      return res.status(401).json("wrong creditionals");
    }

    const token = jwt.sign({ id: user._id, username: user.Name, Email: user.Email }, process.env.KEY, {
      expiresIn: "3d",
    });
    const { Password, ...info } = user._doc;
    res.cookie("Token", token).status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout

Auth.get("/logout", (req, res) => {
  try {
    res
      .clearCookie("Token", { sameSite: "none", secure: true })
      .status(200)
      .json("logout");
  } catch (e) {
    res.status(500).json(err);
  }
});

Auth.get("/refetch", (req, res) => {
  const token = req.cookies.Token;

  jwt.verify(token, process.env.KEY, {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }

  return res.status(200).json(data);
  });
});

module.exports = Auth;
