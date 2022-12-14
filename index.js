const express = require("express")
//import mongoose from mongoose;
const cors = require("cors")
//const morgan = require("morgan");
require("dotenv").config();
import {readdirSync} from "fs";

const app = express();

		//Set up the database connection
// 		mongoose.connect(process.env.DATABASE.{})
// .then(()=>console.log(“db connected”)
//   	.catch((err)=>console.log(err));

		//apply some middlewares with .use();
app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({extended:true}));
app.use(cors())

		//post request for registering the user
// app.post("/api/register",(req,res)=>{
//     console.log("received data: ", req.body);
//     res.json({"message":"received"})
   
// })

readdirSync(`./routes`).map((r)=>app.use(`/api`, require(`./routes/${r}`)))

		//create the port
const port = 8000
		app.listen(port,()=>{
        console.log("server running on port 8000")})
