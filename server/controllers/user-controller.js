const User = require ("./../models/User");
const bcrypt = require ("bcryptjs");

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No User Found" });
  }
  return res.status(200).json({ users });
};

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already exists! Login Instead" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });

  try {
    await user.save();
  } catch (error) {
    return console.log(error);
  }

  return res.status(201).json({ user });
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "User Not Found! Register First" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password!" });
  }
  return res
    .status(200)
    .json({ message: "Login Successful!!!", user: existingUser });
};

module.exports = {
  getAllUser,
  signUp,
  signIn,
};

