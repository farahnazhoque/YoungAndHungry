import { useState } from 'react'

export default function Podcast() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(33)
  const [currentEpisode, setCurrentEpisode] = useState({
    id: 1,
    title: "Young Entrepreneur Special",
    description: "Meet 12-year-old Sarah who started her own successful baking business",
    date: "March 15, 2024",
    duration: "45 min",
    imageSrc: `${import.meta.env.BASE_URL}episodes1ph.png`,
    imageAlt: "Episode 1 cover"
  })

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

  const handlePlayEpisode = (episode) => {
    setCurrentEpisode(episode)
    setIsPlaying(true)
    setProgress(0)
  }

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
      <div className="mx-auto max-w-6xl items-center justify-center text-center mt-16">
        <h1
          className="text-5xl underline decoration-dashed font-semibold tracking-tight text-black sm:text-5xl"
          style={{ fontFamily: 'Jua, sans-serif', color: '#1FA19C' }}
        >
          Podcasts
        </h1>
        <p className="mt-2 text-lg/8 text-gray-600" style={{fontFamily: "Roboto, sans-serif"}}>Join Dr. Sean Young and his kids, Melody & Maverick, as they interview extraordinary young achievers!</p>
      </div>

      <div className="bg-white rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black p-6 max-w-6xl mx-auto my-8">
        <div className="flex items-center gap-6">
          {/* Episode Image */}
          <div className="flex items-center gap-4">
            <img 
              src={currentEpisode.imageSrc}
              alt={currentEpisode.imageAlt}
              className="w-24 h-24 rounded-2xl border-3 border-black object-cover"
            />
            {/* Play Button - Next to image */}
            <a 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#EB8942] hover:bg-[#d67832] transition rounded-full w-12 h-12 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                {isPlaying ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                )}
              </svg>
            </a>
          </div>
          
          <div className="flex-1">
            {/* Episode Info */}
            <div className="mb-4">
              <h3 className="text-xl font-bold" style={{fontFamily: "Jua, sans-serif"}}>
                {currentEpisode.title}
              </h3>
              <p className="text-gray-600 text-sm" style={{fontFamily: "Roboto, sans-serif"}}>
                Uploaded {currentEpisode.date}
              </p>
            </div>

            {/* Dynamic Waveform Progress Bar */}
            <div className="relative w-full h-12 flex items-center">
              <div className="w-full h-full flex items-center gap-1">
                {[...Array(50)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 rounded-full transition-all duration-150 ${i/50 * 100 <= progress ? 'bg-[#EB8942]' : 'bg-gray-200'}`}
                    style={{
                      height: `${Math.sin((i/50) * Math.PI) * 150}%`,
                      minHeight: '6px'
                    }}
                  />
                ))}
              </div>
              {/* Time Indicators */}
              <div className="absolute -bottom-6 w-full flex justify-between text-sm text-gray-600" style={{fontFamily: "Roboto, sans-serif"}}>
                <span>0:00</span>
                <span>{currentEpisode.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <a
            onClick={() => handlePlayEpisode(episode)}
            className="bg-[#FDDC59] text-black font-bold px-4 py-2 md:px-10 md:py-5 md:text-md rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:text-black hover:bg-[#FFC72C] transition cursor-pointer"
            style={{fontFamily: "Jua, sans-serif"}}
            >
            Listen Now
            </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-[#FFC72C] text-black py-4 text-center w-full absolute bottom-0 right-0 border-t-4 border-black">
        <p>
          &copy; 2025 Young and Hungry. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
