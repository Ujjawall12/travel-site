import React, { useState } from 'react';

const BookingPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Data:', form);
    // Send booking data to backend
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Trip</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded">
        <input type="text" name="name" placeholder="Your Name" className="block w-full mb-4 p-2 border" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="block w-full mb-4 p-2 border" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" className="block w-full mb-4 p-2 border" onChange={handleChange} />
        <input type="number" name="travelers" placeholder="Number of Travelers" className="block w-full mb-4 p-2 border" onChange={handleChange} />
        <textarea name="specialRequests" placeholder="Special Requests" className="block w-full mb-4 p-2 border" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
