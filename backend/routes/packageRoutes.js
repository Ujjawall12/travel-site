const express = require('express');
const { getPackages, addPackage, updatePackage, deletePackage } = require('../controllers/packageController');
const router = express.Router();

router.get('/', getPackages);
router.post('/', addPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
