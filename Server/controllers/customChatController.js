const CustomChat = require("../Models/customChatModel");

//Get customchat details
const getCustomchatDetails = async (req, res) => {
  try {
    const customDetails = await CustomChat.find();
    res.status(200).json(customDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Creating customchat details
const createCustomchatDetails = async (req, res) => {
  try {
    const { welcomeMsg, headingColor, chatSectionColor, initialText } =
      req.body;
    const customChatData = new CustomChat({
      welcomeMsg,
      headingColor,
      chatSectionColor,
      initialText,
    });
    const data = await customChatData.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//update customChatdata
const updateCustomChatData = async(req, res)=>{
    try {
        const id = req.params.id
        const customChatdata = await CustomChat.findByIdAndUpdate({_id:id}, req.body, {new:true})
        res.status(202).json(customChatdata)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


// //add a welcome msg
// const addCustomChatData = async (req, res) => {
//   try {
//     const { welcomeMsg, headingColor, chatSectionColor, initialText } = req.body;

//     const newChatData = await CustomChat.create({
//       welcomeMsg,
//       headingColor,
//       chatSectionColor,
//       initialText
//     });

//     res.status(201).json(newChatData);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

module.exports = { getCustomchatDetails, createCustomchatDetails, updateCustomChatData, };
