import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo } from 'react';

const Layout = memo(function Layout() {
  return (
    <div className="bg-[#f5e5d0] min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main>
        <Outlet /> {/* This will render the respective page content */}
      </main>
    </div>
  );
});

export default Layout;
