import {
  Accordion,
  AccordionWrapper,
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dropdown,
  Input,
  MessageBot,
  PricingCard,
  // Resizable,
  Skeleton,
  Spinner,
  TabContent,
  TabList,
  Tabs,
  Tab,
  TextArea,
  Tooltip,
  Toast,
  useToast,
  Carosuel,
  InputOTP,
  AlertDialogBox,
  Switch,
  Footer,
  Navbar,
  VideoPlayer,
  Testimonials,
  SignUp,
  SignIn,
} from '@pkgs/uignite';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Eye, EyeOff, Info} from 'lucide-react';
import {AlarmClockCheck} from 'lucide-react';

const elements = [
  {
    id: 'accordion',
    scope: {Accordion, AccordionWrapper},
    extraScopes: [
      {
        scope: ['Accordion', 'AccordionWrapper'],
        from: 'Accordion',
        isComp: true,
      },
    ],
    element: `
<div className="relative z-0">
  <AccordionWrapper>
    <Accordion
      title="What is MobiMart?"
      content="MobiMart is an e-commerce platform selling mobile gadgets like earbuds, phones, and speakers."
      className="mb-2 border-[0.5px] dark:border-neutral-800"
    />
    <Accordion
      title="How long does delivery take?"
      content="Typically 2-4 business days depending on your location."
      className="mb-2 border-[0.5px] dark:border-neutral-800"
    />
    <Accordion
      title="Can I return a product?"
      content="Yes, we have a 7-day easy return policy."
      className="mb-2 border-[0.5px] dark:border-neutral-800"
    />
  </AccordionWrapper>
</div>
    `,
    variation: [],
  },
  {
    id: 'AlertDialogBox',
    scope: {Button, AlertDialogBox, useState},
    extraScopes: [
      {
        scope: ['Button'],
        from: 'Button',
        isComp: true,
      },
      {
        scope: ['AlertDialogBox'],
        from: 'AlertDialogBox',
        isComp: true,
      },
      {
        scope: ['useState'],
        from: 'react',
      },
    ],
    element: `
      <AlertDialogBox
        title="Delete account?"
        description="This action cannot be undone. Are you sure you want to delete your account permanently?"
      />
    `,
    variation: [],
  },
  {
    id: 'avatar',
    scope: {Avatar, Tooltip},
    element: `
      <div className = "flex flex-row gap-2" >
        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />
      </div>
    `,
    variation: [
      `
     function components() {
  return (
    <div className="flex items-center -mt-8 pl-2 overflow-visible">
      <div className="relative hover:z-20 transition-all duration-300 ease-in-out">
        <Tooltip title="Aman Gupta" options={{ tooltipStyle: { width: 'auto' } }}>
          <Avatar
            url="/assets/avatars/aman.png"
            alt="Aman Gupta"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Tooltip>
      </div>
      <div className="relative -ml-7 hover:z-20 transition-all duration-300 ease-in-out">
        <Tooltip title="Ram Bhardwaj" options={{ tooltipStyle: { width: 'auto' } }}>
          <Avatar
            url="/assets/avatars/ram.jpg"
            alt="Ram Bhardwaj"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Tooltip>
      </div>
      <div className="relative -ml-7 hover:z-20 transition-all duration-300 ease-in-out">
        <Tooltip title="Aditya Sharma" options={{ tooltipStyle: { width: 'auto' } }}>
          <Avatar
            url="/assets/avatars/aditya.jpg"
            alt="Aditya Sharma"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Tooltip>
      </div>
      <div className="relative -ml-7 hover:z-20 transition-all duration-300 ease-in-out">
        <Tooltip title="Saurav Jha" options={{ tooltipStyle: { width: 'auto' } }}>
          <Avatar
            url="/assets/avatars/saurav.png"
            alt="Saurav Jha"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Tooltip>
      </div>
      <div className="relative -ml-7 hover:z-20 transition-all duration-300 ease-in-out">
        <Tooltip title="Rohit Jha" options={{ tooltipStyle: { width: 'auto' } }}>
          <Avatar
            url="/assets/avatars/rohit.jpg"
            alt="Rohit Singh"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Tooltip>
      </div>
    </div>
  );
};

      `,
    ],
  },
  {
    id: 'button',
    scope: {Button, AlarmClockCheck},
    extraScopes: [
      {
        scope: ['Button'],
        from: 'Button',
        isComp: true,
      },
      {
        scope: ['AlarmClockCheck'],
        from: 'lucide-react',
      },
    ],
    element: `
      <Button>Click Me</Button>
    `,
    variation: [
      `
      <div className="grid grid-cols-4 gap-10">
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="glass">glass</Button>
      </div>
      `,
      `
      <div className="grid grid-cols-4 gap-10">
        <Button variant="success">success</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="warning">warning</Button>
        <Button variant="ghost">ghost</Button>
      </div>
      `,
      `
      <div className="grid grid-cols-4 gap-10">
        <Button variant="dark">dark</Button>
        <Button variant="light">light</Button>
        <Button variant="gradient">gradient</Button>
        <Button className="animate-border text-white font-semibold px-6 py-3 rounded-xl">
          Hover Me
        </Button>
      </div>
      `,
      ` <button className="relative shadow-sm  hover:shadow-gray-50 p-0 w-[100px] h-[100px] border-2 border-gray-500 outline-none bg-gray-100 rounded-[20px]  transition ease-in-out duration-300 hover:scale-110 active:scale-95 active:shadow-none cursor-pointer">
      <div className="relative grid p-[10px] w-full h-full grid-cols-4 grid-rows-2 shadow-[inset_0px_-4px_0px_#dddddd,0px_-4px_0px_#f4f5f6] rounded-[20px] transition ease-in-out duration-300 z-[1]">
        <div className="relative flex translate-y-[-2px] col-start-4 self-start justify-self-end w-4 h-4 transition ease-in-out duration-300 group-hover:translate-y-[-8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="16"
            height="16"
            fill="#aaaaaa"
          >
            <path
              d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16
              S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98
              c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8
              s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72
              c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8
              h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"
            />
          </svg>
        </div>
        <p className="relative translate-y-[-2px] m-0 self-end col-span-4 row-start-2 text-center text-[16px] bg-gray-500 text-transparent [text-shadow:1px_1px_2px_rgba(255,255,255,0.5)] bg-clip-text transition ease-in-out duration-300 group-hover:translate-y-[-5px]">
          command
        </p>
      </div>
    </button>`,
      `
      <div className="grid grid-cols-3 gap-10">
        <Button gradientBorder>gradBorder</Button>
        <Button  variant="gradient" isLoading />
        <Button className="bg-blue-800 rounded-full" icon={<AlarmClockCheck/>}>Snooze</Button>
      </div>
      `,
    ],
  },
  {
    id: 'card',
    scope: {
      Card,
      CardHeader,
      CardTitle,
      CardDescription,
      CardContent,
      CardFooter,
      Button,
      Avatar,
      useState,
      useEffect,
      Info,
      SignUp,
      SignIn,
    },
    extraScopes: [
      {
        scope: [
          'Card',
          'CardHeader',
          'CardTitle',
          'CardDescription',
          'CardContent',
          'CardFooter',
        ],
        from: 'Card',
        isComp: true,
      },
      {
        scope: ['Avatar'],
        from: 'Avatar',
        isComp: true,
      },
      {
        scope: ['useState', 'useEffect'],
        from: 'react',
      },
      {
        scope: ['Info'],
        from: 'lucide-react',
      },
      {
        scope: ['SignUp'],
        from: 'SignUp',
      },
      {
        scope: ['SignIn'],
        from: 'SignIn',
      },
    ],
    element: `
  function TwitterCard () {
    const [status, setStatus] = useState('Follow');

    function clickHandler() {
      const final = status === 'Follow' ? 'Unfollow' : 'Follow';
      setStatus(final);
    }

    return (
      <Card className="mt-6 rounded-2xl shadow-lg max-h-min">
        <CardHeader className="flex flex-row justify-between px-4 pt-2 items-center">
          <div className="flex gap-3 items-center">
            <Avatar url="/hitesh-sir.png" alt="avatar" />
            <div>
              <CardTitle className="text-base">Hitesh Chaudhary</CardTitle>
              <CardDescription className="text-sm dark:text-gray-400">
                @HiteshDotCom
              </CardDescription>
            </div>
          </div>
          <Button
            onClick={clickHandler}
            className={\`\${
              status === 'Unfollow'
                ? 'bg-zinc-900 hover:bg-neutral-900 dark:border dark:border-white border-2'
                : 'bg-blue-600 hover:bg-blue-700'
            } transform transition-all duration-200 ease-out active:scale-95 cursor-pointer text-white text-sm font-medium py-1.5 px-4 rounded-full\`}
          >
            {status}
          </Button>
        </CardHeader>

        <CardContent className="text-sm dark:text-gray-300 px-4 pb-2 pt-1">
          <p>
            Retired from corporate and full time YouTuber, x founder of LCO
            (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k & 470k),
            stepped into 43 countries.
          </p>

          <div className="mt-2 flex items-center gap-4 text-sm dark:text-gray-400">
            <span>
              <span className=" font-semibold">386</span> Following
            </span>
            <span>
              <span className=" font-semibold">21.6K</span> Followers
            </span>
          </div>
        </CardContent>
      </Card>
    )
  }
    `,
    variation: [
      `
      <Card className="m-0 p-0 pb-3">
        <div>
          <img
            className="object-cover rounded-t-xl"
            src="/youtube-thumbnail-3.jpg"
            alt=""
          />
        </div>

        <CardContent className="px-2">
          <h1 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">
            Web Dev Cohort 1.0
          </h1>
          <p className="text-sm leading-tight text-neutral-700 dark:text-neutral-400">
            Master full-stack web development with Web Dev Cohort. Learn HTML,
            CSS, JS, React, Next.js, Node, Docker, databases like
            MongoDB/PostgreSQL, DevOps with AWS (ECR, EC2, CloudFront), modern
            workflows like Turbo Repo, TypeScript, and GitHub CI/CD.
          </p>
          <div className="flex gap-2 items-center mt-2">
            <div className="font-medium text-md ">6,999 INR</div>
            <div className="line-through text-sm text-gray-400 dark:text-gray-500">
              8,999 INR
            </div>
          </div>
          <div className="text-sm text-blue-500 dark:text-blue-400 -mt-1">
            Save 22%
          </div>
          <a
            href="https://courses.chaicode.com/learn/batch/about?bundleId=214297"
            target="_blank"
          >
            <Button className="mt-3 w-full">
              Learn More
              <Info className="ml-2 size-4" />
            </Button>
          </a>
        </CardContent>
      </Card>
      `,
      `
      <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl">
        <CardHeader className="m-0 p-0 ">
          <img
            src="/me.png"
            alt=""
            className="h-[295px] w-full object-cover rounded-t-xl"
          />
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center mt-5">
          <div className="font-semibold text-2xl">Aman Gupta </div>
          <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
            Backend Developer at OnlyDevs
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-4 space-mono ">
          <div className="flex flex-col">
            <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
              Total Commits
            </div>
            <div className="">100+</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-neutral-500 dark:text-zinc-400">
              Total PRs
            </div>
            <div className="">20+</div>
          </div>
        </CardFooter>
      </Card>
      `,
      `
        <SignIn />
      `,
      `
      <SignUp />
      `,
    ],
  },
  {
    id: 'Carosuel',
    scope: {Carosuel},
    extraScopes: [
      {
        scope: ['Carosuel'],
        from: 'Carosuel',
        isComp: true,
      },
    ],
    element: ` 
    <Carosuel className="h-full w-full   flex justify-center items-center">
      <div className=" dark:bg-black bg-gray-100 h-full mr-4 ml-4 flex items-center justify-center text-2xl font-semibold rounded-lg shadow-md">
        Slide 1
      </div>
      <div className="bg-black h-full mr-4 ml-4 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-semibold rounded-lg shadow-md">
        Slide 2
      </div>
      <div className="bg-black h-full mr-4 ml-4 flex items-center justify-center bg-gradient-to-r from-pink-400 to-red-500 text-white text-2xl font-semibold rounded-lg shadow-md">
        Slide 3
      </div>
      <div className="bg-black h-full mr-4 ml-4 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-2xl font-semibold rounded-lg shadow-md">
        Slide 4
      </div>
      <div className="bg-black h-full mr-4 ml-4  flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500 text-white text-2xl font-semibold rounded-lg shadow-md">
        Slide 5
      </div>
    </Carosuel> 
    `,
    variation: [],
  },

  {
    id: 'dropdown',
    scope: {Dropdown},
    extraScopes: [
      {
        scope: ['Dropdown'],
        from: 'Dropdown',
        isComp: true,
      },
    ],
    element: `
      <Dropdown 
        button={
        <div className=" bg-black p-2 px-4 text-gray-100  dark:bg-white dark:text-black rounded cursor-pointer">
          Menu
        </div>}   
        title="Options"
      >
        <button className=" text-black px-4 py-2 text-left hover:bg-neutral-300 rounded">Profile</button>
        <button className="text-black px-4 py-2 text-left hover:bg-neutral-300 rounded">Settings</button>
        <button className="text-black px-4 py-2 text-left hover:bg-neutral-300 rounded">Logout</button>
      </Dropdown> 
    `,
    variation: [],
  },
  {
    id: 'footer',
    scope: {Footer},
    extraScopes: [
      {
        scope: ['Footer'],
        from: 'Footer',
        isComp: true,
      },
    ],
    element: `
      <Footer
        lightLogo="https://dummyimage.com/120x40/000/fff&text=Light+Logo"
        darkLogo="https://dummyimage.com/120x40/fff/000&text=Dark+Logo"
        description="This is a simple footer with sections, social links, and a copyright notice."
        socials={[
          { type: "linkedin", link: "https://linkedin.com" },
          { type: "twitter", link: "https://twitter.com" },
          { type: "instagram", link: "https://instagram.com" },
          { type: "youtube", link: "https://youtube.com" },
        ]}
        sections={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Integrations", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Help Center", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Privacy Policy", href: "#" },
            ],
          },
          {
            title: "Follow Us",
            links: [
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Twitter", href: "https://twitter.com" },
              { label: "Instagram", href: "https://instagram.com" },
            ],
          },
        ]}
        copyright="© 2025 Your Company. All rights reserved."
      />
    `,
    variation: [],
  },
  {
    id: 'input',
    scope: {Input, EyeOff, Eye, useState},
    extraScopes: [
      {
        scope: ['Input'],
        from: 'Input',
        isComp: true,
      },
      {
        scope: ['EyeOff', 'Eye'],
        from: 'lucide-react',
      },
      {
        scope: ['useState'],
        from: 'react',
      },
    ],
    element: `<Input placeholder="Type here..." />`,
    variation: [
      `
      <Input type="file" className="file:me-3" />
      `,
      `
      <div className="flex rounded-md shadow-xs">
          <span
            className="h-9 p-2 rounded-md border border-gray-400 dark:border-zinc-700
            rounded-e-none text-base shadow-sm transition-colors placeholder:text-muted-foreground 
            border-input bg-background text-muted-foreground inline-flex items-center
            rounded-s-md px-3  text-zinc-500"
          >
            https://
          </span>
          <Input
            className="-ms-px rounded-s-none shadow-none dark:font-light"
            placeholder="www.uignite.in"
            type="text"
          />
        </div>
      `,
      `
      <Input type="email" value="chaicode@gmail.com" disabled />
      `,
      `
        function PasswordInput() {
          const [show, setShow] = useState(false);

          return (
            <div className="relative">
              <Input
                type={show ? 'text' : 'password'}
                className="w-full pr-10"
                placeholder="Password"
                defaultValue={'uignite'}
              />
              <div
                onClick={() => setShow((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
              >
                {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </div>
            </div>
          );
        }
      `,
    ],
  },
  {
    id: 'inputotp',
    scope: {InputOTP},
    element: `
      <InputOTP length = {6}/> 
    `,
    extraScopes: [
      {
        scope: ['InputOTP'],
        from: 'InputOTP',
        isComp: true,
      },
    ],
    variation: [],
  },
  {
    id: 'messagebot',
    scope: {MessageBot},
    extraScopes: [
      {
        scope: ['MessageBot'],
        from: 'MessageBot',
        isComp: true,
      },
    ],
    element: `
    <div>
      <div> Neeche Dekho Neecheee... </div>
      <MessageBot
        orgName="UIgnite"
        themeColor="bg-blue-500"
        url="https://dummyimage.com/100x100/000/fff&text=U"
        alt="Bot avatar"
      />
    </div>
    `,
    variation: [],
  },
  {
    id: 'navbar',
    scope: {Navbar},
    extraScopes: [
      {
        scope: ['Navbar'],
        from: 'Navbar',
        isComp: true,
      },
    ],
    element: `
      <Navbar
        lightLogo="https://dummyimage.com/100x40/ffffff/000000&text=Light+Logo"
        darkLogo="https://dummyimage.com/100x40/000000/ffffff&text=Dark+Logo"
        lightGithub="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        darkGithub="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        lightThemeIcon="https://cdn-icons-png.flaticon.com/512/1164/1164954.png"
        darkThemeIcon="https://cdn-icons-png.flaticon.com/512/1164/1164966.png"
        navLinks={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Projects", href: "#" },
          { label: "Contact", href: "#" }
        ]}
          className=" min-w-[50vw]"
      />
    `,
    variation: [],
  },
  {
    id: 'pricingCard',
    scope: {PricingCard, Link},
    extraScopes: [
      {
        scope: ['PricingCard'],
        from: 'PricingCard',
        isComp: true,
      },
      {
        scope: ['Link'],
        from: 'react-router-dom',
      },
    ],
    element: `
    <>
      <div className="flex  justify-center items-center">
        <PricingCard 
          title="Pro Plan"
          price="29"
          validity="per month"
          description="Get access to all features and premium support."
          features={[
            "Unlimited API requests",
            "24/7 customer support",
            "Access to premium templates",
            "Advanced analytics"
          ]}
          highlighted={false}
          theme="dark"
          popular={false}
        />
      </div>
      <div className="ml-2 mt-5"> For the best experience, please view the <Link to="/pricing" className="text-blue-600 cursor-pointer">Pricing page</Link> on a larger screen.</div>
    </>
  `,
    variation: [],
  },
  // {
  //   id: 'resizable',
  //   scope: {Resizable},
  //   extraScopes: [
  //     {
  //       scope: ['Resizable'],
  //       from: 'Resizable',
  //       isComp: true,
  //     },
  //   ],
  //   element: `<div className='relative w-[500px] h-26'>
  //     <Resizable className='h-20'>
  //       <div className='w-full h-full bg-amber-200'></div>
  //       <div className='w-full h-full bg-rose-200'></div>
  //     </Resizable>
  //   </div>`,
  // },
  {
    id: 'skeleton',
    scope: {Skeleton},
    extraScopes: [
      {
        scope: ['Skeleton'],
        from: 'Skeleton',
        isComp: true,
      },
    ],
    element: `
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
    `,
    variation: [
      `
      <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Product Card</h2>
        <Skeleton className="h-48 w-full rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
      </div>
          `,
      `
      <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Social Media Post</h2>
        <div className="flex items-center mb-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="ml-3 flex-1">
            <Skeleton className="h-4 w-32 mb-1" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-4/5 mb-4" />
        <Skeleton className="h-56 w-full rounded-lg mb-4" />
      </div>
          `,
      `
      <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Profile Card</h2>
        <div className="flex flex-col items-center mb-6">
          <Skeleton className="h-24 w-24 rounded-full mb-4" />
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-32 mb-4" />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <Skeleton className="h-5 w-12 mx-auto mb-1" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
          <div className="text-center">
            <Skeleton className="h-5 w-12 mx-auto mb-1" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
          <div className="text-center">
            <Skeleton className="h-5 w-12 mx-auto mb-1" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
        </div>
        <Skeleton className="h-14 w-full rounded-md" />
      </div>
          `,
      `
      <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Notification</h2>
        <div className="flex gap-4">
        <Skeleton className="h-6 w-6 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-3 w-[60%]" />
        </div>
        </div>
      </div>
          `,
      `
      <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Inovice Bill</h2>
        <Skeleton className="h-5 w-1/2 mb-3" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>
      </div>
         `,
      `  
      <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Media Player</h2>
        <div className="flex gap-4" >
          <Skeleton className="h-16 w-16 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-[220px]" />
            <Skeleton className="h-4 w-[160px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>
        </div>
      </div>`,
    ],
  },
  {
    id: 'spinner',
    scope: {Spinner},
    extraScopes: [
      {
        scope: ['Spinner'],
        from: 'Spinner',
        isComp: true,
      },
    ],
    element: `
    <div className="grid grid-cols-1">
      <Spinner variant="bounce" className="my-4" />
    </div>      
    `,
    variation: [
      `<Spinner variant="bars" className="my-4" />`,
      `<Spinner variant="circular" className="my-4" />`,
      `<Spinner variant="ripple" className="my-4" />`,
      `<Spinner variant="terminal" className="my-4" />`,
      `<Spinner variant="loader" className="my-4" />`,
    ],
  },
  {
    id: 'switch',
    scope: {Switch},
    extraScopes: [
      {
        scope: ['Switch'],
        from: 'Switch',
        isComp: true,
      },
    ],
    element: `<Switch defaultState={true} />`,
    variation: [],
  },
  {
    id: 'Tabs',
    scope: {Tabs, TabList, Tab, TabContent},
    extraScope: [
      {
        scope: ['Tabs', 'TabList', 'Tab', 'TabContent'],
        from: 'Tabs',
      },
    ],
    element: `
      <Tabs defaultVal="before">
        <TabList className="w-[400px] ">
          <Tab title="Before" value="before"></Tab>
          <Tab title="After" value="after"></Tab>
        </TabList>
        <TabContent
          content={<div className="m-2 p-2 rounded-md dark:bg-neutral-800"> Preview Content from Tab 1 </div>}
          value="before" 
        ></TabContent>
        <TabContent 
          content={<div className="m-2 p-2 rounded-md dark:bg-neutral-800"> Code Content of Tab 2 </div>} 
          value="after"
        ></TabContent>
      </Tabs>
    `,
    variation: [],
  },

  {
    id: 'Testimonials',
    scope: {Testimonials},
    extraScopes: [
      {
        scope: ['Testimonials'],
        from: 'Testimonials',
        isComp: true,
      },
    ],
    element: `
     function Testimonial () {
     
   const testimonials = [
     {
       imageSrc: '/piyush-sir.png',
       name: 'Piyush Garg',
       title: 'Co-founder of OnlyFans',
       message:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem, dolorum iusto temporibus provident totam tempore atque molestiae excepturi unde voluptates dolor culpa vero ut quia sint iste harum eveniet?',
       rating: 5,
     },
   ];
 
     return (<div className="flex">
       {testimonials.map((testimonial, index) => (
         <Testimonials
           className=" w-[450px] max-h-[200px]"
           key={index}
           imageSrc={testimonial.imageSrc}
           name={testimonial.name}
           title={testimonial.title}
           message={testimonial.message}
           rating={testimonial.rating}
         />
       ))}
     </div>)
     }
    
     `,
    variation: [],
  },

  {
    id: 'textarea',
    scope: {TextArea},
    extraScopes: [
      {
        scope: ['TextArea'],
        from: 'TextArea',
        isComp: true,
      },
    ],
    element: `<TextArea placeholder="Write something..." />`,
    variation: [],
  },
  {
    id: 'toast',
    scope: {useToast, Toast, Button},
    extraScopes: [
      {
        scope: ['useToast'],
        from: 'toast',
        isHook: true,
      },
      {
        scope: ['Toast'],
        from: 'Toast',
        isComp: true,
      },
      {
        scope: ['Button'],
        from: 'Button',
        isComp: true,
      },
    ],
    element: `
    function ToastPreview() {
      const toast = useToast();

      return (
        <Button
          onClick={() => {
            toast.showToast('Hover Me ', {
              desc: \`I am the new \$\{Math.floor(Math.random() * 100) + 1\}\`,
              timeout: 3000,
            });
          }}
          className="mt-5 bg-gray-50 text-black hover:bg-gray-100"
        >
          Browse Components
        </Button>
      )
    }
    `,
    variation: [],
  },
  {
    id: 'tooltip',
    scope: {Tooltip},
    extraScopes: [
      {
        scope: ['Tooltip'],
        from: 'Tooltip',
        isComp: true,
      },
    ],
    element: `
      <Tooltip title="Tooltip" options={{ delay: 500 }}>
        <button className="cursor-pointer px-4 py-2 bg-neutral-800 text-white rounded">Hover me</button>
      </Tooltip>
    `,
    variation: [],
  },
  {
    id: 'VideoPlayer',
    scope: {VideoPlayer},
    extraScopes: [
      {
        scope: ['VideoPlayer'],
        from: 'VideoPlayer',
        isComp: true,
      },
    ],
    element: `
      <div className="flex items-center justify-center ">
        <VideoPlayer
          src="https://res.cloudinary.com/do2tmd6xp/video/upload/v1744979534/5xnmps_2_pr75vu.mp4"
          thumbnailUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          muted
          autoplay
          loop
          className="shadow-black dark:shadow-indigo-900 shadow-2xl rounded-xl"
        />
      </div>
    `,
    variation: [],
  },
];

export default elements;
