import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../../components/Tabs";
import React, { useState } from "react";
import { components } from "../../utils/lib";
import CopyButton from "./copyButton";

const Install = ({ codeString, componentId, element }) => {
  console.log(componentId);
  const currComponent = components.find(
    (component) =>
      component.id.trim().toLowerCase() === componentId.trim().toLowerCase(),
  );
  if (!componentId) {
    return <div className="text-red-500">Code not found.</div>;
  }

  const CommandElement = () => {
    return (
      <div className=" w-full h-[50px] relative cli">
        <CopyButton copyText={currComponent.command} />
        <SyntaxHighlighter
          style={{
            ...atomOneDarkReasonable,
            hljs: {
              ...atomOneDarkReasonable.hljs,
              background: "rgb(24, 24, 24)",
            },
          }}
          language="cli"
          className="text-left text-sm h-full min-w-full rounded-md"
        >
          {`npx uignite add ${componentId}`}
        </SyntaxHighlighter>
      </div>
    );
  };

  const InstallationElement = () => {
    return (
      <div className="w-full">
        {currComponent.installation.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="font-bold text-xl mt-3 mb-2">{item.title}</div>

            <div className=" w-full h-[50px] relative">
              <CopyButton copyText={item.codeBlock} />
              <SyntaxHighlighter
                language="cli"
                style={{
                  ...atomOneDarkReasonable,
                  hljs: {
                    ...atomOneDarkReasonable.hljs,
                    background: "rgb(24, 24, 24)",
                  },
                }}
                className="mb-7 text-left text-sm h-full min-w-full rounded-md scrollable-content"
              >
                {item.codeBlock}
              </SyntaxHighlighter>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className=" min-w-[80%] flex flex-col">
      <Tabs defaultVal="cli">
        <TabList>
          <Tab title="CLI" value="cli"></Tab>
          <Tab title="Manual" value="manual"></Tab>
        </TabList>
        <TabContent
          content={
            <Tabs defaultVal="cli">
              <TabList>
                <Tab title="npm" value="cli"></Tab>
              </TabList>
              <TabContent
                defaultVal="npm"
                content={<CommandElement />}
                value="cli"
              ></TabContent>
            </Tabs>
          }
          value="cli"
        ></TabContent>
        <TabContent
          content={<InstallationElement />}
          value="manual"
        ></TabContent>
      </Tabs>
    </div>
  );
};

export { Install };
