import { Disclosure, Menu} from '@headlessui/react'
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-27 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-8 w-8 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-8 w-8 group-data-[open]:block" />
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
            {/* Bell Icon */}
            <button
              type="button"
              className="relative rounded-full bg-[#1FA19C] p-3 text-[#f7ceb1] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-10 w-10" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4">
              <div>
                <Menu.Button className="relative flex rounded-full bg-[#1FA19C] text-sm ...">
                  {/* content */}
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-52 ...">
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-3 text-lg ${active ? 'bg-gray-100' : ''}`}>
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-3 text-lg ${active ? 'bg-gray-100' : ''}`}>
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-3 text-lg ${active ? 'bg-gray-100' : ''}`}>
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

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
    </Disclosure>
  );
}
