import mongoose from "mongoose";
// 1- create schema
const noteSchema = new mongoose.Schema({
    titel:{
        type:string,
        required:true
    },
    content:{
        type:string,
        required:true
    }
},
{timestamps:true} //createdAt, UpdatedAt
)