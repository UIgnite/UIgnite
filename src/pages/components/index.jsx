import React from "react";
import { useParams } from "react-router-dom";
import { Preview } from "./Preview";
import { codeString } from "./codeString";
import { components } from "../../utils/lib";

export default function Component() {
  const { componentId } = useParams();
  const currComponent = components.find(
    (component) =>
      component.id.trim().toLowerCase() === componentId.trim().toLowerCase(),
  );

  if (!currComponent) {
    return <div className="text-red-500">Component not found.</div>;
  }
  console.log(currComponent);
  return (
    <div>
      <div className="text-4xl font-semibold">{currComponent.name}</div>
      <div className="text-neutral-300">{currComponent.desc}</div>

      <Preview codeString={codeString} element={currComponent.element} />
    </div>
  );
}
