const express=require("express")
const app=express();
var cors = require('cors')
app.use(cors())
require("dotenv").config();

const PORT=4000;

app.use(express.json());


const cookieParser=require("cookie-parser");
app.use(cookieParser());

const fileupload=require("express-fileupload");
app.use(fileupload(
    {
        useTempFiles : true,
       tempFileDir : '/tmp/',
       
    }
));

app.use(cors({
    origin: 'http://localhost:3000' // replace with the URL of your frontend server
  }));

const db=require("./config/database");
db.connect();

//connect with cloud
const cloudinary=require('./config/cloudinary');
cloudinary.cloudinaryConnect();

const user=require("./routes/auth")
const recipe=require("./routes/recipe")
const admin=require('./routes/admin')
app.use("/api/v1",user)
app.use("/api/v1",recipe)
app.use("/api/v1",admin)

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})