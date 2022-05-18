import mangoose from 'mongoose'

const connectDB= async() =>{
    try{
        const conn=await mangoose.connect(process.env.MONGO_URL,
        //     {
        //     useUnifiedTopology: true,
        //     useNewUrlParser: true,
        //     useCreateIndex: true
        // }
        )
        console.log(`MongoDB Connected:${conn.connection.host}`)
    }catch(error){
        console.log(`error:${error.message}`)
        process.exit(1)
    }

}

export default  connectDB