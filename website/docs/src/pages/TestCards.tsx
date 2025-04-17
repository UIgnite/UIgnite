import {Avatar, Tooltip} from '@pkgs/uignite';

const TestCards = () => {
  const avatars: {url: string; alt: string}[] = [
    {
      url: '/assets/avatars/aman.png',
      alt: 'Aman Gupta',
    },
    {
      url: '/assets/avatars/ram.jpg',
      alt: 'Ram Bhardwaj',
    },
    {
      url: '/assets/avatars/aditya.jpg',
      alt: 'Aditya Sharma',
    },
    {
      url: '/assets/avatars/saurav.png',
      alt: 'Saurav Jha',
    },
    {
      url: '/assets/avatars/rohit.jpg',
      alt: 'Rohit Jha',
    },
  ];

  return (
    <div className="flex items-center mt-6 pl-2 overflow-visible">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`relative transition-all duration-300 ease-in-out ${
            index !== 0 ? '-ml-7' : ''
          } hover:z-20`}
        >
          <Tooltip title={avatar.alt} options={{tooltipStyle: {width: 'auto'}}}>
            <Avatar
              url={avatar.url}
              alt={avatar.alt}
              className={`
            w-12 h-12 rounded-full object-cover
            ring-2 ring-white shadow-md
            hover:scale-110 hover:white-500
            transition-transform duration-300 ease-in-out
          `}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default TestCards;
