import {cn} from '@/utils/lib';
import {useTheme} from '@pkgs/uignite';
import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {FaDiscord} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

function Footer() {
  const footerProps = {
    logoDark:
      'https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059613/uignite/xfj6lgzo51ov1nv6bben.png',
    logoLight:
      'https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/myjfxbyt80uuxvkbpjqu.png',
    tagline: ` UIgnite brings together design, performance, and TypeScript — so you can ship faster with confidence.`,
    socialLinks: [
      {
        icon: <FiGithub className="icon" />,
        href: 'https://github.com/UIgnite/UIgnite',
        label: 'GitHub',
      },
      {
        icon: <FaDiscord className="icon" />,
        href: 'https://discord.com/invite/WDrH3zuWFb',
        label: 'Discord',
      },
      {
        icon: <FaXTwitter className="icon" />,
        href: `https://x.com/UIgnite_`,
        label: 'X',
      },
    ],
    linkSections: [
      {
        title: 'Quick Links',
        links: [
          {
            name: 'Get Started',
            to: '/components/Installation',
          },
          {
            name: 'Feedback',
            to: '/feedback',
          },
        ],
      },
      {
        title: 'Product',
        links: [
          {
            name: 'Components',
            to: '/components/Accordion',
          },
          {
            name: 'Templates',
            to: '/templates',
          },
          {
            name: 'Pricing',
            to: '/pricing',
          },
        ],
      },
      {
        title: 'Legal',
        links: [
          {name: 'Terms of Service', to: '/'},
          {name: 'Privacy Policy', to: '/'},
          {name: 'Pricing Policy', to: '/'},
          {name: 'Refund Policy', to: '/'},
        ],
      },
    ],
    copyrightText: 'UIgnite',
    builtByText: 'UIgnite',
    socialLinksStyle: 'hover:text-blue-600 dark:hover:text-gray-50',
    linkStyle: 'dark:hover:text-zinc-200 hover:text-blue-600',
  };

  return <FooterComponent {...footerProps} />;
}

export default Footer;

interface FooterProps {
  logoDark: string;
  logoLight: string;
  tagline: string;
  socialLinks: {
    icon: JSX.Element;
    href: string;
    label: string;
  }[];
  socialLinksStyle?: string;
  linkSections: {
    title: string;
    links: {
      name: string;
      to: string;
    }[];
  }[];
  linkStyle?: string;
  copyrightText: string;
  builtByText: string;
  className?: string;
}

const FooterComponent = ({
  logoDark,
  logoLight,
  tagline,
  socialLinks,
  socialLinksStyle,
  linkSections,
  linkStyle,
  copyrightText,
  builtByText,
  className = '',
}: FooterProps) => {
  const {theme} = useTheme();

  return (
    <footer className={`w-full px-4 sm:px-8 md:px-10 py-6 ${className}`}>
      <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row md:justify-between gap-10 flex-wrap">
        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-md">
          <div className="w-48 h-12 hover:scale-105 transition-all cursor-pointer -ml-10">
            <img
              alt="Logo"
              className="h-full w-full object-contain"
              src={theme === 'dark' ? logoDark : logoLight}
            />
          </div>

          <p className="text-sm text-gray-600 dark:text-zinc-400">{tagline}</p>

          {/* Social links */}
          <div className="flex gap-4 text-zinc-500">
            {socialLinks.map(({icon, href, label}) => (
              <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                rel="noopener noreferrer"
                className={cn(
                  'hover:text-zinc-800 dark:hover:text-zinc-100 hover:scale-105 transition-all',
                  socialLinksStyle
                )}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-10 text-sm text-zinc-500 dark:text-zinc-400">
          {linkSections.map(({title, links}) => (
            <div key={title} className="min-w-[140px] flex flex-col gap-2">
              <h3 className="text-zinc-800 dark:text-zinc-100 font-semibold">
                {title}
              </h3>
              {links.map(({name, to}) => (
                <Link
                  key={name}
                  to={to}
                  rel="noopener noreferrer"
                  className={cn(
                    'hover:text-zinc-700 dark:hover:text-zinc-100',
                    linkStyle
                  )}
                >
                  {name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-800 dark:text-zinc-300 gap-2">
          <div>© 2025 {copyrightText}. All rights reserved.</div>
          <div>
            <span>Built with ❤️ by </span>
            <span className="underline cursor-pointer">{builtByText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
