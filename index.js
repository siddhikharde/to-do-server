import express from 'express';
const app = express();
app.use(express.json());
const PORT=8000;

const TODO_ITEMS=["Go for  swimming","Complete Homework","Read a Book"];

app.get("/",(req,res)=>{
    res.json({
        status:"success",
        message:"Welcome to the To-Do API"
    })
})
app.get('/health',(req,res)=>{
    res.json({
        success:true,
        message:"Server is healthy",
    })
})
app.get("/todos",(req,res)=>{
   return res.json({
    supercess:true,
    data:TODO_ITEMS,
    message:"List of all to-do items"

   })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});