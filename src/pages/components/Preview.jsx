import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../../components/Tabs";
import { Textarea } from "../../components/Textarea";
import { useNavigate, useParams } from "react-router-dom";
import { codeString } from "./codeString";
import React from "react";

const Preview = ({ codeString = "", element }) => {
  const { componentId } = useParams();
  const currComponent = codeString.find(
    (component) => component.id === componentId,
  );

  if (!currComponent) {
    return <div className="text-red-500">Code not found.</div>;
  }
  const syntaxHighlighterElement = (
    <SyntaxHighlighter
      language="javascript"
      style={nightOwl}
      className="text-left h-[100%] min-w-[100%] rounded-md scrollable-content"
    >
      {currComponent.code}
    </SyntaxHighlighter>
  );

  return (
    <div className="h-[100vh] min-w-[80%] flex flex-col">
      <Tabs defaultVal="preview">
        <TabList>
          {element ? <Tab title="Preview" value="preview" /> : <></>}
          
          <Tab title="Code" value="code" />
        </TabList>

        {element ? <TabContent content={<div className="w-[100%] flex justify-center items-center p-10 bg-neutral-900">
          {element}
        </div>} value="preview" /> : <></>}
        <TabContent content={syntaxHighlighterElement} value="code" />
      </Tabs>
    </div>
  );
};

export { Preview };
