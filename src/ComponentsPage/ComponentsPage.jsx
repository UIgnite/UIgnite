import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark, schoolBook,darcula,dark,docco, a11yDark, atelierHeathDark, atelierLakesideDark, atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Tab, Tabs, TabContent, TabList } from '../components/Tabs';
import { Textarea } from '../components/Textarea';
import {   coy, funky,okaidia ,zTouch ,solarizedlight, tomorrow, prism, atomDark, duotoneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const ComponentsPage = () => {
  const codeString = `export const Textarea = ({ className, ...props }) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-400 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed  ",
          className
        )}
        {...props}
      />
    );
  };
  `;

  const syntaxHighlighterElement = (
    <SyntaxHighlighter
      language="javascript" 
      style={stackoverflowDark}
      className="m-6 max-w-[90%] bg-black"
    >
      {codeString}
    </SyntaxHighlighter>
  );

  const textAreaComp =(
    <div className='w-[100%]'>
      <Textarea
        placeholder="Type your message here..."
            className="w-96 h-30 max-w-full my-4"
      ></Textarea>
    </div>
  )

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
