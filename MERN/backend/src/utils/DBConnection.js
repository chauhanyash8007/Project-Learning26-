import mongoose from 'mongoose'

const dbConnection = ()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/Vehicle_Vault").then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("database not connted..",err)
    })

}

export default dbConnection;