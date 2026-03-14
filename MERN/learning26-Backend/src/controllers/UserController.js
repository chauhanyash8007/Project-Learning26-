const userSchema = require("../models/UserModel")

const getAllUsers = async(req,res) =>{
  const users = await userSchema.find()

  res.json({
    message:"all users",
    data:users
  })

}
module.exports = {
  getAllUsers
}