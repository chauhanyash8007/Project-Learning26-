const router = require("express").Router()
const categoryController = require("../controllers/categoryController")

router.get("/categories", categoryController.getAllCategories)
router.get("/category/:id", categoryController.getCategoryById)
router.post("/category", categoryController.addCategory)
router.delete("/category/:id", categoryController.deleteCategory)

module.exports = router