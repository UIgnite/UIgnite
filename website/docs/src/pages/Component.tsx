import {
  Accordion,
  AccordionWrapper,
  Avatar,
  Button,
  MessageBot,
  NavMenu,
  Skeleton,
  Tab,
  TabContent,
  TabList,
  Tabs,
  Textarea,
  Tooltip,
  useToast,
} from '@pkgs/uignite';
import Navbar from '../components/Navbar';
import Resizable from '../components/Resizable';
// import { DatePicker } from "@pkgs/uignite";

const Components = () => {
  const toast = useToast(); // Correct placement
  // const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="relative">
        <Resizable className="h-20">
          <div className="w-full h-full bg-amber-200"></div>
          <div className="w-full h-full bg-rose-200"></div>
        </Resizable>
      </div>

      {/* <Navbar
        lightLogo={'/Darklogo.svg?url'}
        darkLogo={'/Logo.svg'}
        lightGithub={'/GD.png'}
        darkGithub={'/GL.png'}
        lightThemeIcon={'/dark.png'}
        darkThemeIcon={'/light.png'}
        navLinks={[
          {label: 'Home', href: '#home'},
          {label: 'Docs', href: '#docs'},
          {label: 'Components', href: '#components'},
          {label: 'Team', href: '#team'},
        ]}
      /> */}
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center">
        <Button
          onClick={() => {
            toast.showToast('New toast here', {
              desc: 'I am the new desc.',
              timeout: 3000,
            });
          }}
          className="mt-5 bg-gray-50 text-black hover:bg-gray-100"
        >
          Browse Components
        </Button>
        <NavMenu items={[]} />

        <div className="flex items-center space-x-4 mt-8">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        <Tooltip
          title="I am a title"
          options={{
            delay: 300,
          }}
        >
          <Button variant="dark"> Hover Me </Button>
        </Tooltip>

        <Avatar url={'/piyush-sir.png'} alt={'user'} />
        <Avatar url={'/hitesh-sir.png'} alt={'user'} />
        {/* 
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          placeholder="Select a date"
          className="w-64"
          darkMode={true}
        /> */}

        {/* {selectedDate && (
          <p className="mt-2 text-gray-400">
            Selected Date: {selectedDate.toLocaleDateString()}
          </p>
        )} */}

        <Button className="mt-10" isLoading />
        <Button variant="gradient" className="mt-10">
          Click Me
        </Button>

        <Tabs defaultVal="preview">
          <TabList activeTab="">
            <Tab title="Preview" value="preview"></Tab>
            <Tab title="Code" value="code"></Tab>
          </TabList>
          <TabContent
            content={<div>THis is preview</div>}
            value="preview"
          ></TabContent>
          <TabContent content={<div></div>} value="code"></TabContent>
        </Tabs>

        <Tooltip title={'I am Tooltip '} options={{delay: 300}}>
          <Button variant="dark"> Hover Me </Button>
        </Tooltip>

        <AccordionWrapper>
          <Accordion
            title="Title 1"
            content="Content 1"
            className="bg-gray-900"
            defaultOpen
          />
          <Accordion
            title="Title 2"
            content="Content 2"
            className="bg-gray-700"
            defaultOpen={false}
          />
        </AccordionWrapper>

        <MessageBot url={'/piyush-sir.png'} alt={'/hitesh-sir.png'} />
        <MessageBot
          url={'/piyush-sir.png'}
          alt={'/hitesh-sir.png'}
        ></MessageBot>

        <Textarea
          placeholder="Type your message here..."
          className="w-96 h-30 max-w-full my-4"
        ></Textarea>
      </div>
    </>
  );
};

export default Components;
