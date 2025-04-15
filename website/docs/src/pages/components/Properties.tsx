import React from 'react';
import {getComponentById} from '../../utils/lib';

const Properties = ({componentId}: {componentId: string}) => {
  const currComponent = getComponentById(componentId);

  if (!currComponent) return <div>404 Not found</div>;

  return (
    <div className="w-[90%]">
      <div className="relative  overflow-x-auto rounded-md mt-4 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Props
              </th>
              <th scope="col" className="px-6 py-3">
                type
              </th>
              <th scope="col" className="px-6 py-3">
                desc
              </th>
              <th scope="col" className="px-6 py-3">
                default Value
              </th>
            </tr>
          </thead>
          <tbody>
            {currComponent.props.map((item: any, idx: number) => (
              <React.Fragment key={idx}>
                <tr className="bg-white border-b dark:bg-neutral-900 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.prop}
                  </th>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">{item.desc}</td>
                  <td className="px-6 py-4">{item.defaultValue}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export {Properties};
