const User = require("../Models/userModel");
const createToken = require("../utils/token");

//login controller

const login = async (req, res) => {
  const {name, password } = req.body;
  try {
    const loginData = await User.login(name, password);

    //create token
    const token = createToken(loginData._id);

    res.status(200).json({ name, password,  token});
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

//signup controller

const signup = async (req, res) => {
  const {name, email, phone, password } = req.body;
  try {
    const userData = await User.signup(name, email, phone, password);

    //create token
    const token = createToken(userData._id);

    res.status(200).json({ name, email, phone, password, token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = { login, signup };
