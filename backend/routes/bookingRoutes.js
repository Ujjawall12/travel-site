import express from 'express'
import { addBooking, getBookings } from "../controllers/bookingController"
const router = express.Router();

router.post('/', addBooking);
router.get('/', getBookings);

module.exports = router;
