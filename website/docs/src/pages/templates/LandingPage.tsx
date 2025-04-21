'use client';

import {
  Accordion,
  AccordionWrapper,
  Button,
  Footer,
  MessageBot,
  Navbar,
  Testimonials,
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
import {useState} from 'react';
import {Info} from 'lucide-react';

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
  const [isPause, setPause] = useState(false);
  const testimonials = [
    {
      imageSrc: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059613/uignite/zablzf9i4csffqvlzy76.png',
      name: 'Hitesh Choudhary',
      title: 'Founder of ChaiCode',
      message:
        'Used UIgnite once. Now my students think I’m a Tailwind wizard. Jokes on them — it’s all prebuilt.',
      rating: 5,
    },
    {
      imageSrc: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059612/uignite/intr9ojetxf32pehtnar.png',
      name: 'Piyush Garg',
      title: 'Co-founder of OnlyFans',
      message:
        'I came for the components. Stayed because the docs didn’t make me cry. 10/10, would copy-paste again.',
      rating: 5,
    },
    {
      imageSrc: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059613/uignite/b1eotihxzahyjw91uz1i.png',
      name: 'Anirudh Jwala',
      title: 'Gareebo Ko Books Dene Wala',
      message:
        'Tried building a form without UIgnite once. Laptop almost flew out the window. Never again.',
      rating: 5,
    },
    {
      imageSrc: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059612/uignite/tkq3lcujr8m9r1eemu4k.png',
      name: 'Mukul Padwal',
      title: `Everyone's Favourite TA`,
      message:
        'UIgnite’s dark mode support is so good, I forgot what light mode looks like. My retinas thank you.',
      rating: 5,
    },
    {
      imageSrc: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059612/uignite/mfwshi7elmim6aqidhgd.png',
      name: 'Manu Arora',
      title: 'Founder of Aceternity',
      message:
        'If Aceternity UI had a long-lost sibling, it’d be UIgnite. Except this one brings snacks and types everything.',
      rating: 5,
    },
    {
      imageSrc: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059611/uignite/no0t2oerr258iefbhxjx.png',
      name: 'Vinayak Sarawagi',
      title: 'Founder of IntentJS',
      message:
        'UIgnite components are like intentions — pure, minimal, and surprisingly powerful. Even my backend friends use them now.',
      rating: 5,
    },
  ];
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
            Students Reviews
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium templates designed to help you launch faster and focus on
            what matters most - your product.
          </p>
        </div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-md overflow-hidden w-full max-w-md mx-auto bg-zinc-100 dark:bg-zinc-900">
            <div className="aspect-video">
              <img
                src="/course-card.jpg"
                alt="Web Dev Cohort"
                className="object-cover w-full h-full rounded"
              />
            </div>

            <CardContent className="px-4 pt-4 pb-5 space-y-3">
              <h1 className="font-semibold text-xl text-zinc-800 dark:text-zinc-100">
                Web Dev Cohort 1.0
              </h1>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Master full-stack web development with Web Dev Cohort. Learn
                HTML, CSS, JS, React, Next.js, Node, Docker, databases like
                MongoDB/PostgreSQL, DevOps with AWS (ECR, EC2, CloudFront),
                modern workflows like Turbo Repo, TypeScript, and GitHub CI/CD.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-medium text-base text-zinc-800 dark:text-zinc-100">
                  ₹6,999
                </span>
                <span className="line-through text-sm text-gray-400 dark:text-gray-500">
                  ₹8,999
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  Save 22%
                </span>
              </div>

              <a
                href="https://courses.chaicode.com/learn/batch/about?bundleId=214297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-2 w-full flex justify-center items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-700">
                  Learn More <Info className="size-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md overflow-hidden w-full max-w-md mx-auto bg-zinc-100 dark:bg-zinc-900">
            <div className="aspect-video">
              <img
                src="https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745145552/uignite/atszynftsed74g9ihwxv.jpg"
                alt="DevOps for Developers"
                className="object-cover w-full h-full rounded"
              />
            </div>

            <CardContent className="px-4 pt-4 pb-5 space-y-3">
              <h1 className="font-semibold text-xl text-zinc-800 dark:text-zinc-100">
                DevOps for Developers
              </h1>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Master the foundations and advanced practices of modern
                infrastructure with this comprehensive DevOps course. You'll
                dive into Linux essentials, version control, and scripting
                before progressing to containerization with Docker and
                orchestration techniques. Learn .{' '}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-medium text-base text-zinc-800 dark:text-zinc-100">
                  ₹6,999
                </span>
                <span className="line-through text-sm text-gray-400 dark:text-gray-500">
                  ₹8,999
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  Save 22%
                </span>
              </div>

              <a
                href="https://courses.chaicode.com/learn/batch/DevOps-for-Developers-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-2 w-full flex justify-center items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-700">
                  Learn More <Info className="size-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md overflow-hidden w-full max-w-md mx-auto bg-zinc-100 dark:bg-zinc-900">
            <div className="aspect-video">
              <img
                src="https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745145552/uignite/bfrcgrbospz5iparldlk.jpg"
                alt="GenAI with Python"
                className="object-cover w-full h-full rounded"
              />
            </div>

            <CardContent className="px-4 pt-4 pb-5 space-y-3">
              <h1 className="font-semibold text-xl text-zinc-800 dark:text-zinc-100">
                GenAI with Python
              </h1>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                An immersive and interactive program which is totally focused on
                Generative AI, covering foundational concepts, practical
                applications, and tools like GPT, diffusion models, and prompt
                engineering—built to help you innovate, prototype, and lead in
                the AI-driven future.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-medium text-base text-zinc-800 dark:text-zinc-100">
                  ₹6,999
                </span>
                <span className="line-through text-sm text-gray-400 dark:text-gray-500">
                  ₹8,999
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  Save 22%
                </span>
              </div>

              <a
                href="https://courses.chaicode.com/learn/batch/GenAI-with-python-concept-to-deployment-projects-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-2 w-full flex justify-center items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-700">
                  Learn More <Info className="size-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-[1200px] mx-auto text-center flex justify-around gap-50">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to build faster?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Linux, DevOps, Docker, Containers, SonarQube, Prometheus &
              Grafana, Load balancing, zero down time deployments
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
        </div>
        <div className="max-w-[1200px] mt-20 mx-auto text-center flex justify-around gap-50">
          <h2 className="text-4xl font-bold mb-6">FAQs</h2>
        </div>
        <div className="max-w-[1200px] mx-auto text-center flex justify-around gap-50">
          <div className="mt-5">
            <AccordionWrapper>
              <Accordion
                title="Will there be TAs support and a dedicated community support?   "
                content="Yes! Every cohort includes dedicated TA (Teaching Assistant) support to help you with doubts, code reviews, and project feedback. Plus, you’ll be part of an active, supportive community where you can collaborate, share resources, and grow together."
                className=" max-w-[800px] mb-2 border-[0.5px] dark:border-orange-500  "
              />
              <Accordion
                title="Will the classes be recorded and be provided to us?   "
                content="Yes, the classes will be recorded."
                className="max-w-[800px] mb-2 border-[0.5px] dark:border-orange-500"
              />
              <Accordion
                title="What is the course duration, and when will the classes be?   "
                content="The course duration is of 6 months."
                className="max-w-[800px] mb-2 border-[0.5px] dark:border-orange-500"
              />
            </AccordionWrapper>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mt-20 mx-auto text-center flex justify-around gap-50">
        <div>
          <h2 className="text-4xl font-bold mb-6">Testimonials </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Hear from learners who transformed their skills and careers through
            our hands-on, mentor-led programs. Real stories. Real impact
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
        </div>
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

      <Footer {...footerProps} />
    </div>
  );
};
