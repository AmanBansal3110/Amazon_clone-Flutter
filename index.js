// console.log("Ram Ram");
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

const e = require("express");

const PORT = 3000;
const app = express();
const password = "Radhasoami@3110";
const encodedPassword = encodeURIComponent(password);

const DB = `mongodb+srv://amanbansal:${encodedPassword}@cluster0.kmcnk9c.mongodb.net/your-database-name?retryWrites=true&w=majority`;
// middelware
app.use(express.json());
app.use(authRouter);


// app.get('/hello-world', (req, res)=>{
//  res.json({name:"Aman Bansal"});
// })
mongoose.connect(DB).then(()=>{
    console.log("Connection Successful");
})
.catch((e)=>{
    console.log(e);
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Connected hello at port ${PORT}`);
});
