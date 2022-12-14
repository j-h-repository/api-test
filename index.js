const express = require("express")
//import mongoose from mongoose;
const cors = require("cors")
//const morgan = require("morgan");
require("dotenv").config();

const app = express();

		//Set up the database connection
// 		mongoose.connect(process.env.DATABASE.{})
// .then(()=>console.log(“db connected”)
//   	.catch((err)=>console.log(err));

		//apply some middlewares with .use();
app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({extended:true}));
app.use(cors({
	origin:[process.env.LOCAL_HOST]
}))

		//post request for registering the user
app.post("/api/register",(req,res)=>{
    console.log("received data: ", req.body);
    res.json({"message":"received"})
   
})

console.log("the server is running")

		//create the port
const port = 8000
		app.listen(port,()=>{
        console.log("server running on port 8000")})
