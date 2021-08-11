const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true
  }, 
  street: {
      type: String,
      required: true
  },
  city: {
      type: String,
      required: true
  },
  state: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 2
  },
  zip_code: {
      type: Number,
      required: true
  },
  phone: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      require: true
  }, 
  isAdmin: {
      type: Boolean,
      required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
