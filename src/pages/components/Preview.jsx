import SyntaxHighlighter from "react-syntax-highlighter";
import {
  stackoverflowDark,
  schoolBook,
  darcula,
  dark,
  docco,
  a11yDark,
  nightOwl,
  monokai,
  atelierHeathDark,
  atelierLakesideDark,
  atelierSulphurpoolDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../../components/Tabs";

import { Textarea } from "../../components/Textarea";
import {
  coy,
  funky,
  okaidia,
  zTouch,
  solarizedlight,
  tomorrow,
  prism,
  atomDark,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Preview = ({ codeString = "" }) => {
  const syntaxHighlighterElement = (
    <SyntaxHighlighter
      language="javascript"
      style={nightOwl}
      className=" h-[100%] max-w-[100%] rounded-md scrollable-content bg-black"
    >
      {codeString}
    </SyntaxHighlighter>
  );

  const textAreaComp = (
    <div className="w-[100%] flex justify-center">
      <Textarea
        placeholder="Type your message here..."
        className="w-96 scrollable-content h-30 max-w-full my-4"
      ></Textarea>
    </div>
  );

  return (
    <div className="h-[100vh] min-w-[80%] flex flex-col">
      <Tabs defaultVal="preview">
        <TabList>
          <Tab title="Preview" value="preview" />
          <Tab title="Code" value="code" />
        </TabList>

        <TabContent content={textAreaComp} value="preview" />
        <TabContent content={syntaxHighlighterElement} value="code" />
      </Tabs>
    </div>
  );
};

export { Preview };
