import React, { useState } from "react";

export default function Switch({ defaultState=false, }) {
  const [state, setState] = useState(defaultState);

  return (
    <div
      role="switch"
      tabIndex={0}
      onClick={() => setState(!state)}
      className={`w-8 h-5 cursor-pointer bg-neutral-100 rounded-full relative`}
    >
      <div
        className={`size-4 bg-black rounded-full absolute transition-all ease-in-out duration-300 top-1/2 ${
          state ? "translate-x-0.5" : "translate-x-3.5"
        } -translate-y-1/2`}
      />
    </div>
  );
}
