import React from "react";
import { Button } from "../components/Button";
import { Tooltip } from "../components/Tooltip";
import { useToast } from "../hooks/toast";
import Avatar from "../components/Avatar";

const Components = () => {
  const toast = useToast();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen  text-center bg-zinc-700">
        <Button
          onClick={() => {
            toast.showToast("New toast here", {
              desc: "I am the new desc.",
              timeout: 3000,
            });
          }}
          className="mt-5 bg-gray-50 text-black hover:bg-gray-100"
        >
          Browse Components
        </Button>

        <Tooltip className="" title={"I am Tooltip "} options={{ delay: 300 }}>
          <Button>Hover me</Button>
        </Tooltip>

        <Avatar url={"piyush-sir.png"} alt={"user"} />
        <Avatar url={"hitesh-sir.png"} alt={"user"} />
      </div>
    </>
  );
};

export default Components;
