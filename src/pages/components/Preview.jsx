import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab, Tabs, TabContent, TabList } from "../../components/Tabs";
import { Textarea } from "../../components/Textarea";
import { useNavigate, useParams } from "react-router-dom";
import { codeString } from "./codeString";


const Preview = ({ codeString = "" }) => {
  const { componentId } = useParams();
  const currComponent = codeString.find(
    (component) => component.id === componentId
  );
  const syntaxHighlighterElement = (
    <SyntaxHighlighter
      language="javascript"
      style={nightOwl}
      className="text-left h-[100%] min-w-[100%] rounded-md scrollable-content"
    >
      {currComponent.code }
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
