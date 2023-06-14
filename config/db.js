const { default: mongoose } = require("mongoose");




const mongoConnect = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_STRING)
        console.log('Mongo Db Conneceted Successfull!');

    } catch (error) {
            console.log(error.message);
    }
}

export default mongoConnect