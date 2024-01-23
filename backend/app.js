const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const connect = require('./connect');


app.use(express.json());
app.use(cors());

port = process.env.PORT || 5000;

app.use('/',(req,res)=>{
    res.send('Backend is running...');
})


const start = async () => {
    try {
        await connect(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Alice Uyandı http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();

