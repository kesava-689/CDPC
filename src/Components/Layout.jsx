import React from 'react';
import { Outlet } from 'react-router-dom';  // Outlet is used to render the child route components
import Navbar from './Navbar';  // Example: Shared Navbar component
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* Renders the matched child route component */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
