const express=require("express");
const app=express();
const port = 3000
const morgan = require("morgan")

app.use(morgan())

// const logMiddleware=(req,res,next)=>{
//     req.name="John Doe";
//     // console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     // res.send("Hello From Middleware");   
//     console.log("Request url: ",req.url, "Request Method: ",req.method,
//         "Time:",new Date().toLocaleString()
//     );
//      next();
// }

const apiMiddleware=(req,res,next)=>{
    if (req.query.API_KEY==="123456"){
        console.log("API Middleware");
        next();
    }else{
        res.send("Invalid API Key");
    }}
// app.use(logMiddleware);
app.use(apiMiddleware);

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send(`Hello ${req.name} from About Page`);
})

app.get("/data",(req,res)=>{
    console.log("Hello from Data Page");
    res.json({
        city : "New York",
        country : "USA",
        temprature :25 
    });
})

app.listen(port,()=>(
    console.log(`Server is running on port ${port}`)))
