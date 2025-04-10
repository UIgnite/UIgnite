import React from "react";
import { useParams } from "react-router-dom";
import { Preview } from "./Preview";
import { codeString, components, elements } from "../../utils/lib";

export default function Component() {
  const { componentId } = useParams();
  const currComponent = components.find(
    (component) =>
      component.id.trim().toLowerCase() === componentId.trim().toLowerCase()
  );

  const element = elements.find(
    (element) =>
      element.id.toLowerCase().trim() == componentId.trim().toLowerCase()
  );

  const codeStr = codeString.find(
    (element) =>
      element.id.toLowerCase().trim() == componentId.trim().toLowerCase()
  );

  if (!currComponent) {
    return <div className="text-red-500">Component not found.</div>;
  }

  return (
    <div>
      <div className="text-4xl font-semibold">{currComponent.name}</div>
      <div className="text-neutral-300">{currComponent.desc}</div>

      <Preview
      currComponent={codeStr}
        element={element ? element.element : <></>}
      />
    </div>
  );
}
