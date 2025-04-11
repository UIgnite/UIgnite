import React from "react";
import { useParams } from "react-router-dom";
import { Preview } from "./Preview";
import { codeString, components, elements } from "../../utils/lib";
import { Install } from "./Install";
import { Properties } from "./Properties";

export default function Component() {
  const { componentId } = useParams();
  const currComponent = components.find(
    (component) =>
      component.id.trim().toLowerCase() === componentId.trim().toLowerCase(),
  );

  const element = elements.find(
    (element) =>
      element.id.toLowerCase().trim() == componentId.trim().toLowerCase(),
  );

  const codeStr = codeString.find(
    (element) =>
      element.id.toLowerCase().trim() == componentId.trim().toLowerCase(),
  );

  if (!currComponent) {
    return <div className="text-red-500">Component not found.</div>;
  }

  return (
    <div className="mb-5 w-[90%]">
      <div className="text-4xl font-semibold">{currComponent.name}</div>
      <div className="text-neutral-300">{currComponent.desc}</div>

      <Preview currComponent={codeStr} element={element} />

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-neutral-700" />

      <div className="text-4xl mt-4 font-semibold"> Installation </div>
      <Install
        componentId={currComponent.id}
        codeString={codeStr}
        element={element ? element.element : <></>}
      />

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-neutral-700" />

      <div className="text-4xl mt-4 font-semibold"> Props </div>
      <Properties componentId={currComponent.id} />
    </div>
  );
}
