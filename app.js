const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const port = 3000;

//middlware
app.use(express.json());


//routes
app.use('/api/v1/tasks',tasks),

app.get("/",(req, res)=>{
    res.send("Welcome");
})

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});
