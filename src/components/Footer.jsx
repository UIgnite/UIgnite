// components/Footer.jsx
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { useTheme } from "../hooks/theme";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`py-10 px-6 md:px-20 transition-all ${
        isDark
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-black"
      } shadow-lg`}
    >
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Description */}
        <div className="max-w-sm">
          <img
            src={isDark ? darkLogo : lightLogo}
            alt="Logo"
            className="h-10 w-auto mb-4"
          />
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-700"
            } text-shadow-md`}
          >
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
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 hover:bg-white hover:text-black hover:shadow-lg"
                    : "bg-gray-200 hover:bg-black hover:text-white hover:shadow-lg"
                }`}
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
              <h3
                className={`font-semibold mb-4 text-shadow-lg ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {section.title}
              </h3>
              <ul
                className={`space-y-2 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`transition-all hover:underline ${
                        isDark ? "hover:text-white" : "hover:text-black"
                      }`}
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
        className={`text-center text-sm mt-10 pt-4 border-t ${
          isDark
            ? "border-gray-800 text-gray-500"
            : "border-gray-300 text-gray-600"
        }`}
      >
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
