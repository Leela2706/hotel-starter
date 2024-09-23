import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
const ManageHotel = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    facilities: '',
    size: '',
    maxPersons: '',
    price: '',
    image: '',   
    imageLg: '',  
  });

  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm(); 
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.id) formErrors.id = 'ID is required';
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.description) formErrors.description = 'Description is required';
    if (!formData.facilities) formErrors.facilities = 'Facilities are required';
    if (!formData.size) formErrors.size = 'Size is required';
    if (!formData.maxPersons) formErrors.maxPersons = 'Max Persons is required';
    if (!formData.price) formErrors.price = 'Price is required';
    if (!formData.image) formErrors.image = 'Image URL is required';
    if (!formData.imageLg) formErrors.imageLg = 'Large Image URL is required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      await axios.post('http://localhost:3000/roomsData', formData);
      console.log('Form submitted:', formData);

      setFormData({
        id: '',
        name: '',
        description: '',
        facilities: '',
        size: '',
        maxPersons: '',
        price: '', 
        image: '',   
        imageLg: '', 
      });

      setIsFormValid(false);  
      
      navigate('/');  
    } else {
      console.log('Form is invalid.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-10 mt-10">Manage Hotel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
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
          {errors.facilities && <p className="text-red-500 text-sm">{errors.facilities}</p>}
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
          {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
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
          {errors.maxPersons && <p className="text-red-500 text-sm">{errors.maxPersons}</p>}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <div>
          <label htmlFor="imageLg" className="block text-sm font-medium text-gray-700">Image LG:</label>
          <input
            type="text"
            id="imageLg"
            name="imageLg"
            value={formData.imageLg}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.imageLg && <p className="text-red-500 text-sm">{errors.imageLg}</p>}
        </div>

        <button
          type="submit"
          className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormValid}   
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManageHotel;
