import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;

const TODO_ITEMS = ["Go for  swimming", "Complete Homework", "Read a Book"];

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to the To-Do API"
    })
})
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "Server is healthy",
    })
})
app.get("/todos", (req, res) => {
    return res.json({
        supercess: true,
        data: TODO_ITEMS,
        message: "List of all to-do items"

    })
})
app.post("/todos", (req, res) => {
    const { todoItems } = req.body;
    if (todoItems == "" || todoItems == undefined) {
        return res.json({
            success: false,
            message: "TODO item can not be empty",
        })
    }
    else {
        TODO_ITEMS.push(todoItems);
        return res.json({
            success: true,
            data: todoItems,
            message: "To-do item added successfully",
        })
    }

})

app.delete("/todos",(req,res)=>{
    const {todoItem}=req.body;
    const index=TODO_ITEMS.indexOf(todoItem);
    if(index>-1){
        TODO_ITEMS.splice(index,1);
        return res.json({
            success:true,
            data:TODO_ITEMS,
            message:"Todo item deleted succesfully",
            deletedItem:todoItem,
        })

    }
    else{
        return res.json({
            status:false,
            message:"Todo item not found",
        })
    }
})

app.put("/todos",(req,res)=>{
    const {oldTodoItem, newTodoItem}=req.body;
    const index = TODO_ITEMS.indexOf(oldTodoItem);
    if(index>-1){
        TODO_ITEMS[index]=newTodoItem;
        return res.json({
            success:true,
            data:TODO_ITEMS,
            message:"Todo item updated successfully",
        })
    }
    else{
        return res.json({
            success:false,
            message:"Todo item not found",
        })
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});