import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      sender: 'user'
    };
    
    // Process input and generate response
    const response = generateResponse(inputValue.toLowerCase());
    
    const botMessage = {
      text: response,
      sender: 'bot'
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue('');
  };

  const generateResponse = (input) => {
    // Check for podcast/forum mentions using regex
    const podcastRegex = /podcast|episodes?|shows?/i;
    const forumRegex = /forum|discuss|community/i;

    if (podcastRegex.test(input)) {
      navigate('/podcast');
      return "I'm taking you to our podcast page where you can find all our episodes!";
    }

    if (forumRegex.test(input)) {
      navigate('/forum');
      return "I'm redirecting you to our forum where you can join discussions with other community members!";
    }

    // Keywords related to common struggles/topics
    const keywords = {
      'peer': 'We have several episodes featuring kids who overcame social challenges. I recommend checking out our interactive tutorials on building friendships and social skills.',
      'friend': 'Making friends can be challenging. Our tutorials cover topics like communication skills and building confidence in social situations.',
      'mentor': 'Looking for mentorship opportunities? We have resources about finding and connecting with mentors in various fields.',
      'connect': 'Building connections is important! Check out our episodes about kids who found their communities through shared interests.',
      'struggle': 'Every child faces unique challenges. Our platform offers guidance for various situations. Could you be more specific about the particular challenge?',
      'help': 'I\'m here to help! I can guide you to relevant episodes and resources. What specific area would you like support with?'
    };

    // Check for matching keywords
    for (const [key, value] of Object.entries(keywords)) {
      if (input.includes(key)) {
        return value;
      }
    }

    // Default response for unrecognized queries
    return "I'm focused on helping with child development and parenting topics. For other questions, you might want to try Google. How can I help you with your child's growth journey?";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:mb-0 mb-16">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1FA19C] text-white p-4 shadow-lg hover:bg-[#198786]" style={{borderRadius: '100%'}}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200">
        <div className="p-4 border-b bg-[#1FA19C] text-white rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-semibold">Chat with Us</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </div>
          <div className="p-4 h-[400px] overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg mt-4 p-2 max-w-[80%] ${
                  message.sender === 'user' ? 'bg-[#ABE8DD]' : 'bg-gray-200'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#1FA19C]"
              />
              <button
                type="submit"
                className="bg-[#1FA19C] text-white px-4 py-2 rounded-full hover:bg-[#198786]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
