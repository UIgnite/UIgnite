import {
  Accordion,
  AccordionWrapper,
  Avatar,
  AvatarGroup,
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
  Resizable,
  Skeleton,
  Spinner,
  TabContent,
  TabList,
  Tabs,
  Tab,
  TextArea,
  Tooltip,
  Switch,
  Toast,
  useToast,
  Carosuel,
} from '@pkgs/uignite';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Info} from 'lucide-react';
import { CommandButton } from './src/components/CommandButton';
import { AlarmClockCheck } from 'lucide-react';

const elements = [
  {
    id: 'accordion',
    scope: {Accordion, AccordionWrapper},
    element: `
      <div className="relative z-10">
        <AccordionWrapper>
          <Accordion
            title="What is MobiMart?"
            content="MobiMart is an e-commerce platform selling mobile gadgets like earbuds, phones, and speakers."
            className="bg-gray-100 hover:bg-white  border-[0.5px] dark:border-neutral-800"
          />
          <Accordion
            title="How long does delivery take?"
            content="Typically 2-4 business days depending on your location."
            className="bg-gray-100 hover:bg-white  border-[0.5px] dark:border-neutral-800"
          />
          <Accordion
            title="Can I return a product?"
            content="Yes, we have a 7-day easy return policy."
            className="bg-gray-100 hover:bg-white  border-[0.5px] dark:border-neutral-800"
          />
        </AccordionWrapper>
      </div>
    `,
    variation: [],
  },
  {
    id: 'avatar',
    scope: {Avatar, AvatarGroup},
    element: `
      <>
        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />
        
      </>
    `,
    variation: [],
  },
  {
    id: 'button',
    scope: {Button,CommandButton,AlarmClockCheck},
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
      ` <CommandButton/>`,
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
    },
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
          <div className="font-semibold text-2xl">Aman Gupta Besharam</div>
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
    ],
  },
  {
    id: 'Carosuel',
    scope: {Carosuel},
    element: ` <Carosuel className="h-full w-full   flex justify-center items-center">
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
    element: `
      <Dropdown  button={<div className=" bg-black p-2 px-4 text-gray-100  dark:bg-white dark:text-black rounded cursor-pointer">Menu</div>}   title="Options"
      
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
    scope: {Input},
    element: `<Input placeholder="Type here..." />`,
    variation: [],
  },
  {
    id: 'messagebot',
    scope: {MessageBot},
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
    element: `
    <>
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 px-4">
    <PricingCard 
      title="Pro Plan"
      price="$29"
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

   <PricingCard 
      title="Pro Plan"
      price="$29"
      validity="per month"
      description="Get access to all features and premium support."
      features={[
        "Unlimited API requests",
        "24/7 customer support",
        "Access to premium templates",
        "Advanced analytics"
      ]}
      highlighted={false}
      theme="dracula"
      popular={false}
  />
</div>
<div className="ml-5 mt-5"> For the best experience, please view the <Link to="/pricing" className="text-blue-600 cursor-pointer">Pricing page</Link> on a larger screen.</div>
</>
  
  
  `,
    variation: [],
  },
  {
    id: 'resizable',
    scope: {Resizable},
    element: `<div className='relative w-[500px] h-26'>
      <Resizable className='h-20'>
        <div className='w-full h-full bg-amber-200'></div>
        <div className='w-full h-full bg-rose-200'></div>
      </Resizable>
    </div>`,
  },
  {
    id: 'skeleton',
    scope: {Skeleton},
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


         `,`  <div className=" rounded-lg shadow-lg dark:shadow-black p-4 w-[360px] max-w-xl">
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
    element: `<Switch defaultState={true} />`,
    variation: [],
  },
  {
    id: 'Tabs',
    scope: {Tabs, TabList, Tab, TabContent},
    element: `
      <Tabs defaultVal="preview">
        <TabList className="w-[400px] ">
          <Tab title="Preview" value="preview"></Tab>
          <Tab title="Code" value="code"></Tab>
        </TabList>
        <TabContent
          content={<div className="m-2 p-2 rounded-md dark:bg-neutral-800"> Preview Content from Tab 1 </div>}
          value="preview" 
        ></TabContent>
        <TabContent className="p-2 "
          content={<div className="m-2 p-2 rounded-md dark:bg-neutral-800"> Code Content of Tab 2 </div>} 
          value="code"
        ></TabContent>
      </Tabs>
    `,
    variation: [],
  },
  {
    id: 'textarea',
    scope: {TextArea},
    element: `<TextArea placeholder="Write something..." />`,
    variation: [],
  },
  {
    id: 'toast',
    scope: {useToast, Toast, Button},
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
    element: `
      <Tooltip title="This is a tooltip" options={{ delay: 500 }}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    `,
    variation: [],
  },
];

export default elements;
