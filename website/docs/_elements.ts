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
  NavMenu,
  PricingCard,
  Resizable,
  Skeleton,
  Spinner,
  TabContent,
  TabList,
  Tabs,
  Tab,
  Textarea,
  Tooltip,
  Switch,
} from '@pkgs/uignite';
import {Toast as ToastUi} from '@pkgs/uignite';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import {Link} from 'react-router-dom';

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
  },
  {
    id: 'avatar',
    scope: {Avatar},
    element: `
      <>
        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />
      </>
    `,
  },
  {
    id: 'avatargroup',
    scope: {AvatarGroup},
    element: `
      <AvatarGroup>
        <img src="https://i.pravatar.cc/100?img=1" alt="1" />
        <img src="https://i.pravatar.cc/100?img=2" alt="2" />
        <img src="https://i.pravatar.cc/100?img=3" alt="3" />
      </AvatarGroup>
    `,
  },
  // {
  //   id: "avatargrouptooltip",
  //   scope: { AvatarGroupWithTooltip },
  //   element: `
  //     <AvatarGroupWithTooltip
  //       users={[
  //         { name: "Alice", src: "https://i.pravatar.cc/100?img=4" },
  //         { name: "Bob", src: "https://i.pravatar.cc/100?img=5" },
  //       ]}
  //     />
  //   `,
  // },
  {
    id: 'button',
    scope: {Button},
    element: `<div className="grid grid-cols-5 gap-10">
            <Button variant="primary">primary</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="success">success</Button>
            <Button variant="warning">warning</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button  variant="gradient" isLoading />
            <Button variant="ghost">ghost</Button>
            <Button variant="glass">glass</Button>
            <Button variant="dark">dark</Button>
            <Button variant="light">light</Button>
            <Button variant="gradient">gradient</Button>
            <Button animatedBorder>animated</Button>
            <Button gradientBorder>gradBorder</Button>
            <Button className="animate-border text-white font-semibold px-6 py-3 rounded-xl">
              Hover Me
            </Button>
          </div> 
    `,
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
    },
    element: `
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a short description inside the card.</CardDescription>
        </CardHeader>
        <CardContent>
          Here’s the main content of the card. You can add text, images, or even other components here.
        </CardContent>
        <CardFooter>
          <button className="text-sm text-blue-500">Action</button>
          <span className="text-xs text-muted-foreground">Footer note</span>
        </CardFooter>
      </Card>
    `,
  },
  {},
  // {
  //   id: "datepicker",
  //   scope: { DatePicker },
  //   element: `<DatePicker onChange={(date) => console.log(date)} />`,
  // },
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
  },
  {
    id: 'input',
    scope: {Input},
    element: `<Input placeholder="Type here..." />`,
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
  },
  {
    id: 'navmenu',
    scope: {NavMenu},
    element: `<NavMenu />`,
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
  },
  {
    id: 'spinner',
    scope: {Spinner},
    element: `
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      <Spinner variant="bounce" className="my-4" />
      <Spinner variant="bars" className="my-4" />
      <Spinner variant="circular" className="my-4" />
      <Spinner variant="ripple" className="my-4" />
      <Spinner variant="terminal" className="my-4" />
      <Spinner variant="loader" className="my-4" />
    </div>      
    `,
  },
  {
    id: 'switch',
    scope: {Switch},
    element: `<Switch defaultState={true} />`,
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
  },
  {
    id: 'textarea',
    scope: {Textarea},
    element: `<TextArea placeholder="Write something..." />`,
  },
  {
    id: 'toast',
    scope: {ToastUi},
    element: `<Toast message="This is a toast!" type="success" />`,
  },
  {
    id: 'tooltip',
    scope: {Tooltip},
    element: `
      <Tooltip title="This is a tooltip" options={{ delay: 500 }}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    `,
  },
];

export default elements;
