import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import packageRoutes from './routes/packageRoutes'
import bookingRoutes from './routes/bookingRoutes'
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/packages', packageRoutes);
app.use('/bookings', bookingRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
