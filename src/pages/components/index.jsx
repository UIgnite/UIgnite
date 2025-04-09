import React from "react";
import { useParams } from "react-router-dom";

export default function Component() {
  const { componentId } = useParams();

  return (
    <div>
      <div className="text-4xl font-semibold">Button</div>
      <div className="text-neutral-300">
        Button is a button whose role is button which is button is called
        button.
      </div>
    </div>
  );
}
