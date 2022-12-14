export const register = (req,res)=>{
    console.log("received data: ", req.body);
    res.json({"message":"received"})
   
}