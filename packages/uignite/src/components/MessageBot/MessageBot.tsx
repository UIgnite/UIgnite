import {Avatar, Input} from '@pkgs/uignite';
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
  url = '/uignite-bot.png',
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
        className={`cursor-pointer z-[1000] size-14 ${themeColor} text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-105 transition-transform duration-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle />
      </button>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="z-[1000] fixed bottom-[6.5rem] right-8 w-80 h-[32rem] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className={`p-2 bg-neutral-800 text-white text-left items-center`}
          >
            <button
              className="p-1 rounded-full  transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/dark-mode-logo.png"
                alt="Close"
                className="w-28 h-8 object-cover"
              />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-4 overflow-y-auto space-y-3 bg-gray-50 scrollable-content">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                {msg.sender === 'user' && (
                  <Avatar
                    url="https://avatar.iran.liara.run/public"
                    alt="User"
                    className="mr-2 size-10"
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
                  <img src={url} className="ml-2 size-10" alt="" />
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-t-zinc-200 flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              className="flex-1 text-sm text-zinc-800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              className={`px-4 py-2 ${themeColor} text-white cursor-pointer rounded-md hover:opacity-90 transition`}
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
