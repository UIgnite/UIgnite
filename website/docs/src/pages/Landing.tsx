import {Button} from '@pkgs/uignite';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black text-white">
        <h1 className="text-4xl font-bold tracking-wide text-orange-500">
          UIgnite
        </h1>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="bg-gray-50 text-black hover:bg-gray-100"
          >
            Docs
          </Button>
          <Button className="bg-gray-50 text-center hover:bg-gray-100">
            <a href="https://github.com/rambhardwajj/UIgnite" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width="18px"
                height="18px"
                alt="github"
              />
            </a>
          </Button>
        </div>
      </div>

      {/* Main Page  */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="py-10">
          {/* <VideoPlayer /> */}
          <div>I have the right to be here (Video Player)</div>
        </div>
        <Button className="bg-gray-50 text-black hover:bg-gray-100">
          <Link to="/components">Browse Components</Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
