import express from 'express';
const app = express();
app.use(express.json());
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});