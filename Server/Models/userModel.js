const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static function for signup
userSchema.statics.signup = async (name, email, phone, password) => {
  const exists = await User.findOne({ name });
  if (exists) {
    throw Error("User already exists!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({name, email, phone, password: hash });

  return user;
};

//static function for login
userSchema.statics.login = async (name, password)=>{
    const user = await User.findOne({name});
    if(!user){
        throw Error("User name not available!")
    }
    const pass = await bcrypt.compare(password, user.password)
    if(!pass){
        throw Error("Incorrect password!")
    }
    return user
}

const User = new mongoose.model("user", userSchema);

module.exports = User;
