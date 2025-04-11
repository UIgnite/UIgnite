import React from "react";
import { components } from "../../utils/lib";

const Properties = ({ componentId }) => {
  const currComponent = components.find((component) => {
    return component.id === componentId;
  });
  //   console.log("curr", currComponent);

  return (
    <div className="w-[90%]">
      <div class="relative  overflow-x-auto rounded-md mt-4 ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Props
              </th>
              <th scope="col" class="px-6 py-3">
                type
              </th>
              <th scope="col" class="px-6 py-3">
                desc
              </th>
              <th scope="col" class="px-6 py-3">
                default Value
              </th>
            </tr>
          </thead>
          <tbody>
            {currComponent.props.map((item, idx) => (
              <React.Fragment key={idx}>
                <tr class="bg-white border-b dark:bg-neutral-900 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.prop}
                  </th>
                  <td class="px-6 py-4">{item.type}</td>
                  <td class="px-6 py-4">{item.desc}</td>
                  <td class="px-6 py-4">{item.defaultValue}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Properties };
