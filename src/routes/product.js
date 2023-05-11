const express = require("express")
const router = express.Router()
const productController = require("../controllers/ProductControllers")

router.get("/", productController.getAllProduct)
router.get("/:id", productController.getProductById)
router.get("/title/:title", productController.getProductByName)
router.get("/author/:author", productController.getProductByAuthor)
router.get("/published_date/:start/:end", productController.getProductByYear)
router.get("/category/:id", productController.getProductByCategory)
router.get("/new/:num", productController.getNewProduct)
router.get("/sale/:num", productController.getLowestProduct)
router.get("/bestseller/:num", productController.getBestSellerProduct)
router.get("/price/:start/:end/:sort", productController.getProductByPrice)
router.post("/add", productController.addProduct)
router.post("/update/:id", productController.updateProduct)
router.get("/delete/:id", productController.deleteProduct)




module.exports = router
