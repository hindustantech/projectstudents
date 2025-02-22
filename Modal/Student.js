import mongoose, { model, Schema } from "mongoose";

const StudentSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    des: {
        type: String,
        require: true
    }

})

export default model('Student', StudentSchema);

