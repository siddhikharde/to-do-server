import express from 'express';
const app = express();
app.use(express.json());
const PORT=8000;


app.get('/health',(req,res)=>{
    res.json({
        success:true,
        message:"Server is healthy",
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});