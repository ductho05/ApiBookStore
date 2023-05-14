const express = require("express")
const router = express.Router()
const productController = require("../controllers/ProductControllers")

router.get("/", productController.getAllProduct) // Cập nhật lại: Mỗi cái api này là đủ rổi

// API dành cho khách hàng
router.get("/:id", productController.getProductById)
router.get("/title/:title", productController.getProductByName)
router.get("/author/:author", productController.getProductByAuthor)
router.get("/published_date/:start/:end", productController.getProductByYear)
router.get("/category/:category", productController.getProductByCategory)
router.get("/new/:num", productController.getNewProduct)
router.get("/sale/:num", productController.getLowestProduct)
router.get("/bestseller/:num", productController.getBestSellerProduct)
router.get("/price/:start/:end/:sort", productController.getProductByPrice)

// API dành cho admin
router.post("/add", productController.addProduct)
router.post("/update/:id", productController.updateProduct)
router.get("/delete/:id", productController.deleteProduct)

module.exports = router
