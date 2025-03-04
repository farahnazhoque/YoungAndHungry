import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo } from 'react';

const Layout = memo(function Layout() {
  return (
    <div className="bg-[#f5e5d0] min-w-[400px] flex flex-col items-center min-h-screen">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="w-full flex justify-center items-center"> {/* Added items-center */}
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center"> {/* Added flex-col and items-center */}
          <div className="py-4 sm:py-6 w-full flex justify-center">
            <Outlet /> {/* This will render the respective page content */}
          </div>
        </div>
      </main>
      <footer className="bg-[#FFC72C] text-black py-4 text-center w-full absolute bottom-0 right-0 border-t-4 border-black">
          <p>
            &copy; 2025 Young and Hungry. All rights reserved.
          </p>
      </footer>
    </div>
  );
});

export default Layout;
