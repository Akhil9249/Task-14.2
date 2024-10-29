const express = require("express")
const app = express()
const datas = require("./datas.json")
const cors = require("cors")

app.use(cors())

console.log(datas.length);

app.get("/",(req,res)=>{

    res.json(datas)
})

app.listen(5000,()=> console.log("server started 5000"))