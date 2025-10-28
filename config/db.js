const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
                                authSource: "admin",
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                                });
        console.log("MongoDB instance connected");
    }catch(error){
        console.log("error connecting to db instance");
        process.exit(1);
    }
}

module.exports = connectDB;