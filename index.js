
const express = require('express')
const cors = require('cors');
const app = express()
const port = 10000
const mongoDB = require ("./db")
mongoDB();
app.use(cors());
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://mernapp-lcii.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
     "Origin, x-Requested-with, Content-Type, Accept"

  );
  next();
})

app.use(express.json()) 
app.use('/api',require ("./Routes/Displaydata"))
app.use('/api',require ("./Routes/CreatUser"))
app.use('/api',require ("./Routes/Registration"))
app.use('/api',require ("./Routes/Displayuser"))
app.use('/api',require ("./Routes/Location"))

app.get('/', (req, res) => {
  res.send('Hello mr bs patra !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
