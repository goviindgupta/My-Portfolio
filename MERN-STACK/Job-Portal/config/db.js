import mongoose from "mongoose"
import  Color  from "colors"

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta.white)
    }catch(err){
        console.log(`MongoDb error :${err}`.bgRed.white)
    }
}
export default connectDB