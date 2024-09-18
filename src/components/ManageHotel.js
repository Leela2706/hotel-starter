import React, { useState } from 'react';

const ManageHotel = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    facilities: '',
    size: '',
    maxPersons: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  

    console.log('Form submitted:', formData);

  setFormData({
    id: '',
    name: '',
    description: '',
    facilities: '',
    size: '',
    maxPersons: '',
  });
};

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-10 mt-10">Manage Hotel</h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="facilities" className="block text-sm font-medium text-gray-700">Facilities:</label>
          <input
            type="text"
            id="facilities"
            name="facilities"
            value={formData.facilities}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size (sq ft):</label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="maxPersons" className="block text-sm font-medium text-gray-700">Max Persons:</label>
          <input
            type="number"
            id="maxPersons"
            name="maxPersons"
            value={formData.maxPersons}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManageHotel;
