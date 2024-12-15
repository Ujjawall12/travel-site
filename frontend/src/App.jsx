import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
