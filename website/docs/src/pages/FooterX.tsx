// import React from 'react';
import {FiGithub} from 'react-icons/fi';
import {FaDiscord} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
const FooterX = () => {
  return (
    <div className="h-[550px] border py-24 w-full">
      {/*  footer*/}

      <div className="border-t-zinc-500 border-t">
        <div className="mt-4 flex justify-between px-12">
          {/* website */}
          <div>
            <div className="w-40 h-12 transition-all duration-300 ease-in-out hover:h-14 hover:w-44 cursor-pointer">
              <img
                alt="UIgnite"
                className="h-full w-full"
                src="/dark-mode-logo.png"
              />
            </div>

            <p className="text-gray-500 w-72">
              Cut the noise, keep the power — build stunning UIs with minimal
              setup and maximum speed.
              {/* UIgnite brings together design, performance, and TypeScript — so you can ship faster with confidence. */}
            </p>

            {/* socials */}
            <div className="flex gap-4">
              <FiGithub className="hover:text-blue-600 size-5" />
              <FaDiscord className="hover:text-blue-600 size-5" />
              <FaXTwitter className="hover:text-blue-600 size-5" />
            </div>
          </div>

          {/* other sections like resources docs legal */}
          <div className="flex gap-5">
            <div>
              <h1>Quick Links</h1>
              <p>Get Started</p>
              <p>Feedback</p>
              <p>Contribute</p>
            </div>
            <div>
              <h1>Product</h1>
              <p>Components</p>
              <p>Documentation</p>
              <p>Pricing</p>
            </div>
            <div>
              <h1>Legal</h1>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Licence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterX;
