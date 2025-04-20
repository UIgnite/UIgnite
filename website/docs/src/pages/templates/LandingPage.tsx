'use client';

import {
  Button,
  Footer,
  MessageBot,
  Navbar,
  ThemeToggleBtn,
  VideoPlayer,
} from '@pkgs/uignite';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@pkgs/uignite';

import {FiGithub, FiLinkedin} from 'react-icons/fi';
import {FaDiscord, FaInstagram} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {SlSocialYoutube} from 'react-icons/sl';

type MiniTemplateCardProps = {
  title: string;
  description: string;
  priceText: string;
  onBuyClick?: () => void;
};

const footerProps = {
  logoDark:
    'https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/dtst2deim1sgv2g5dcm6.png',
  logoLight:
    'https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/gzfqtahpfc93ybugfiwr.png',
  tagline: 'Home for programmers',
  socialLinks: [
    {
      icon: <FiGithub className="icon" />,
      href: 'https://github.com/hiteshchoudhary',
      label: 'GitHub',
    },
    {
      icon: <FaDiscord className="icon" />,
      href: 'https://discord.com/invite/WDrH3zuWFb',
      label: 'Discord',
    },
    {
      icon: <FaXTwitter className="icon" />,
      href: 'https://x.com/hiteshdotcom',
      label: 'X',
    },
    {
      icon: <FiLinkedin className="icon" />,
      href: 'https://www.linkedin.com/in/hiteshchoudhary',
      label: 'LinkedIn',
    },
    {
      icon: <FaInstagram className="icon" />,
      href: 'https://www.instagram.com/hiteshchoudharyofficial',
      label: 'Instagram',
    },
    {
      icon: <SlSocialYoutube className="icon" />,
      href: 'https://www.youtube.com/@chaiaurcode',
      label: 'YouTube',
    },
  ],
  linkSections: [
    {
      title: 'Product',
      links: [
        {name: 'Courses', href: 'https://courses.chaicode.com/learn'},
        {
          name: 'Cohort',
          href: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
        },
        {
          name: 'Coding Hero',
          href: 'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
        },
        {name: 'MasterJI', href: 'https://masterji.co/login'},
      ],
    },
    {
      title: 'Resources',
      links: [
        {name: 'FreeAPI', href: 'https://freeapi.app/'},
        {name: 'ChaiDocs', href: 'https://chaidocs.vercel.app/'},
      ],
    },
    {
      title: 'Legal',
      links: [
        {name: 'Terms of Service', href: '#'},
        {name: 'Privacy Policy', href: '#'},
        {name: 'Pricing Policy', href: '#'},
        {name: 'Refund Policy', href: '#'},
      ],
    },
  ],
  copyrightText: 'ChaiCode',
  builtByText: 'ChaiCode',
  socialLinksStyle: 'dark:hover:text-orange-400',
  linkStyle: 'dark:hover:text-orange-400 hover:text-zinc-800',
  className: 'border-none bg-zinc-100 dark:bg-neutral-900',
};

export const MiniTemplateCard = ({
  title,
  description,
  priceText,
  onBuyClick,
}: MiniTemplateCardProps) => {
  return (
    <Card className="bg-zinc-900 text-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md mx-auto p-6 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-xl sm:text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4">
        <CardDescription className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          onClick={onBuyClick}
          className="w-full sm:w-auto bg-orange-400 text-black font-medium hover:bg-orange-300 px-6 py-2 rounded-lg transition-colors duration-200"
        >
          {priceText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export const LandingPage = () => {
  return (
    <div className=" bg-gradient-to-b from-black to-zinc-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar
        darkModeLogo="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/dtst2deim1sgv2g5dcm6.png"
        lightModoLogo="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/gzfqtahpfc93ybugfiwr.png"
        navbarLinks={[
          {name: 'Cohorts', link: '/'},
          {name: 'Udemy', link: '/'},
          {name: 'Docs', link: '/'},
          {name: 'Reviews', link: '/'},
        ]}
        loginBtnLink="/login"
        themeChangeBtn={
          <ThemeToggleBtn className="text-gray-200 dark:text-zinc-100 bg-zinc-800/60 dark:bg-zinc-700/60 hover:bg-zinc-700 dark:hover:bg-zinc-600 rounded-full" />
        }
        loginBtnStyle="h-9 text-gray-200 dark:text-zinc-100 bg-zinc-800/60 dark:bg-zinc-700/60 hover:bg-orange-600 dark:hover:bg-orange-600 rounded-lg transition-colors duration-200"
        className="dark:bg-black/30 backdrop-blur-md sticky top-0 z-50"
      />
      <MessageBot
        orgName="UIgnite"
        orgLogo="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/dtst2deim1sgv2g5dcm6.png"
        themeColor="bg-orange-600"
        url="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/dtst2deim1sgv2g5dcm6.png"
        alt="Bot avatar"
      />

      {/* Hero Header */}
      <header className="relative h-[600px] flex items-center justify-center text-center text-white">
        {/* Background image + overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/3d-render-spotlights-grunge-brick-wall_1048-6284.jpg?t=st=1745099740~exp=1745103340~hmac=48c0a0fd8eb62c436b4fba7b853a9ed7139c73c59e08d4700f48df86b289ccf0&w=740"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        {/* Header Text */}
        <div className="relative z-10 max-w-4xl px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent dark:text-orange-100">
            Consistency and Community
          </h1>
          <p className="text-2xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <br className="hidden md:block" />
            Content is everywhere, but we provide a learning experience that is
            unmatched — bounties, peer learning, code reviews, virtual hostel,
            alumni network, doubt sessions, and group projects.
          </p>
          <div className="mt-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Browse all Live Courses
            </Button>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center ">
        <VideoPlayer
          src="https://res.cloudinary.com/do2tmd6xp/video/upload/v1744979534/5xnmps_2_pr75vu.mp4"
          thumbnailUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          muted
          autoplay
          loop
          className="shadow-orange dark:shadow-orange-400 shadow-md rounded-xl"
        />
      </div>
      {/* Templates Section */}
      <section className="py-24 px-6 space-y-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Templates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium templates designed to help you launch faster and focus on
            what matters most - your product.
          </p>
        </div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MiniTemplateCard
            title="Web Dev Cohort "
            description="The most vibrant comunity ."
            priceText="Buy now $49"
            onBuyClick={() => alert('Redirect to payment gateway!')}
          />

          <MiniTemplateCard
            title="SaaS Dashboard Page"
            description="Complete dashboard solution with analytics, user management, and customizable widgets for SaaS applications."
            priceText="Buy now $69"
            onBuyClick={() => alert('Redirect to payment gateway!')}
          />

          <MiniTemplateCard
            title="SaaS Documentation Page"
            description="Full-featured e-commerce template with product listings, shopping cart, and checkout process built-in."
            priceText="Buy now $89"
            onBuyClick={() => alert('Redirect to payment gateway!')}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to build faster?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get started with our premium courses today and start your dev
            journey right here
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300">
              Browse Courses
            </Button>
            <Button className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-3 text-lg rounded-lg transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer {...footerProps} />
    </div>
  );
};
