import mongoose from "mongoose";

export const ConnectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.log("Connection Failed",error);
        process.exit(1)//exit with failure 
    }
};

