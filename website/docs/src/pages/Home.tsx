import {useState} from 'react';
import {Button} from '../../../../packages/uignite/src/components/Button';
import {CustomTheme} from '../../../../packages/uignite/src/utils/CustomTheme';
import {Navbar} from '../../../../packages/uignite/src/components/Navbar';
import {motion} from 'framer-motion';
import {Copy, Check} from 'lucide-react';

import {Settings, Zap, Moon, LayoutGrid} from 'lucide-react';
import {Card, CardHeader, CardContent, CardTitle} from '../../../../packages/uignite/src/components/Card';
import Accordion,{AccordionWrapper} from '../../../../packages/uignite/src/components/Accordion';
import {Input} from '../../../../packages/uignite/src/components/Input';
import Skeleton from '../../../../packages/uignite/src/components/Skeleton';
import Testimonials from '../../../../packages/uignite/src/components/Testimonials';

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i uignite');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const features = [
    {
      icon: <Settings className="text-blue-500" size={24} />,
      title: 'Themeable',
      description:
        'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
    },
    {
      icon: <Zap className="text-blue-500" size={24} />,
      title: 'Fast',
      description:
        'Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.',
    },
    {
      icon: <Moon className="text-blue-500" size={24} />,
      title: 'Light & Dark UI',
      description:
        'Automatic dark mode recognition, HeroUI automatically changes the theme when detects HTML theme prop changes.',
    },
    {
      icon: <LayoutGrid className="text-blue-500" size={24} />,
      title: 'Card Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quasi!',
    },
  ];

  const testimonials = [
    {
      imageSrc: 'hitesh-sir.png',
      name: 'Hitesh Choudhary',
      title: 'Founder of ChaiCode',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
      rating: 5,
    },
    {
      imageSrc: 'piyush-sir.png',
      name: 'Piyush Garg',
      title: 'Co-founder of OnlyFans',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
      rating: 5,
    },
    {
      imageSrc: 'anirudh-sir.png',
      name: 'Anirudh Jwala',
      title: 'Gareebo ko Books Dene Wale',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
      rating: 5,
    },
    {
      imageSrc: 'mukul-sir.png',
      name: 'Mukul Padwal',
      title: 'xxx',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
      rating: 5,
    },
    {
      imageSrc: 'manu-sir.png',
      name: 'Manu Arora',
      title: 'Founder of Aceternity',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
      rating: 5,
    },
    {
      imageSrc: 'vinayak-sir.png',
      name: 'Vinayak Sarawagi',
      title: 'Founder of IntentJS',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
      rating: 5,
    },
  ];
  return (
    <CustomTheme>
      <Navbar />
      {/* Main Content */}
      <div className="flex justify-center items-center">
        <div className=" max-w-[1200px] ">
          <div className=" -mt-3 z-1 px-4 md:px-8  min-h-screen flex justify-center">
            <div className="w-full max-w-6xl  flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-2xl  sm:text-5xl md:text-6xl lg:text-[80px] font-heading font-semibold tracking-tight text-zinc-200 mb-6">
                  <span className="!dark text-black dark:text-light-primary block -mb-2">
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
                  <Button className="!dark dark:hover:text-gray-200  bg-transparent border text-lg dark:hover:border-white/20 dark:border-blue-500 hover:border-blue-800 hover:text-blue-800 hover:bg-transparent text-blue-500 transition duration-300 rounded-lg px-6 py-6">
                    Get Started
                  </Button>
                  <Button
                    icon={!isCopied ? <Copy /> : <Check />}
                    onClick={() => handleCopy()}
                    className="bg-[#121212] dark:bg-[#000000] hover:bg-black/90 dark:hover:bg-black/50 text-white font-lg rounded-lg px-6 py-6 text-lg transition duration-300 shadow-md "
                    data-clipboard-text="npm i uginite"
                  >
                    npm i uginite
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 mt-16">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-2xl backdrop-blur-2xl dark:bg-transparent bg-white/40 border border-none dark:shadow-blue-950 shadow-lg p-6 text-white hover:border-blue-500/40 transition-all h-48 w-full"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="dark:bg-blue-900/30 bg-gray-200 p-2 rounded-full">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-medium dark:text-white text-blue-950">
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

          <div className="flex justify-center items-center py-10 px-4">
            <motion.div
              className="dark:text-[#f7f7f8] text-[#0d0346] font-heading max-w-6xl text-center font-semibold relative text-5xl leading-snug [text-wrap:balance]"
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

          <div className=" grid grid-cols-1  lg:grid-cols-3 gap-5 z-10 relative mt-12 cursor-pointer">
            <div className="relative flex-1  bg-tranparent rounded-xl flex justify-center items-center overflow-hidden dark:shadow-[#001933] dark:shadow-xl">
              <div className="absolute inset-0 bg-transprent pointer-events-none"></div>
              <div className="relative z-10 w-full">
                <Card className="bg-gradient-to-b from-[#000000] to-[#000000] border-none w-full py-6 ">
                  <CardHeader>
                    <p className=" text-xs font-bold ml-2 text-muted-foreground text-light-primary ">
                      Daily Mix
                    </p>
                    <p className=" text-sm font-bold ml-2 text-muted-foreground text-gray-500 ">
                      15 Tracks
                    </p>
                    <div className="flex flex-row">
                      <CardTitle className="text-md mt-[15px] ml-2 text-gray-100">
                        Frontend Radio
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://i.pinimg.com/736x/e8/d0/9d/e8d09dc7491d9801c8edb409a40186c7.jpg"
                      alt="Arijit Singh"
                      className="rounded-xl w-full h-80 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative flex-2 bg-gray-200 dark:bg-transparent backdrop-blur-lg border-none dark:shadow-blue-900 dark:shadow-md rounded-xl flex justify-center items-center h-[430px] overflow-hidden border border-white/30 ">
              <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
              <div className="relative z-10 ">Coming Soon</div>
            </div>

            <div className="relative flex-1 bg-transparent rounded-xl flex justify-center items-center h-[430px] px-2 overflow-hidden">
              <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <AccordionWrapper>
                  <Accordion
                    title="What is MobiMart?"
                    content="MobiMart is an e-commerce platform selling mobile gadgets like earbuds, phones, and speakers."
                  />
                  <Accordion
                    title="How long does delivery take?"
                    content="Typically 2-4 business days depending on your location."
                  />
                  <Accordion
                    title="Can I return a product?"
                    content="Yes, we have a 7-day easy return policy."
                  />
                  <Accordion
                    title="How long does delivery take?"
                    content="Typically 2-4 business days depending on your location."
                  />
                </AccordionWrapper>
              </div>
            </div>
          </div>

          <div className=" flex flex-row gap-5 z-10 relative mt-5 cursor-pointer justify-center items-center">
            <div className="relative flex-2 bg-[#07070f] dark:shadow-[#07070f] dark:shadow-xl rounded-xl flex justify-center items-center h-[250px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <p className="text-light-primary">Input with error</p>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  className={`w-[300px] h-[46px] text-xl px-4 rounded-md  focus:outline-none focus:ring-0 hover:outline-none bg-[#07070f] text-white 
          ${error ? 'border-red-500' : 'border-gray-600'} 
          border focus:outline-none focus:ring-0 hover:outline-none`}
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </div>
            </div>

            <div className="relative flex-2 bg-gray-800 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[380px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mt-8">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-44 w-full rounded-lg mt-3" />
              </div>
            </div>

            <div className="relative flex-2 bg-gray-200 dark:bg-transparent backdrop-blur-lg border-none dark:shadow-blue-900 dark:shadow-md rounded-xl flex justify-center items-center h-[430px] overflow-hidden border border-white/30 ">
              <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
              <div className="relative z-10 ">Coming Soon</div>
            </div>
          </div>

          <div className="text-center ">
            <motion.p
              className="text-6xl font-semibold mt-40 dark:text-[#f7f7f8] text-[#0d0346]"
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

          <div className="relative w-[1200px] overflow-hidden py-10">
            <div className="flex gap-6 animate-scroll">
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <Testimonials
                    key={index}
                    imageSrc={testimonial.imageSrc}
                    name={testimonial.name}
                    title={testimonial.title}
                    message={testimonial.message}
                    rating={testimonial.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomTheme>
  );
};

export default Home;
