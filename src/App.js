import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import ManageHotel from './components/ManageHotel';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/room/:id',
//     element: <RoomDetails />
//   },
//   {
//     path: '/manage-hotel',
//     element: <ManageHotel />,
//   }
// ])

const App = () => {
  return (
    <div>
        <Header /> {/* Always present */}
      {/* Define routes using Routes and Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/managehotel" element={<ManageHotel />} />
      </Routes>
      <Footer /> {/* Always present */}
    </div>
  );

};

export default App;
