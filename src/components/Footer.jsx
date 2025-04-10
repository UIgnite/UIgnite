import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const socialIconsMap = {
  linkedin: <FaLinkedinIn />,
  twitter: <FaXTwitter />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
};

const Footer = ({
  lightLogo,
  darkLogo,
  description = "",
  socials = [],
  sections = [],
  copyright,
}) => {
  return (
    <footer className="!dark py-10 px-6 md:px-20 transition-all shadow-lg">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Description */}
        <div className="max-w-sm">
          <img
            src={lightLogo}
            alt="Logo"
            className="h-10 w-auto mb-4 block dark:hidden"
          />
          <img
            src={darkLogo}
            alt="Logo"
            className="h-10 w-auto mb-4 hidden dark:block"
          />

          <p className="!dark text-sm text-gray-700 dark:text-gray-400 text-shadow-md">
            {description}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="!dark w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 
                  bg-gray-200 hover:bg-black hover:text-white hover:shadow-lg 
                  dark:bg-gray-900 dark:hover:bg-white dark:hover:text-black"
              >
                {socialIconsMap[social.type]}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="!dark font-semibold mb-4 text-shadow-lg text-black dark:text-white">
                {section.title}
              </h3>
              <ul className="!dark space-y-2 text-gray-600 dark:text-gray-400">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="!dark transition-all hover:underline hover:text-black dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div
        className="!dark text-center text-sm mt-10 pt-4 border-t 
        border-gray-300 text-gray-600 
        dark:border-gray-800 dark:text-gray-500"
      >
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
