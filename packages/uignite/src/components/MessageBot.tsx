import {useState} from 'react';

interface MessageBotParams {
  orgName?: string;
  themeColor?: string;
  url?: string;
  alt?: string;
}
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const MessageBot = ({
  orgName = 'UIgnite',
  themeColor = 'bg-gray-800',
  url,
  alt,
}: MessageBotParams) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(1);
  // messages will be array of objects and objects should have a sender and the text
  const [messages, setMessages] = useState<Message[]>([]);
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {text: input, sender: 'user'};
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    // console.log(messages)

    const botResponse: Message = {
      text: `bot response ${count + 1} `,
      sender: 'bot',
    };
    setCount(count + 1);
    // console.log(count)
    setTimeout(() => {
      setMessages((currentMessages) => [...currentMessages, botResponse]);
      //   console.log(messages);
    }, 800);
  };

  return (
    <>
      <div className=" fixed bottom-5 right-5">
        <button
          className={`cursor-pointer w-16 h-16 ${themeColor} text-white rounded-full shadow-lg flex items-center justify-center text-2xl`}
          onClick={() => setIsOpen(!isOpen)}
        >
          💬
        </button>

        {isOpen && (
          <div className=" fixed bottom-23 right-8 w-80 h-120 bg-white rounded-lg ">
            <div className="flex flex-col ">
              <div
                className={`p-3 ${themeColor} text-white flex justify-between items-center rounded-t-lg`}
              >
                <span>{orgName}</span>
                <button
                  className=" cursor-pointer p-1 text-white text-sm font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <img src="circle-x.svg" alt="" />
                </button>
              </div>

              <div className="flex-1 p-3 overflow-y-auto bg-white">
                <p>Welcome to {orgName} chatbot </p>
              </div>
            </div>

            {/* Chat Messages  */}

            <div className="flex flex-col   p-3 overflow-y-auto space-y-2 min-h-[65%] max-h-[65%]">
              <div className="flex-grow"></div>
              {messages.map((msg, index) => (
                <>
                  <div className="flex">
                    {msg.sender === 'user' && (
                      <img
                        className="rounded-full  m-2 h-5 w-5 object-cover"
                        src={msg.sender == 'user' ? url : alt}
                        alt={alt}
                      />
                    )}
                    <div
                      key={index}
                      className={` text-black p-2 min-w-[80%] overflow-x-clip rounded-md  ${msg.sender === 'user' ? 'bg-gray-200 self-start text-left mr-30000 ' : 'bg-orange-200 self-end text-right ml-9 '}`}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === 'bot' && (
                      <img
                        className="rounded-full m-2 h-5 w-5 object-cover"
                        src={alt}
                        alt={alt}
                      />
                    )}
                  </div>
                </>
              ))}
            </div>

            <div className="flex justify-between p-3 border-t border-gray-300 ">
              <input
                type="text"
                placeholder="Type a message..."
                className=" p-2 text-black border rounded-md outline-none min-w-[80%]"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />

              <button
                className={`cursor-pointer ml-2 px-4 py-2 ${themeColor} text-white rounded-md`}
                onClick={sendMessage}
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessageBot;
