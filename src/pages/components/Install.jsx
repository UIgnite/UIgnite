import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../../components/Tabs";
import { useParams } from "react-router-dom";
import React, { useCallback, useState } from "react";
import { codeString, components, elements } from "../../utils/lib";

const Install = ({ codeString , componentId, element }) => {
  const [copied, setCopied] = useState(false);

  console.log(componentId);
  const currComponent = components.find(
    (component) =>
      component.id.trim().toLowerCase() === componentId.trim().toLowerCase(),
  );
  if (!componentId) {
    return <div className="text-red-500">Code not found.</div>;
  }

  const handleCopyCodeBlock = useCallback(() => {
    window.navigator.clipboard.writeText(currComponent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [currComponent, setCopied]);

  // console.log(atomOneDarkReasonable);
  const commandElement = (
    <div className=" w-full h-[50px] relative">
      <button
        onClick={handleCopyCodeBlock}
        className="absolute right-2 top-2 py-1.5 px-1.5 cursor-pointer bg-neutral-900 rounded-md border border-neutral-500"
      >
        {copied ? (
          <svg
            className="stroke-neutral-300 size-4"
            viewBox="0 0 16 16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <path d="M2.75 8.75l3.5 3.5 7-7.5" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="fill-neutral-300 size-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 8a3 3 0 00-3-3h-8a3 3 0 00-3 3v12a3 3 0 003 3h8a3 3 0 003-3V8zm-2 0a1 1 0 00-1-1h-8a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V8z"
            />
            <path d="M6 3h10a1 1 0 100-2H6a3 3 0 00-3 3v14a1 1 0 102 0V4a1 1 0 011-1z" />
          </svg>
        )}
      </button>
      <SyntaxHighlighter
        style={{
          ...atomOneDarkReasonable,
          hljs: {
            ...atomOneDarkReasonable.hljs,
            background: "rgb(24, 24, 24)",
          },
        }}
        language="cli"
        className="mb-7 text-left text-sm h-full min-w-full rounded-md scrollable-content"
      >
        {currComponent.command}
      </SyntaxHighlighter>
    </div>
  );

  const installationElement = (
    <div className="w-full" >
      <div className="font-bold text-xl mt-3 mb-2" >
        {currComponent.installation[0].title}
      </div>

      <div className=" w-full h-[50px] relative">
        <button
          onClick={handleCopyCodeBlock}
          className="absolute right-2 top-2 py-1.5 px-1.5 cursor-pointer bg-neutral-900 rounded-md border border-neutral-500"
        >
          {copied ? (
            <svg
              className="stroke-neutral-300 size-4"
              viewBox="0 0 16 16"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path d="M2.75 8.75l3.5 3.5 7-7.5" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="fill-neutral-300 size-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 8a3 3 0 00-3-3h-8a3 3 0 00-3 3v12a3 3 0 003 3h8a3 3 0 003-3V8zm-2 0a1 1 0 00-1-1h-8a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V8z"
              />
              <path d="M6 3h10a1 1 0 100-2H6a3 3 0 00-3 3v14a1 1 0 102 0V4a1 1 0 011-1z" />
            </svg>
          )}
        </button>
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
          {currComponent.installation[0].codeBlock}
        </SyntaxHighlighter>
      </div>
      
      <div className="font-bold text-xl mt-2 mb-2" >
        {currComponent.installation[1].title}
      </div>

      <div className=" w-full h-[50%] relative">
      
        <SyntaxHighlighter
          language="javascript"
          style={{
            ...atomOneDarkReasonable,
            hljs: {
              ...atomOneDarkReasonable.hljs,
              background: "rgb(24, 24, 24)",
            },
          }}
          className="mb-7 text-left text-sm h-full min-w-full rounded-md scrollable-content"
        >
          {codeString.element}
        </SyntaxHighlighter>
      </div>
    </div>
  )
  

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
              <TabList className="bg-neutral-900 ">
                <Tab title="npm" value="cli" ></Tab>
              </TabList>
              <TabContent
                defaultVal="npm"
                content={commandElement}
                value="cli"
              ></TabContent>
            </Tabs>
          }
          value="cli"
        ></TabContent>
        <TabContent content={installationElement} value="manual"></TabContent>
      </Tabs>
    </div>
  );
};

export { Install };
