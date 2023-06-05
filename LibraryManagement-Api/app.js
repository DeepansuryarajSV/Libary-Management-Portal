const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const loginDetails = require('./routes/loginDetails');
const registerDetails = require('./routes/registerDetails');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",loginDetails);
app.use("/api", registerDetails);
mongoose.set('strictQuery', false);


if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000; 
const CONNECTION = process.env.CONNECTION;

const start = async() => {
    try{
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
        console.log('App listening on port ' + PORT);
        });
    }catch(e){
        console.log(e.message);
    }
    
} 
start();