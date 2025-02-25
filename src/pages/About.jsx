import { EnvelopeIcon } from '@heroicons/react/24/outline'

const hosts = [
    {
      id: 1,
      name: 'Melody',
      href: '#',
      description: "Dr. Young's daughter and co-host. Melody is here to dive deep into stories that inspire and spark imagination!",
      imageSrc: `${import.meta.env.BASE_URL}MelodyPlaceholder.png`,
      imageAlt: 'Melody',
    },
    {
      id: 2,
      name: 'Dr. Sean Young',
      href: 'https://www.informatics.uci.edu/explore/faculty-profiles/sean-young/',
      description: 'Dr. Sean Young is a scientist and professor at the University of California, Irvine who studies how to use technology to change human behavior. His work focuses on health, medicine, and public health issues.',
      imageSrc: 'http://www.informatics.uci.edu/wp-content/uploads/SeanYoung.jpg',
      imageAlt: 'Dr. Sean Young',
    },
    {
      id: 3,
      name: 'Maverick',
      href: '#',
      description: "Dr. Young's son and co-host. A future innovator in the making, Maverick's curiosity and energy are unmatched!",
      imageSrc: `${import.meta.env.BASE_URL}MaverickPlaceholder.png`,
      imageAlt: 'Maverick', 
    },
  ]
  

export default function About() {
  return (
    
    <div className="bg-[#f5e5d0] min-h-screen flex flex-col">
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
      <div className="mx-auto max-w-6xl text-center mt-16">
        <h1 className="text-5xl underline decoration-dashed font-semibold tracking-tight text-balance text-black sm:text-5xl" style={{fontFamily: "Jua, sans-serif", color: "#1FA19C"}}>About Young and Hungry</h1>
      </div>
      <div className="mx-auto max-w-7xl mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 bg-white rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black p-8">
        <h2 className="text-3xl font-bold mb-4 text-center col-span-2" style={{fontFamily: "Roboto, sans-serif", color: "#1FA19C"}}>How we started!</h2>

          <div className="flex justify-center items-center">
            <img className="justify-center rounded-lg w-100 h-86" src={`${import.meta.env.BASE_URL}AboutUsPlaceholder.png`} alt="Young and Hungry Logo"/>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Young and Hungry is hosted by Dr. Sean Young, a UC Irvine Emergency Medicine and Informatics professor, and his two kids.
              <br></br>
              <br></br>
              Join us as we dive into the stories of extraordinary children who are already leaving their mark on the world, whether they&apos;re budding entrepreneurs, elite athletes, or future leaders in their fields.
              <br></br>
              <br></br>
              Each episode features inspiring conversations with these talented kids, exploring their journeys, challenges, and the support that has helped them along the way. Whether you&apos;re a parent, a teacher, or a young achiever yourself, Young and Hungry is your go-to source for inspiration and encouragement.
            </p>
          </div>
        </div>
      </div>

      <div className=" mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-6xl text-center mt-16 mb-16">
            <h1 className="text-5xl underline decoration-dashed font-semibold tracking-tight text-balance text-black sm:text-5xl" style={{fontFamily: "Jua, sans-serif", color: "#1FA19C"}}>Meet the Hosts!</h1>
        </div>

          {/* Grid Layout for Host */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hosts.map((host) => (
              <div
                key={host.id}
                className={`mt-4 gap-0.5 bg-white border-4 border-black rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105 ${host.id === 2 ? '' : 'scale-88'}`}
              >
                {/* Image with Border */}
                <div className="flex justify-center -mt-16">
                  <a href={host.href} className={`bg-white border-4 border-black rounded-lg p-2 ${host.id === 2 ? 'mb-2' : 'mb-2'}`}>
                    <img
                      alt={host.imageAlt}
                      src={`${import.meta.env.BASE_URL}${host.imageSrc}`}
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                  </a>
                </div>

                {/* Host Title */}
                <h3 className="mt-6 text-lg font-bold" style={{color: '#FA5857', fontFamily: "Jua, sans-serif"}}>
                  {host.name}
                </h3>

                {/* Host Description */}
                <p className="text-gray-600 text-sm mt-2">
                  {host.description}
                </p>

                {/* "Learn More" Button */}
                <div className={`${host.id === 2 ? 'mt-6' : 'mt-2'}`}>
                  {host.id === 2 && (
                    <a
                      href={host.href}
                      className="bg-[#FFC72C] text-black font-bold px-6 py-3 rounded-full border-2 border-black shadow-md hover:bg-[#e6b722] transition"
                      style={{fontFamily: "Jua, sans-serif"}}
                    >
                      LEARN MORE
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      {/* Heading */}
      <div className="mx-auto max-w-6xl items-center justify-center text-center">
        <h1
          className="text-5xl underline decoration-dashed font-semibold tracking-tight text-black sm:text-5xl"
          style={{ fontFamily: 'Jua, sans-serif', color: '#1FA19C' }}
        >
          Contact Us
        </h1>
      </div>

      {/* Contact Card */}
      <div className="mb-16 mx-auto max-w-2xl mt-10 bg-white border-4 justify-center items-center border-black rounded-lg p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <p className="text-lg mb-6 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Want to stay in touch? You can also reach us at:
        </p>

        {/* Email */}
        <div className="flex items-center justify-center mb-4">
          {/* Mail Icon (Heroicons) */}
          <img
            src={`${import.meta.env.BASE_URL}Email.png`}
            alt="Mail Icon"
            className="w-10 h-8 mr-3"
          />
          <a href="mailto:emailhere@email.com" className="text-black hover:text-[#1FA19C] transition" style={{ fontFamily: 'Roboto, sans-serif' }}>
            emailhere@email.com
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center justify-center mb-4">
          {/* Placeholder for Instagram Icon */}
          <img
            src={`${import.meta.env.BASE_URL}Instagram.png`}
            alt="Instagram"
            className="w-10 h-8 mr-3"
          />
          <a href="https://www.instagram.com/youngandhungryk_12" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#1FA19C] transition" style={{ fontFamily: 'Roboto, sans-serif' }}>
            @youngandhungryk_12
          </a>
        </div>

        {/* TikTok */}
        <div className="flex items-center justify-center">
          {/* Placeholder for TikTok Icon */}
          <img
            src={`${import.meta.env.BASE_URL}TikTok.png`}
            alt="TikTok"
            className="w-10 h-8 mr-3"
          />
          <a href="https://www.tiktok.com/@youngandhungry_12" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#1FA19C] transition" style={{ fontFamily: 'Roboto, sans-serif' }}>
            @youngandhungry_12
          </a>
        </div>
      </div>
      <footer className="mt-auto bg-[#FFC72C] text-black py-4 text-center border-t-4 border-black">
        <p>&copy; 2025 Young and Hungry. All rights reserved.</p>
      </footer>
    </div>
  )
}
