import express from 'express'
import { getPackages, addPackage, updatePackage, deletePackage } from "../controllers/packageController"
const router = express.Router();

router.get('/', getPackages);
router.post('/', addPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
