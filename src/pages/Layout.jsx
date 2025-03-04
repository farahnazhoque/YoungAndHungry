import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo } from 'react';

const Layout = memo(function Layout() {
  return (
    <div className="bg-[#f5e5d0] min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          <Outlet /> {/* This will render the respective page content */}
        </div>
      </main>
    </div>
  );
});

export default Layout;
