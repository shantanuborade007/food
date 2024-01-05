const express=require("express")
const app=express();
var cors = require('cors')
app.use(cors())
require("dotenv").config();

const PORT=process.env.PORT || 4000;

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

const allowedOrigins = [
  'https://food-divu.vercel.app',
  'https://food-divu-q4loqq8wi-shantanus-projects-66e3bf71.vercel.app',
  'https://food-divu-git-main-shantanus-projects-66e3bf71.vercel.app'
  // Add as many origins as needed
];

app.use(cors({
  origin: allowedOrigins
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
