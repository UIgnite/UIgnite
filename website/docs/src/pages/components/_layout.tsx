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
import {ChevronRight} from 'lucide-react';

interface SideBarProps {
  className?: string;
  closeSidebar?: () => void;
}

export default function ComponentLayout() {
  const {componentId} = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (path: any) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div
        role="button"
        tabIndex={0}
        onClick={toggleSidebar}
        className="h-10 md:hidden items-center bg-neutral-900 active:bg-neutral-800 transition-colors flex justify-between border-y text-sm px-5 text-neutral-400 border-neutral-600 border-dashed"
      >
        <div className="flex gap-x-1">
          <span>Components</span>
          <span>/</span>
          <span className="text-neutral-200">{componentId}</span>
        </div>
        <div>
          <ChevronRight className="size-4" />
        </div>
      </div>
      <div className="flex justify-center items-center scroll-smooth relative">
        <div
          aria-hidden={!sidebarOpen}
          className="bg-black aria-hidden:hidden md:hidden inset-0 z-20 absolute overflow-y-auto"
        >
          <div className="px-2 py-2 bg-neutral-800/50">Getting Started</div>
          <div className="flex flex-col gap-y-1">
            <button
              onClick={() => handleNavigation('/components/introduction')}
              className="text-left px-6 text-neutral-200 py-2"
            >
              Introduction
            </button>
            <button
              onClick={() => handleNavigation('/components/installation')}
              className="text-left px-6 text-neutral-200 py-2"
            >
              Installation
            </button>
          </div>
          <div className="px-2 py-2 bg-neutral-800/50">Components</div>
          <div className="flex flex-col gap-y-1">
            {components.map((compo) => (
              <button
                onClick={() => handleNavigation(`/components/${compo.id}`)}
                className="text-left px-6 text-neutral-200 py-2 aria-active:bg-neutral-900 active:bg-neutral-900"
              >
                {compo.name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-[1400px] h-full flex pt-8 relative">
          {/* Side Bar  */}
          <SideBar />

          <div className="flex-grow max-h-[90vh] md:px-4 scrollable-content overflow-y-scroll scroll-smooth">
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
    </div>
  );
}

const SideBar = ({className = ''}: SideBarProps) => {
  const navigate = useNavigate();
  const {componentId} = useParams();

  const handleNavigation = (path: any) => {
    navigate(path);
  };

  return (
    <div
      className={cn(
        ' ml-[4%] min-w-[15%] mr-[1%] max-h-[90vh] overflow-y-scroll scrollable-content lg:flex flex-col gap-y-2 hidden',
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
