const router = require("express").Router()
const bookController = require("../controllers/bookController")

router.get("/books", bookController.getAllBooks)
router.get("/book/:id", bookController.getBookById)
router.post("/book", bookController.addBook)
router.delete("/book/:id", bookController.deleteBook)

module.exports = router