import { useState, useEffect } from 'react'

export default function Forum() {
  const [forums, setForums] = useState(() => {
    const savedForums = localStorage.getItem('forums')
    if (savedForums) {
      return JSON.parse(savedForums)
    }
    return [
      {
        id: 1,
        title: "Young Entrepreneur Special", 
        description: "Meet 12-year-old Sarah who started her own successful baking business",
        date: "March 15, 2024",
        imageSrc: `${import.meta.env.BASE_URL}episodes1ph.png`,
        imageAlt: "Episode 1 cover",
        comments: [
          {
            id: 1,
            text: "What inspired Sarah to start baking?",
            author: "JohnDoe",
            timestamp: new Date(2024, 2, 15, 10, 30).getTime()
          }
        ]
      },
      {
        id: 2,
        title: "Sports Prodigy Interview",
        description: "14-year-old Michael shares his journey to becoming a tennis champion", 
        date: "March 8, 2024",
        imageSrc: `${import.meta.env.BASE_URL}episode2ph.png`,
        imageAlt: "Episode 2 cover",
        comments: [
          {
            id: 1,
            text: "How many hours does Michael practice daily?",
            author: "TennisLover",
            timestamp: new Date(2024, 2, 8, 15, 45).getTime()
          }
        ]
      },
      {
        id: 3,
        title: "Tech Whiz Kid",
        description: "11-year-old Emma talks about creating her first mobile app",
        date: "March 1, 2024",
        imageSrc: `${import.meta.env.BASE_URL}episode3ph.png`,
        imageAlt: "Episode 3 cover",
        comments: [
          {
            id: 1,
            text: "What programming language did Emma use?",
            author: "TechGuru",
            timestamp: new Date(2024, 2, 1, 9, 15).getTime()
          }
        ]
      }
    ]
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredForums, setFilteredForums] = useState(forums)
  const [selectedForum, setSelectedForum] = useState(null)
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    localStorage.setItem('forums', JSON.stringify(forums))
  }, [forums])

  const getTimeSinceLastComment = (comments) => {
    if (!comments || comments.length === 0) return 'No comments yet'
    const lastComment = comments.reduce((latest, current) => 
      current.timestamp > latest.timestamp ? current : latest
    )
    const hours = Math.floor((Date.now() - lastComment.timestamp) / (1000 * 60 * 60))
    return `${hours}h ago`
  }

  const handleAddComment = (forumId) => {
    if (!newComment.trim()) return

    const updatedForums = forums.map(forum => {
      if (forum.id === forumId) {
        return {
          ...forum,
          comments: [...forum.comments, {
            id: forum.comments.length + 1,
            text: newComment,
            author: "CurrentUser", // In a real app, get from auth
            timestamp: Date.now()
          }]
        }
      }
      return forum
    })

    setForums(updatedForums)
    setNewComment('')
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
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 items-center justify-center text-center mt-8 sm:mt-16">
        <h1
          className="text-3xl sm:text-5xl underline decoration-dashed font-semibold tracking-tight text-black"
          style={{ fontFamily: 'Jua, sans-serif', color: '#1FA19C' }}
        >
          Discussion Forums
        </h1>
        <p className="mt-2 text-base sm:text-lg/8 text-gray-600" style={{fontFamily: "Roboto, sans-serif"}}>Join the conversation about our amazing young achievers!</p>
      </div>

      <div className="bg-white rounded-ful shadow-[8px_8px_0px_rgba(0,0,0,1)] justify-center items-center border-4 border-black p-2 mx-4 sm:mx-auto my-6 max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search forums..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#1FA19C] focus:border-[#1FA19C]"
              style={{fontFamily: "Roboto, sans-serif"}}
              onChange={(e) => {
                const query = e.target.value.toLowerCase();
                setSearchQuery(query);
                const results = forums.filter(forum => {
                  return (
                    forum.title.toLowerCase().includes(query) ||
                    forum.description.toLowerCase().includes(query)
                  );
                });
                setFilteredForums(results);
              }}
              value={searchQuery}
            />
            <button 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#EB8942] hover:bg-[#d67832] transition rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-10 mb-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredForums.map((forum) => (
          <div
            key={forum.id}
            className="mt-4 gap-0.5 bg-white border-4 border-black rounded-xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedForum(forum)}
          >
            <div className="flex justify-center -mt-12 sm:-mt-16">
              <div className="bg-white border-4 border-black rounded-2xl p-2 mb-2">
                <img
                  alt={forum.imageAlt}
                  src={forum.imageSrc}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                />
              </div>
            </div>

            <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold" style={{color: '#FA5857', fontFamily: "Jua, sans-serif"}}>
              {forum.title}
            </h3>

            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              {forum.description}
            </p>

            <div className="mt-4 sm:mt-6 flex justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <span className="text-sm sm:text-base">{forum.comments.length}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-sm sm:text-base">{getTimeSinceLastComment(forum.comments)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedForum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] sm:max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold" style={{fontFamily: "Jua, sans-serif"}}>{selectedForum.title}</h2>
              <button onClick={() => setSelectedForum(null)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {selectedForum.comments.map(comment => (
                <div key={comment.id} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm sm:text-base">{comment.author}</span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base">{comment.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1FA19C]"
              />
              <button
                onClick={() => handleAddComment(selectedForum.id)}
                className="bg-[#1FA19C] text-white px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-[#1a8a86] transition"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
