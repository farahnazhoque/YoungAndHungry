'use client'

import { useState } from 'react'
import { Dialog} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../style/App.css'
import { Link } from 'react-router-dom';
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const podcast = [
    {
      id: 1,
      title: "Young Entrepreneur Special", 
      description: "Meet 12-year-old Sarah who started her own successful baking business",
      date: "March 15, 2024",
      duration: "45 min",
      imageSrc: `${import.meta.env.BASE_URL}episodes1ph.png`,
      imageAlt: "Episode 1 cover"
    },
    {
      id: 2,
      title: "Sports Prodigy Interview",
      description: "14-year-old Michael shares his journey to becoming a tennis champion", 
      date: "March 8, 2024",
      duration: "38 min",
      imageSrc: `${import.meta.env.BASE_URL}episode2ph.png`,
      imageAlt: "Episode 2 cover"
    },
    {
      id: 3,
      title: "Tech Whiz Kid",
      description: "11-year-old Emma talks about creating her first mobile app",
      date: "March 1, 2024",
      duration: "42 min", 
      imageSrc: `${import.meta.env.BASE_URL}episode3ph.png`,
      imageAlt: "Episode 3 cover"
    }
  ]

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<div className="bg-[#f5e5d0] min-w-[538px] min-h-screen">
  
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={`${import.meta.env.BASE_URL}Logo.png`}
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
          </Dialog.Panel>
        </Dialog>
      </header>

      <div
      
        className="relative isolate px-4 sm:px-6 pt-14 lg:px-8 bg-hero bg-cover bg-center bg-no-repeat min-h-[40vh] sm:min-h-[60vh] lg:min-h-[80vh] w-full"
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
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600">
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
        <div className="flex flex-col sm:mt-10 sm:flex-row sm:justify-center justify-center items-center gap-3 mb-16 w-full px-6">
          <div className="mt-10 sm:-mt-30">
            <Link
              to="/podcast"
              className="bg-[#EB8942] text-white font-bold px-6 py-3 md:px-10 md:py-5 md:text-xl rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:bg-[#1FA19C] transition"
              style={{fontFamily: "Jua, sans-serif"}}
            >
              PODCASTS
            </Link>
          </div>
          <div className="mt-6 sm:-mt-30">
            <Link
              to="/newsletter"
              className="bg-[#FFC72C] text-black font-bold px-6 py-3 md:px-10 md:py-5 md:text-xl rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:bg-[#1FA19C] transition"
              style={{fontFamily: "Jua, sans-serif"}}

            >
              NEWSLETTER
            </Link>
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

      <div className="bg-[#EB8942] py-12 border-b-5 border-t-5 border-black">
        <div className=" mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="underline decoration-dashed text-[50rem] font-bold text-center text-black" style={{marginBottom: '5rem', fontFamily: "Jua, sans-serif", fontSize: '5rem'}}>Latest Podcasts</h1>

          {/* Grid Layout for Podcasts */}
          <div className="mt-10 mb-16 mx-auto max-w-6xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {podcast.map((episode) => (
          <div
            key={episode.id}
            className="mt-4 gap-0.5 bg-white border-4 border-black rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Image with Border */}
            <div className="flex justify-center -mt-16">
              <div className="bg-white border-4 border-black rounded-2xl p-2 mb-2">
                <img
                  alt={episode.imageAlt}
                  src={episode.imageSrc}
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Episode Title */}
            <h3 className="mt-6 text-lg font-bold" style={{color: '#FA5857', fontFamily: "Jua, sans-serif"}}>
              {episode.title}
            </h3>

            {/* Episode Description */}
            <p className="text-gray-600 text-sm mt-2">
              {episode.description}
            </p>

            {/* Play Button */}
            <div className="mt-4">
            <Link
            to="/podcast"
            className="bg-[#FDDC59] text-black font-bold px-4 py-2 md:px-10 md:py-5 md:text-md rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:text-black hover:bg-[#FFC72C] transition cursor-pointer"
            style={{fontFamily: "Jua, sans-serif"}}
            >
            Listen Now
            </Link>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>

      
      <div
        className="relative isolate px-4 sm:px-6 pt-14 lg:px-8 bg-su bg-cover bg-center bg-no-repeat min-h-[40vh] sm:min-h-[60vh] lg:min-h-[80vh] w-full border-b-5 border-black"
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
        <div className="mx-auto max-w-2xl py-48 sm:py-64 lg:py-72 max-h-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600">
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
        <div className="flex flex-col sm:mt-10 sm:flex-row sm:justify-center justify-center items-center gap-3 mb-16 w-full px-6">
          <div className="-mt-15 sm:-mt-40 sm:-ml-70">
          <Link
            to="/signup"
            className="bg-[#EB8942] text-white font-bold px-6 py-3 md:px-10 md:py-5 md:text-xl rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:bg-[#FA5857] transition"
            style={{fontFamily: "Jua, sans-serif"}}

            >
            SIGN UP TODAY PARENTS AND TEACHERS!
          </Link>
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

      <div className="bg-[#EB8942] py-16 border-b-5 border-black">
        <div className=" mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="underline decoration-dashed text-[50rem] font-bold text-center text-black" style={{marginBottom: '5rem', fontFamily: "Jua, sans-serif", fontSize: '5rem'}}>About Us</h1>

          {/* Grid Layout for Podcasts */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex justify-center items-center">
              <img className="justify-center rounded-full w-96 h-96 animate-[spin_5s_linear_infinite]" src={`${import.meta.env.BASE_URL}LogoAbout.png`} alt="Young and Hungry Logo"/>

              </div>
              <div className="bg-[#ABE8DD] rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black p-8">
                <h2 className="text-3xl font-bold mb-4" style={{fontFamily: "Jua, sans-serif"}}>Welcome to Young and Hungry!</h2>
                <p className="text-lg leading-relaxed">
                Young and Hungry is hosted by Dr. Sean Young, a UC Irvine Emergency Medicine and Informatics professor, and his two kids.
                <br></br>
                <br></br>
                Join us as we dive into the stories of extraordinary children who are already leaving their mark on the world, whether they&apos;re budding entrepreneurs, elite athletes, or future leaders in their fields.
                <br></br>
                <br></br>
                Each episode features inspiring conversations with these talented kids, exploring their journeys, challenges, and the support that has helped them along the way. Whether you&apos;re a parent, a teacher, or a young achiever yourself, Young and Hungry is your go-to source for inspiration and encouragement.
                </p>
                <div className="flex justify-center items-center">
                <Link
                  to="/about"
                  className="bg-[#EB8942] text-white font-bold px-6 py-3 md:px-10 md:py-5 md:text-xl rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:text-black hover:bg-[#FFC72C] transition"
                  style={{fontFamily: "Jua, sans-serif"}}

                  >
                  LEARN MORE
                </Link>
              </div>
              </div>
             
              </div>
            </div>    
          </div>
        <footer className="bg-[#FFC72C] text-black py-4 text-center">
          <p>
            &copy; 2025 Young and Hungry. All rights reserved.
          </p>
        </footer>
  </div>

  )
}

export default Home;