import mongoose from "./connection.js";

const callRecord = mongoose.Schema({
    user1_email: {
        type: String,
        required: false
    },
    inviteCode : {
        type : String,
        required : false
    },
    user2_email :{
        type : String,
        required : false
    }
});

export const callRecordModel = mongoose.model("callRecord", callRecord);