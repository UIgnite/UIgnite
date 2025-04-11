import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../../components/Tabs";
import { useParams } from "react-router-dom";
import React, { useCallback, useState } from "react";
import { codeString, components, elements } from "../../utils/lib";
import CopyButton from "./copyButton";

const Install = ({ codeString, componentId, element }) => {
  const [copied, setCopied] = useState(false);

  console.log(componentId);
  const currComponent = components.find(
    (component) =>
      component.id.trim().toLowerCase() === componentId.trim().toLowerCase(),
  );
  if (!componentId) {
    return <div className="text-red-500">Code not found.</div>;
  }

  const commandElement = (
    <div className=" w-full h-[50px] relative">
      <CopyButton copyText={currComponent.command}/>
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
        {`npx uignite add ${componentId}`}
      </SyntaxHighlighter>
    </div>
  );

  const installationElement = (
    <div className="w-full">
      <div className="font-bold text-xl mt-3 mb-2">
        {currComponent.installation[0].title}
      </div>

      <div className=" w-full h-[50px] relative">
        <CopyButton copyText={currComponent.installation[0].codeBlock}/>
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

      <div className="font-bold text-xl mt-2 mb-2">
        {currComponent.installation[1].title}
      </div>

      <div className=" w-full h-[50%] relative">
        <CopyButton copyText={codeString.element}/>
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
  );

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
              <TabList className="bg-neutral-900">
                <Tab title="npm" value="cli"></Tab>
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
