import {Outlet, useParams} from 'react-router-dom';
// import ComponentList from './componentList';
import {components} from '../../utils/lib';
import {useNavigate} from 'react-router-dom';
// import {Button} from '@pkgs/uignite/dist';
import TableOfContents from './TableOfContent';
import {Introduction} from './Introduction';
import {Installation} from './Installation';

export default function ComponentLayout() {
  const {componentId} = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center scroll-smooth">
      <div className="w-[1400px] h-[calc(90vh-25px)] flex mt-10 ">
        {/* Side Bar  */}
        {
          <div className=" ml-[4%] min-w-[15%] mr-[1%] max-h-[90vh] overflow-y-scroll scrollable-content lg:flex flex-col gap-y-2 justify-start hidden ">
            <div>
              <div className="font-med font-bold ">Getting Started</div>
              <ul className="text-gray-700 my-4 flex flex-col gap-y-2">
                <button
                  className=" text-left  cursor-pointer p-2 rounded-md hover:bg-neutral-200 dark:hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-700"
                  onClick={() => navigate('/components/Installation')}
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
                    onClick={() => navigate(`/components/${component.id}`)}
                    className="text-left dark:aria-selected:bg-neutral-700/50 aria-selected:bg-neutral-200/80 cursor-pointer p-2 rounded-md hover:bg-neutral-200 dark:hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    {component.name}
                  </button>
                ))}
              </ul>
            </div>
          </div>
        }

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
