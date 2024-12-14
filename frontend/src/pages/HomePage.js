import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/packages')
      .then(response => setPackages(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Discover Your Next Adventure</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pkg.title}</h2>
              <p className="text-sm text-gray-600">{pkg.description}</p>
              <p className="mt-2 text-lg font-bold">Price: ${pkg.price}</p>
              <a href={`/book/${pkg._id}`} className="mt-4 inline-block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
