const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const connectDB = require("./config/dataabase");

connectDB();

app.use(express.json());

app.use('/api',require('./routers/userrouter'))

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})