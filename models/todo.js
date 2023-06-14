import mongoose from "mongoose";



const todoSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true
    },
    status : {
        type : String,
        trim : true,
    }
})




// export todo models
export default mongoose.models.Todo || mongoose.model('Todo', todoSchema)