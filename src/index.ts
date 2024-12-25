
import app from "./app";
import dotenv from "dotenv";
import path from "path";
import { IRequest, IResponse } from "./interfaces/provider/Iexpress";

dotenv.config()

const port = process.env.PORT;



app.listen(port,()=>{
    console.log(`server is listening on http://localhost:${port} `)
});


app.get('/',(req:IRequest,res:IResponse)=>{

     res.status(200).json({
        message:"Server is Working"
    })
    return;

})