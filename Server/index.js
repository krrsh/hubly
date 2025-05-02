const express = require('express');
const cors = require('cors');
//db connection 
require("./db/connection")

const app = express();

const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors());


//req routes
const customChatRoutes = require('./routes/customChatRoutes')
const userRoutes = require('./routes/userRoute')

//Routes
app.use('/api/customChats', customChatRoutes)
app.use('/api/users', userRoutes)


app.listen(port, ()=>{
    console.log(`Server is connected at PORT: ${port}`);
    
})