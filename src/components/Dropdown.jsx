import React, { useCallback, useRef, useState } from "react";
import { Button } from "./Button";

export default function Dropdown({ children, button, title="Open" }) {
  const buttonRef = useRef(null);
  const dropDownRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleToogleOpen = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <React.Fragment>
      {open ? (
        <span
          onClick={handleToogleOpen}
          className="fixed z-10 bg-black/20 inset-0"
        ></span>
      ) : null}
      <div>
        {open ? (
          <div
            ref={dropDownRef}
            style={{
              top: buttonRef.current.getBoundingClientRect().top + 50,
            }}
            className="min-w-56 fixed z-20 bg-neutral-200 min-h-5 rounded-lg border border-neutral-400 shadow p-1 flex flex-col gap-y-1"
          >
            {children}
          </div>
        ) : null}
        <div ref={buttonRef} role="button" onClick={handleToogleOpen}>
          {button ?? <Button>{title}</Button>}
        </div>
      </div>
    </React.Fragment>
  );
}
