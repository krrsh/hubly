const { default: mongoose } = require("mongoose");



mongoose.connect('mongodb://localhost:27017/Hubly')
.then(()=>{
    console.log("Connection is Established")
})
.catch((err)=>{
    console.log(`Error is : ${err}`);
    
})