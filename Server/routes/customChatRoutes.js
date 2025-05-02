const express = require("express");

const router = express.Router();

//req controller funcs
const {getCustomchatDetails, createCustomchatDetails, updateCustomChatData,} = require("../controllers/customChatController");

//importing middleware for auth
const authUser = require('../middleware/userMiddleware');

//auth token mmiddleware
router.use(authUser)





//Get customChat details
router.get("/", getCustomchatDetails);

//Create customChat details
router.post("/", createCustomchatDetails);

//Update customChat details
router.patch("/:id", updateCustomChatData);

// //Add welcomeMsg
// router.post("/:id", addCustomChatData);

module.exports = router;
