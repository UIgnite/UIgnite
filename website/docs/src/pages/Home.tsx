import {Button, Card} from '@pkgs/uignite';
import {CustomTheme} from '../utils/CustomTheme';
import {motion} from 'framer-motion';
import {
  ShieldCheck,
  BookOpen,
  CheckCircle,
  Layers,
  Zap,
  Moon,
} from 'lucide-react';

import {Testimonials} from '@pkgs/uignite';
import MainNavbar from '../components/Navbar';
import {GridBackground} from '../utils/GridBackground';
import TechStack from '../utils/TechStack';
import {VideoPlayer} from '@pkgs/uignite';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {
  Heart,
  RefreshCw,
  SkipBack,
  Pause,
  SkipForward,
  Shuffle,
} from 'lucide-react';
import {useState} from 'react';
const Home = () => {
  const [isPause, setPause] = useState(false);
  const features = [
    {
      icon: <ShieldCheck className="text-blue-500" size={24} />,
      title: 'Type-Safe by Design',
      description:
        'UIgnite is built from the ground up with a fully-typed, TypeScript-first API, giving you the power of type safety with none of the guesswork.',
    },
    {
      icon: <Zap className="text-blue-500" size={24} />,
      title: 'Fast and Lightweight',
      description:
        'Built with performance in mind, UIgnite components are lightweight, ensuring your app stays fast and snappy without sacrificing design or functionality.',
    },
    {
      icon: <Moon className="text-blue-500" size={24} />,
      title: 'Light & Dark Mode Support',
      description:
        'Every UIgnite component is built to seamlessly adapt to light and dark themes out of the box — no configuration, no overrides.',
    },
    {
      icon: <BookOpen className="text-blue-500" size={24} />,
      title: 'Clear Documentation',
      description:
        'Accelerate your development with well-organized and easy-to-follow docs, helping you get up to speed quickly and build with confidence.',
    },
    {
      icon: <CheckCircle className="text-blue-500" size={24} />,
      title: 'Reliable and Consistent',
      description:
        'UIgnite ensures consistent behavior across all components, making it easy to build reliable apps with predictable results every time.',
    },
    {
      icon: <Layers className="text-blue-500" size={24} />,
      title: 'Modular and Customizable',
      description:
        'UIgnite offers a modular architecture, allowing you to easily extend, override, and customize components to fit your needs.',
    },
  ];

  const testimonials = [
    {
      imageSrc: 'hitesh-sir.png',
      name: 'Hitesh Choudhary',
      title: 'Founder of ChaiCode',
      message:
        'Used UIgnite once. Now my students think I’m a Tailwind wizard. Jokes on them — it’s all prebuilt.',
      rating: 5,
    },
    {
      imageSrc: 'piyush-sir.png',
      name: 'Piyush Garg',
      title: 'Co-founder of OnlyFans',
      message:
        'I came for the components. Stayed because the docs didn’t make me cry. 10/10, would copy-paste again.',
      rating: 5,
    },
    {
      imageSrc: 'anirudh-sir.png',
      name: 'Anirudh Jwala',
      title: 'Gareebo Ko Books Dene Wala',
      message:
        'Tried building a form without UIgnite once. Laptop almost flew out the window. Never again.',
      rating: 5,
    },
    {
      imageSrc: 'mukul-sir.png',
      name: 'Mukul Padwal',
      title: `Everyone's Favourite TA`,
      message:
        'UIgnite’s dark mode support is so good, I forgot what light mode looks like. My retinas thank you.',
      rating: 5,
    },
    {
      imageSrc: 'manu-sir.png',
      name: 'Manu Arora',
      title: 'Founder of Aceternity',
      message:
        'If Aceternity UI had a long-lost sibling, it’d be UIgnite. Except this one brings snacks and types everything.',
      rating: 5,
    },
    {
      imageSrc: 'vinayak-sir.png',
      name: 'Vinayak Sarawagi',
      title: 'Founder of IntentJS',
      message:
        'UIgnite components are like intentions — pure, minimal, and surprisingly powerful. Even my backend friends use them now.',
      rating: 5,
    },
  ];

  return (
    <CustomTheme>
      <MainNavbar />
      {/* Main Content */}
      <GridBackground />
      <div className="flex justify-center items-center mt-8">
        <div className=" max-w-[1200px]  w-full px-4 sm:px-4 lg:px-4 ">
          <div className="z-1 px-4 md:px-8 min-h-screen flex justify-center mt-4 ">
            <div className="w-full max-w-6xl  flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-2xl  sm:text-5xl md:text-6xl lg:text-[60px] font-heading font-semibold tracking-tight text-zinc-200 mb-6">
                  <span className="text-black dark:text-light-primary block -mb-2">
                    Less Tweaking
                  </span>
                  <span className="block relative py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
                    More Shipping
                  </span>
                </h1>

                <p className="!dark text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-prose mx-auto dark:text-zinc-400">
                  UIgnite helps you{'  '}
                  <span className="!dark font-semibold text-blue-900 dark:text-blue-50 drop-shadow-[0_0_4px_rgba(30,64,175,0.1)] dark:drop-shadow-[0_0_4px_rgba(30,64,175,0.8)]">
                    skip the design rabbit hole
                  </span>{' '}
                  with ready-to-use components that just look right.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/components/Installation">
                    <Button className="!dark dark:hover:text-gray-200  bg-transparent border text-lg dark:hover:border-white/20 dark:border-blue-500 hover:border-blue-800 hover:text-blue-800 hover:bg-transparent text-blue-500 transition duration-300 rounded-lg px-6 py-6">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/components/Accordion">
                    <Button
                      className="hover:bg-blue-800 text-white font-lg rounded-lg px-6 py-6 text-lg transition duration-300 shadow-md "
                      data-clipboard-text="npm i uginite"
                    >
                      Explore Components
                    </Button>
                  </Link>
                </div>
                <TechStack />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 mt-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-2xl backdrop-blur-2xl dark:bg-transparent bg-white/40 border border-none dark:shadow-blue-950 shadow-lg p-6 text-white hover:border-blue-500/40 transition-all h-48 w-full"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="dark:bg-blue-900/30 bg-gray-200 p-2 rounded-full">
                          {feature.icon}
                        </div>
                        <h3 className="text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl font-medium dark:text-white text-blue-950">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="dark:text-gray-300 text-gray-950 text-md text-left line-clamp-4 overflow-hidden">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-10 px-4 mt-10">
            <motion.div
              className="dark:text-[#f7f7f8] text-[#0d0346] font-heading max-w-6xl text-center font-semibold relative text-3xl sm:text-3xl md:text-5xl lg:5xl xl:6xl leading-snug [text-wrap:balance]"
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: 'easeOut'}}
              viewport={{once: true}}
            >
              Component-driven UIs with{' '}
              <span className="text-[#0990d4]">performance</span> and{' '}
              <span className="text-[#0990d4]">maintainability</span> at their
              core.
            </motion.div>
          </div>

          <div className="flex items-center justify-center ">
            <VideoPlayer
              src="https://res.cloudinary.com/do2tmd6xp/video/upload/v1744979534/5xnmps_2_pr75vu.mp4"
              thumbnailUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              muted
              autoplay
              loop
              className="shadow-black max-h-[200px] sm:max-h-[200px] md:max-h-full lg:max-h-full dark:shadow-indigo-900 shadow-2xl rounded-xl"
            />
          </div>

          {/* cards  */}
          <div className="mt-20 md:mt-40 lg:mt-40 xl:mt-40  flex flex-col items-center justify-center gap-8 px-4">
            <div>
              <p className="text-4xl sm:text-7xl md:text-7xl lg:text-7xl font-semibold text-center ">
                <span className="dark:text-cyan-500 text-cyan-700">Design</span>{' '}
                that <span>adapts</span> to you.
              </p>
              <p className="mt-8 sm:mt-8 md:mt-4 lg:mt-4 text-md text-center mx-auto  max-w-[800px] dark:text-zinc-300 text-zinc-600">
                Uignite lets you tailor every detail with ease. With built-in
                support for custom themes via our TailwindCSS plugin, your
                interface can match your brand, mood, or imagination no limits,
                just possibilities.
              </p>

              <Card className="mb-6 border-0 dark:shadow-lg dark:shadow-black bg-gradient-to-tr from-blue-600 via-gray-900 to-black p-6 mt-4 rounded-xl  text-white w-full max-w-xl h-[53%] sm:h-[45%] md:h-[45%] lg:[45%] mx-auto">
                <div className="flex gap-3 items-center">
                  <img
                    src="pain.png"
                    alt="Album Cover"
                    className="w-32 h-32 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">Today Mix</h2>
                    <p className="text-sm opacity-90 mb-1">15 Tracks</p>
                    <p className="text-md font-medium">UIgnite Radio</p>
                    <div className="flex items-center mt-4 gap-2 text-xs">
                      <span>0:10</span>
                      <input
                        type="range"
                        defaultValue="34"
                        className="w-full accent-white"
                      />
                      <span>3:42</span>
                    </div>
                  </div>
                  <div className="text-white text-xl">
                    <button className="hover:scale-110 transition">
                      <Heart size={24} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-6 mt-6 text-2xl">
                  <button className="hover:text-white/80 transition-colors">
                    <RefreshCw size={24} />
                  </button>
                  <button className="hover:text-white/80 transition-colors">
                    <SkipBack size={24} />
                  </button>
                  <button className="bg-white text-gray-700 p-3 rounded-full">
                    <Pause size={24} />
                  </button>
                  <button className="hover:text-white/80 transition-colors">
                    <SkipForward size={24} />
                  </button>
                  <button className="hover:text-white/80 transition-colors">
                    <Shuffle size={24} />
                  </button>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center ">
            <motion.p
              className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl  font-semibold mt-40 dark:text-[#f7f7f8] text-[#0d0346]"
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: 'easeOut'}}
            >
              Testimonials
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg mt-3 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.3, ease: 'easeOut'}}
            >
              What our community members say about their learning journey with
              us
            </motion.p>
          </div>

          <div className="relative w-full max-w-[1000px] md:max-w-[1200px] overflow-hidden py-10 mx-auto">
            <div
              className="flex w-max gap-2 animate-infinite-scroll"
              onMouseEnter={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
              style={{animationPlayState: isPause ? 'paused' : 'running'}}
            >
              {testimonials.map((testimonial, index) => (
                <Testimonials
                  key={`first-${index}`}
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  title={testimonial.title}
                  message={testimonial.message}
                  rating={testimonial.rating}
                />
              ))}

              {testimonials.map((testimonial, index) => (
                <Testimonials
                  key={`second-${index}`}
                  className="w-[450px] max-h-[200px]"
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  title={testimonial.title}
                  message={testimonial.message}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </CustomTheme>
  );
};

export default Home;
