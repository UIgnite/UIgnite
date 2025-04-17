import {MessageCircle} from 'lucide-react';
import {useState} from 'react';

export interface MessageBotParams {
  orgName?: string;
  themeColor?: string;
  url?: string;
  alt?: string;
}

export interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const MessageBot = ({
  orgName = 'UIgnite',
  themeColor = 'bg-blue-600',
  url = '/assets/logo.webp',
  // alt,
}: MessageBotParams) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Hi I am ${orgName} bot. How can I help you?`,
      sender: 'bot',
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {text: input, sender: 'user'};
    const botMessage: Message = {
      text: `bot response ${count + 1}`,
      sender: 'bot',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setCount(count + 1);

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <div className="z-[1000] fixed bottom-5 right-5">
      {/* Overlay: Jab isOpen true ho, toh poori screen dark ya blur karne ke liye */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[1000]"
          onClick={() => setIsOpen(false)} // Overlay click se chatbot close hoga
        ></div>
      )}

      {/* Floating Button */}
      <button
        className={`cursor-pointer z-[1000] w-16 h-16 ${themeColor} text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-105 transition-transform duration-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle />
      </button>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="z-[1000] fixed bottom-[6.5rem] right-8 w-80 h-[32rem] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className={`p-4 ${themeColor} text-white text-left items-center`}
          >
            <button
              className="p-1 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <img src="/assets/logo.webp" alt="Close" className="w-6 h-6" />
            </button>
            <span className="text-lg font-semibold">{orgName}</span>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                {msg.sender === 'user' && (
                  <img
                    className="rounded-full h-6 w-6 object-cover mr-2"
                    src={url || 'https://avatar.iran.liara.run/public'}
                    alt="User"
                  />
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 text-sm rounded-md shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gray-200 text-black rounded-bl-none'
                      : 'bg-blue-100 text-black rounded-br-none'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'bot' && (
                  <img
                    className="rounded-full h-6 w-6 object-cover ml-2"
                    src={'https://avatar.iran.liara.run/public'}
                    alt="Bot"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border border-t border-  flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border dark:border-gray-400 text-black rounded-md dark:text:black text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              className={`px-4 py-2 ${themeColor} text-white rounded-md hover:opacity-90 transition`}
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export {MessageBot};
