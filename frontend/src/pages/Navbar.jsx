import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" style={{ backgroundColor: '#1FA19C', fontFamily: 'Jua, sans-serif', borderBottom: '2px solid #372F35' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-27 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-8 w-8 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-8 w-8 group-data-[open]:block" />
            </DisclosureButton>
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
                {navigation.map((item) => (
                 <a
                 key={item.name}
                 href={item.href}
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
               </a>
               
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
                <MenuButton className="relative flex rounded-full bg-[#1FA19C] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-10 w-10 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-2 px-4 pb-4 pt-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-[#EB8942] text-white' : 'text-[#f7ceb1] hover:bg-[#EB8942] hover:text-white',
                'block rounded-md px-4 py-3 text-lg font-semibold'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
