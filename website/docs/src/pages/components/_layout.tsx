import {Outlet, useParams} from 'react-router-dom';
// import ComponentList from './componentList';
import {components} from '../../utils/lib';
import {useNavigate} from 'react-router-dom';
// import {Button} from '@pkgs/uignite/dist';
import TableOfContents from './TableOfContent';
import {Introduction} from './Introduction';
import {Installation} from './Installation';
import {cn} from '@pkgs/uignite';
import {useState} from 'react';
import {X, Menu} from 'lucide-react';

interface SideBarProps {
  className?: string;
  closeSidebar?: () => void;
}

export default function ComponentLayout() {
  const {componentId} = useParams();
  // const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex justify-center items-center scroll-smooth overflow-hidden h-screen w-screen">
      <button
        className="lg:hidden fixed top-4 left-4  p-2 rounded-md bg-neutral-100 dark:bg-neutral-800"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="w-[1400px] h-[calc(90vh-25px)] flex mt-10 relative">
        {/* Side Bar  */}
        <SideBar
          className={`${sidebarOpen ? 'block z-100 rounded-md bg-neutral-900 fixed max-w-[90%] w-full ml-2 lg:hidden ' : 'hidden '}`}
          closeSidebar={() => setSidebarOpen(false)}
        />

        <div className="flex-grow max-h-[90vh] px-4 scrollable-content overflow-y-scroll scroll-smooth">
          {componentId ? (
            componentId === 'Introduction' ? (
              <>
                {' '}
                <Introduction />{' '}
              </>
            ) : componentId === 'Installation' ? (
              <>
                {' '}
                <Installation />
              </>
            ) : (
              <Outlet />
            )
          ) : (
            // <ComponentList />
            <Introduction />
          )}
        </div>

        {componentId && (
          <div className="min-w-[20%] h-full overflow-y-scroll scrollable-content  px-4 hidden lg:block">
            <h3 className="text-lg font-semibold dark:text-white mb-2 ">
              On this page
            </h3>
            <div className=" border border-l-neutral-800 dark:border-l-white border-r-0 border-b-0 border-t-0">
              <TableOfContents />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const SideBar = ({className = '', closeSidebar}: SideBarProps) => {
  const navigate = useNavigate();
  const {componentId} = useParams();

  const handleNavigation = (path: any) => {
    navigate(path);
    if (closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <div
      className={cn(
        ' ml-[4%] min-w-[15%] mr-[1%] max-h-[90vh] overflow-y-scroll scrollable-content lg:flex flex-col gap-y-2  hidden',
        className
      )}
    >
      <div>
        <div className="font-med font-bold ">Getting Started</div>
        <ul className="text-gray-700 my-4 flex flex-col gap-y-2">
          <button
            className=" text-left  cursor-pointer p-2 rounded-md hover:bg-neutral-200 dark:hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-700"
            onClick={() => handleNavigation('/components/Installation')}
          >
            Installation
          </button>
        </ul>
        <div className="font-med font-bold ">Components</div>
        <ul className="text-gray-700 my-4 flex flex-col gap-y-2">
          {components.map((component, index) => (
            <button
              aria-selected={
                componentId?.toLowerCase().trim() ==
                component.id.toLowerCase().trim()
              }
              key={index}
              onClick={() => handleNavigation(`/components/${component.id}`)}
              className="text-left dark:aria-selected:bg-neutral-700/50 aria-selected:bg-neutral-200/80 cursor-pointer p-2 rounded-md hover:bg-neutral-200 dark:hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-700"
            >
              {component.name}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};
