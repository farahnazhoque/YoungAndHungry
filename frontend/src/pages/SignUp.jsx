import { useState } from 'react'


export default function Newsletter() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex flex-col bg-[#f5e5d0] min-h-screen relative pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
     
      <div className="bg-white rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black p-10 max-w-3xl mx-auto mt-16">
      <div className="mx-auto max-w-6xl text-center ">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#1FA19C] sm:text-5xl" style={{fontFamily: "Jua, sans-serif", color: "#1FA19C"}}>Sign Up</h2>
        <p className="mt-2 text-lg/8 text-gray-600"style={{fontFamily: "Roboto, sans-serif"}}>Sigup to be part of the Young and Hungry Family</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-12 max-w-3xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
            <label htmlFor="first-name" className="block text-md/8 font-semibold text-gray-900" style={{fontFamily: "Roboto, sans-serif"}}>
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#EB8942]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-md/8 font-semibold text-gray-900" style={{fontFamily: "Roboto, sans-serif"}}>
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                  className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#EB8942]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-md/8 font-semibold text-gray-900" style={{fontFamily: "Roboto, sans-serif"}}>
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#EB8942]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-md/8 font-semibold text-gray-900" style={{fontFamily: "Roboto, sans-serif"}}>
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#EB8942]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="role" className="block text-md/8 font-semibold text-gray-900" style={{fontFamily: "Roboto, sans-serif"}}>
              I am a
            </label>
            <div className="mt-2.5">
              <select
                id="role"
                name="role"
                className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-black focus:outline-2 focus:-outline-offset-2 focus:outline-[#EB8942]"
              >
                <option value="">Select role...</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
                
            </div>

            <label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-[#EB8942]" style={{color: "#FA5857"}}>
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <a
            href={"#"}
            className="bg-[#FA5857] text-white font-bold px-4 py-2 md:px-10 md:py-5 md:text-md rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:text-black hover:bg-[#FFC72C] transition"
            style={{fontFamily: "Jua, sans-serif"}}
            >
            SUBMIT
          </a>
        </div>
      </form>
      </div>
      <footer className="bg-[#FFC72C] text-black py-4 text-center w-full absolute bottom-0 right-0 border-t-4 border-black">
          <p>
            &copy; 2025 Young and Hungry. All rights reserved.
          </p>
      </footer>
    </div>
    
  )
}
