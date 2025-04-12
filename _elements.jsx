// import { Button } from "./src/components/Button";
import { Accordion, AccordionWrapper } from "./src/components/Accordion";
import Avatar from "./src/components/Avatar";
import AvatarGroup from "./src/components/AvatarGroup";
import AvatarGroupWithTooltip from "./src/components/AvatarGroupWithTooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./src/components/Card";
import { DatePicker } from "./src/components/DatePicker";
import Dropdown from "./src/components/Dropdown";
import Input from "./src/components/Input";
import MessageBot from "./src/components/MessageBot";
import NavMenu from "./src/components/NavMenu";
import { PricingCard } from "./src/components/PricingCard";
import Resizable from "./src/components/Resizable";
import Skeleton from "./src/components/Skeleton";
import { Spinner } from "./src/components/Spinner";
import Switch from "./src/components/Switch";
import { Tabs } from "./src/components/Tabs";
import { Textarea } from "./src/components/Textarea";
import ToastUi from "./src/components/Toast";
import { Tooltip } from "./src/components/Tooltip";
import Footer from "./src/components/website/Footer";
import Navbar from "./src/components/website/Navbar";

export default [
  {
    id: "accordion",
    scope: { Accordion, AccordionWrapper },
    element: `
      <AccordionWrapper>
        <Accordion
          title="Title 1"
          content="Content 1"
          className="bg-gray-900"
          defaultOpen
          open
        />
        <Accordion
          title="Title 2"
          content="Content 2"
          className="bg-gray-700"
          defaultOpen={false}
          open
        />
      </AccordionWrapper>
    `,
  },
  {
    id: "avatar",
    scope: { Avatar },
    element: `
      <>
        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />
      </>
    `,
  },
  {
    id: "avatargroup",
    scope: { AvatarGroup },
    element: `
      <AvatarGroup>
        <img src="https://i.pravatar.cc/100?img=1" alt="1" />
        <img src="https://i.pravatar.cc/100?img=2" alt="2" />
        <img src="https://i.pravatar.cc/100?img=3" alt="3" />
      </AvatarGroup>
    `,
  },
  {
    id: "avatargrouptooltip",
    scope: { AvatarGroupWithTooltip },
    element: `
      <AvatarGroupWithTooltip
        users={[
          { name: "Alice", src: "https://i.pravatar.cc/100?img=4" },
          { name: "Bob", src: "https://i.pravatar.cc/100?img=5" },
        ]}
      />
    `,
  },
  // {
  //   id: "button",
  //   scope: { Button },
  //   element: `<Button variant="default" onClick={() => alert("Clicked!")}>Click Me</Button>`,
  // },
  {
    id: "card",
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
  {
    id: "datepicker",
    scope: { DatePicker },
    element: `<DatePicker onChange={(date) => console.log(date)} />`,
  },
  {
    id: "dropdown",
    scope: { Dropdown },
    element: `
      <Dropdown
        label="Choose Option"
        options={["Option 1", "Option 2", "Option 3"]}
        onChange={(val) => console.log(val)}
      />
    `,
  },
  {
    id: "footer",
    scope: { Footer },
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
    id: "input",
    scope: { Input },
    element: `<Input placeholder="Type here..." />`,
  },
  {
    id: "messagebot",
    scope: { MessageBot },
    element: `
      <MessageBot
        orgName="UIgnite"
        themeColor="bg-indigo-600"
        url="https://dummyimage.com/100x100/000/fff&text=U"
        alt="Bot avatar"
      />
    `,
  },
  {
    id: "navbar",
    scope: { Navbar },
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
      />
    `,
  },
  {
    id: "navmenu",
    scope: { NavMenu },
    element: `<NavMenu />`,
  },
  {
    id: "pricingCard",
    scope: { PricingCard },
    element: `<PricingCard 
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
      highlighted={true}
      theme="dark"
      popular={true}
  />`,
  },
  {
    id: "resizable",
    scope: { Resizable },
    element: `<Resizable
      className="custom-class"
      defaultPosition={300}
      horizontal={false}
    >
      <div className="bg-gray-300 p-4">Left Side Content</div>
      <div className="bg-gray-500 p-4">Right Side Content</div>
    </Resizable>`,
  },
  {
    id: "skeleton",
    scope: { Skeleton },
    element: `<Skeleton className="w-32 h-32" />`,
  },
  {
    id: "spinner",
    scope: { Spinner },
    element: `<Spinner className="h-12 w-12" />`,
  },
  {
    id: "switch",
    scope: { Switch },
    element: `<Switch defaultState={true} />`,
  },
  {
    id: "tabs",
    scope: { Tabs },
    element: `
      <Tabs
        tabs={[
          { label: "Tab 1", content: "Content 1" },
          { label: "Tab 2", content: "Content 2" },
        ]}
      />
    `,
  },
  {
    id: "textarea",
    scope: { Textarea },
    element: `<TextArea placeholder="Write something..." />`,
  },
  {
    id: "toast",
    scope: { ToastUi },
    element: `<Toast message="This is a toast!" type="success" />`,
  },
  {
    id: "tooltip",
    scope: { Tooltip },
    element: `
      <Tooltip title="This is a tooltip" options={{ delay: 500 }}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    `,
  },
];
