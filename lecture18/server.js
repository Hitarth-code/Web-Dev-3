const express=require("express");
const app=express();
const port=3000;

app.get("/age-check/:age",(req,res,next)=>{
    // res.send("Hello World");
    let age=parseInt(req.params.age);
    try{
    if (age<18){
        throw new Error("You are not eligible to vote");
    }
    else{       
        res.send("You are eligible to vote");
    }  
}catch(error){
        // res.status(400).json({sucess:false,message:"Age is less than 18"});}
        next(error);
}
});

app.use((req,res,)=>{
    res.status(404).json({success:false,message:"Page not found"});
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({success:false,message:"Internal server error"});
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})