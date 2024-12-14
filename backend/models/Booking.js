const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  travelers: Number,
  specialRequests: String,
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
