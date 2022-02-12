const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const auth = require('../middleware/auth');

router.get("/book/:id",borrowController.getBorrowDataByBook);
router.get("/member/:id",borrowController.getBorrowDataByMember);

router.post("/add",borrowController.borrowBook);

router.put("/:id",borrowController.returnBook);


module.exports = router;
