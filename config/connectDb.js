const mongoose =require("mongoose")


const connectDB = async () =>{
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log({msg:"db is connected"})
    } catch (error) {
    console.log({msg:"db is not connected"})
        
    }
}
module.exports= connectDB
