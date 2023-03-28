//https://www.youtube.com/watch?v=aErp15-x8Qw
import mongoose from "mongoose";


const MONGODB_URI = "mongodb+srv://javiervalero:Javier2023-@cluster0.ai4nkpo.mongodb.net/?retryWrites=true&w=majority"

const conectarBD = async () => {
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            //useFindAndMofify: false,
           //useCreateIndex: true
        })
        console.log('mongodb conectado ')
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

export default conectarBD;