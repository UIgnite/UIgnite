import SyntaxHighlighter from "react-syntax-highlighter";
import {
  stackoverflowDark,
  schoolBook,
  darcula,
  dark,
  docco,
  a11yDark,
  atelierHeathDark,
  atelierLakesideDark,
  atelierSulphurpoolDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../components/Tabs";
import { Textarea } from "../components/Textarea";
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



const ComponentsPage = ({ codeString = "", }) => {
  const syntaxHighlighterElement = (
    <SyntaxHighlighter
      language="javascript"
      style={stackoverflowDark}
      className="m-6 max-w-[90%] bg-black"
    >
      {codeString}
    </SyntaxHighlighter>
  );

  const textAreaComp = (
    <div className="w-[100%]">
      <Textarea
        placeholder="Type your message here..."
        className="w-96 h-30 max-w-full my-4"
      ></Textarea>
    </div>
  );

  return (
    <div className="h-[100vh] flex flex-col">
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

export { ComponentsPage };
