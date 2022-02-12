const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const auth = require('../middleware/auth');

router.get("/",staffController.getStaffs);
router.get("/:id",staffController.getStaffById);
router.get("/staffId/:id",staffController.getStaffByStaffId);

router.post("/add",staffController.addStaff);
router.post("/login",staffController.login);

router.put("/:id",auth,staffController.updateStaff);

router.delete("/:id",auth,staffController.deleteStaff);

module.exports = router;
