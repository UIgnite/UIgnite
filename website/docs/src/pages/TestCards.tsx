import {FiGithub, FiLinkedin} from 'react-icons/fi';
import {FaDiscord, FaInstagram} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {SlSocialYoutube} from 'react-icons/sl';
import {Link} from 'react-router-dom';
import {useTheme} from '@pkgs/uignite';

const TestCards = () => {
  const {theme} = useTheme();
  return (
    <div className="w-full h-full">
      <div className="dark:border-t-zinc-800 border-t mt-6 border-t-zinc-300"></div>
      <div className="max-w-[1200px] flex flex-col w-full py-5 justify-between mx-auto pb-5">
        <div className="mt-4 flex justify-between">
          {/* website */}
          <div className="flex flex-col gap-6">
            {/* logo */}
            <div className="w-56 h-12 transition-all duration-300 ease-in-out hover:scale-105  cursor-pointer -ml-4">
              <img
                alt="UIgnite"
                className="h-full w-full"
                src={
                  theme === 'dark'
                    ? '/chaicode-white.png'
                    : '/chaicode-black.png'
                }
              />
            </div>

            {/* tagline */}
            <p className="text-gray-600 dark:text-zinc-400 w-72">
              Home for programmers
            </p>

            {/* socials */}
            <div className="flex gap-4 text-zinc-500 ">
              <a href="https://github.com/hiteshchoudhary" target="_blank">
                <FiGithub className="transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-orange-500 hover:text-zinc-700 size-5 cursor-pointer" />
              </a>

              <a href="https://discord.com/invite/WDrH3zuWFb" target="_blank">
                <FaDiscord className="transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-orange-500 hover:text-zinc-700 size-5 cursor-pointer" />
              </a>

              <a href="https://x.com/hiteshdotcom" target="_blank">
                <FaXTwitter className="transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-orange-500 hover:text-zinc-700 size-5 cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/in/hiteshchoudhary"
                target="_blank"
              >
                <FiLinkedin className="transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-orange-500 hover:text-zinc-700 size-5 cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/hiteshchoudharyofficial"
                target="_blank"
              >
                <FaInstagram className="transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-orange-500 hover:text-zinc-700 size-5 cursor-pointer" />
              </a>

              <a href="https://www.youtube.com/@chaiaurcode" target="_blank">
                <SlSocialYoutube className="transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-orange-500 hover:text-zinc-700 size-5 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* other sections like product getStarted legal */}
          <div className="flex gap-16 mt-3">
            <div className="text-zinc-500 dark:text-zinc-400 flex flex-col gap-2">
              <h2 className="text-zinc-800 dark:text-zinc-100 font-semibold">
                Product
              </h2>
              <a
                href="https://courses.chaicode.com/learn"
                target="_blank"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Courses
              </a>
              <a
                href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
                target="_blank"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Cohort
              </a>
              <a
                href="https://courses.chaicode.com/learn/batch/about?bundleId=226894"
                target="_blank"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Coding Hero
              </a>
              <a
                href="https://masterji.co/login"
                target="_blank"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                MasterJI
              </a>
            </div>
            <div className="text-zinc-500 dark:text-zinc-400 flex flex-col gap-2">
              <h2 className="text-zinc-800 dark:text-zinc-100 font-semibold">
                Resources
              </h2>

              <a
                href="https://freeapi.app/"
                target="_blank"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                FreeAPI
              </a>
              <a
                href="https://chaidocs.vercel.app/"
                target="_blank"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                ChaiDocs
              </a>
            </div>

            <div className="text-zinc-500 dark:text-zinc-400 flex flex-col gap-2">
              <h2 className="text-zinc-800 dark:text-zinc-100 font-semibold">
                Legal
              </h2>
              <a
                href="#"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Pricing Policy
              </a>
              <a
                href="#"
                className="cursor-pointer dark:hover:text-orange-400 hover:text-zinc-700"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        <div className="dark:border-t-zinc-800 border-t border-t-zinc-300 mt-8 mb-6"></div>
        <div className="flex justify-between text-zinc-800 dark:text-zinc-300">
          <div className="">© 2025 ChaiCode. All rights reserved.</div>
          <div>
            Built with ❤️ by{' '}
            <span className="underline cursor-pointer">ChaiCode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCards;
