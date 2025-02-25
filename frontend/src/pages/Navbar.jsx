import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', to: '/home', current: false }, // Changed to /home path to match Home.jsx route
  { name: 'Podcast', to: '/podcast', current: false },
  { name: 'Newsletter', to: '/newsletter', current: false },
  { name: 'Forum', to: '/forum', current: false },
  { name: 'About', to: '/about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();

  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.to
  }));

  return (
    <Disclosure as="nav" style={{ backgroundColor: '#1FA19C', fontFamily: 'Jua, sans-serif', borderBottom: '5px solid #372F35',  }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-27 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex shrink-0 items-center">
                  <img
                    alt="Young and Hungry"
                    src="../../public/logo.png"
                    className="h-18 w-auto"
                  />
                </div>

                {/* Navigation Links */}
                <div className="hidden sm:ml-8 sm:block">
                  <div className="flex space-x-6">
                    {updatedNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        aria-current={item.current ? 'page' : undefined}
                        className="rounded-md px-4 py-3 text-2xl font-semibold"
                        style={{
                          backgroundColor: item.current ? "#EB8942" : "transparent",
                          border: item.current ? "2px solid #372F35" : "none",
                          color: item.current ? "white" : "#f7ceb1",
                          fontFamily: "Jua, sans-serif"
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side (Notifications & Profile) */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
                {/* Login/Signup Button */}
                <Link
                  to="/login"
                  className="relative rounded-full bg-[#1FA19C] p-3 text-[#f7ceb1] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Login or Sign up</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f7ceb1" className="h-10 w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-4 pb-4 pt-3">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-[#EB8942] text-white' : 'text-[#f7ceb1] hover:bg-[#EB8942] hover:text-white',
                    'block rounded-full px-4 py-3 text-lg font-semibold w-full text-center'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
