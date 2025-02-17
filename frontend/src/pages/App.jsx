'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../style/App.css'
import NavBar from './Navbar'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#f5e5d0]">
      <NavBar />
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div
          className="relative isolate px-4 sm:px-6 pt-14 lg:px-8 bg-cover bg-center bg-no-repeat min-h-[40vh] sm:min-h-[60vh] lg:min-h-[80vh] w-full"
          style={{ 
            backgroundImage: "url('../../public/BackgroundHero.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat"
          }}
        >

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            &nbsp;
            </div>
          </div>
          <div className="text-center flex flex-col items-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl min-h-[calc(1.25em)]">
              &nbsp;
            </h1>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl min-h-[calc(1.25em)]">
              &nbsp;
            </h1>
            <div className="mt-4 flex items-center justify-center gap-x-6"> {/* Changed mt-10 to mt-4 */}
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
              </a>
            </div>
          </div>

        </div>
        <div className="flex justify-center gap-3 mb-16">
        <div className="mt-6">
            <a
              href={"#"}
              className="bg-[#EB8942] text-white font-bold px-6 py-3 rounded-full border-2 border-black shadow-md hover:bg-[#e6b722] transition"
            >
              PODCASTS
            </a>
          </div>
          <div className="mt-6">
            <a
              href={"#"}
              className="bg-[#FFC72C] text-black font-bold px-6 py-3 rounded-full border-2 border-black shadow-md hover:bg-[#e6b722] transition"
            >
              SEE MORE
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#1FA19C] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="bg-[#EB8942] py-16">
        <div className=" mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900" style={{marginBottom: '5rem', fontFamily: "Jua, sans-serif"}}>Latest Podcasts</h1>

          {/* Grid Layout for Podcasts */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className=" mt-4 bg-white border-4 border-black rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                {/* Image with Border */}
                <div className="flex justify-center -mt-16">
                  <a href={product.href} className="bg-white border-4 border-black rounded-lg p-2">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                  </a>
                </div>

                {/* Podcast Title */}
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  <a href={product.href} className="hover:text-[#EB8942]">
                    {product.name}
                  </a>
                </h3>

                {/* Podcast Description */}
                <p className="text-gray-600 text-sm mt-2">
                  Mindy and Guy Raz head to the community swimming pool to try out for his DREAM JOB! 
                  There’s just one problem; all the other applicants are SEA LIONS! Classic mix-up!
                </p>

                {/* "See More" Button */}
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="bg-[#FFC72C] text-black font-bold px-6 py-3 rounded-full border-2 border-black shadow-md hover:bg-[#e6b722] transition"
                  >
                    SEE MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;