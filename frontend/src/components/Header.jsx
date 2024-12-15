import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">TravelBooking</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

