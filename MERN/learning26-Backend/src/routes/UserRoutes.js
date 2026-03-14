const router = require("express").Router()
//require coontroller
const userController = require("../controllers/UserController")
//dummy
// router.get("/dummy",userController.getUsers)
// router.get("/user",userController.getUserData)
// router.get("/users",userController.allUsers)
// router.get("/user/:id",userController.getUserById)

router.get("/users",userController.getAllUsers)

module.exports = router