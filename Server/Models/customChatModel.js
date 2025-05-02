const mongoose = require("mongoose")


const customChatSchema = mongoose.Schema({
    welcomeMsg: {
      type: String,
      required: true,
    },
    headingColor: {
      type: String,
      required: true,
    },
    chatSectionColor: {
      type: String,
      required: true,
    },
    initialText: {
      type: String,
      required: true,
    },
  });


const CustomChat = new mongoose.model("CustomChat", customChatSchema);

module.exports = CustomChat
