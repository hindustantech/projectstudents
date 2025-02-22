import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export const ConnectDB = async () => {
    const url=process.env.MONGODB_URI
    try {
        await mongoose.connect(url)

        console.log("Connocted toThe Mongo DB ")

    } catch (error) {
        console.log(error)
    }
}