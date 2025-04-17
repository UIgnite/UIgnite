import {FiGithub} from 'react-icons/fi';
import {FaDiscord} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="border-t-zinc-800 border-t mt-6"></div>
      <div className="max-w-[1200px] flex flex-col w-full py-5 justify-between mx-auto pb-12">
        <div className="mt-4 flex justify-between">
          {/* website */}
          <div className="flex flex-col gap-6">
            {/* logo */}
            <div className="w-40 h-12 transition-all duration-300 ease-in-out hover:scale-115  cursor-pointer -ml-4">
              <img
                alt="UIgnite"
                className="h-full w-full"
                src="/dark-mode-logo.png"
              />
            </div>

            {/* tagline */}
            <p className="text-gray-500 w-72">
              UIgnite brings together design, performance, and TypeScript — so
              you can ship faster with confidence.
            </p>

            {/* socials */}
            <div className="flex gap-4">
              <FiGithub className=" text-gray-500 hover:text-gray-50 size-5 cursor-pointer" />
              <FaDiscord className="text-gray-500 hover:text-gray-50 size-5 cursor-pointer" />
              <FaXTwitter className="text-gray-500 hover:text-gray-50 size-5 cursor-pointer" />
            </div>
          </div>

          {/* other sections like product getStarted legal */}
          <div className="flex gap-16 mt-3">
            <div className="text-zinc-400 flex flex-col gap-2">
              <h1 className="text-zinc-100 font-semibold">Quick Links</h1>
              <Link to={'/'} className="cursor-pointer hover:text-zinc-200">
                Get Started
              </Link>
              <Link
                to={'/feedback'}
                className="cursor-pointer hover:text-zinc-200"
              >
                Feedback
              </Link>
              <Link to={'/'} className="cursor-pointer hover:text-zinc-200">
                Contribute
              </Link>
            </div>
            <div className="text-zinc-400  flex flex-col gap-2">
              <h1 className="text-zinc-100 font-semibold">Product</h1>
              <Link
                to={'/components'}
                className="cursor-pointer hover:text-zinc-200"
              >
                Components
              </Link>
              <Link
                to={'/components/Accordion'}
                className="cursor-pointer hover:text-zinc-200"
              >
                Documentation
              </Link>
              <Link
                to={'/pricing'}
                className="cursor-pointer hover:text-zinc-200"
              >
                Pricing
              </Link>
            </div>
            <div className="text-zinc-400 flex flex-col gap-2">
              <h1 className="text-zinc-100 font-semibold">Legal</h1>
              <Link to={'/'} className="cursor-pointer hover:text-zinc-200">
                Privacy Policy
              </Link>
              <Link to={'/'} className="cursor-pointer hover:text-zinc-200">
                Terms of Service
              </Link>
              <Link to={'/'} className="cursor-pointer hover:text-zinc-200">
                Licence
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-zinc-800 border-t mt-6 mb-4"></div>
        <div className="flex justify-between">
          <div>© 2025 UIgnite. All rights reserved.</div>
          <div>
            Built with ❤️ by{' '}
            <span className="underline cursor-pointer">UIgnite</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
