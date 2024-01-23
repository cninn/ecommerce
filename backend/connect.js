const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        const con = await mongoose.connect(url);
        console.log(`THANOS İS COMİNG`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;