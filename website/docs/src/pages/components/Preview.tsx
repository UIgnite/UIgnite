import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Tab, Tabs, TabContent, TabList} from '@pkgs/uignite';
import {LiveProvider, LivePreview} from 'react-live';
import CopyButton from './copyButton';

interface PreviewPropT {
  currComponent: any;
  element: any;
}

const Preview = ({currComponent, element}: PreviewPropT) => {

  if (!currComponent || !element)
    return <div className="text-red-500">Code not found.</div>;

  const syntaxHighlighterElement = (
    <div className="w-full h-full relative">
      <CopyButton copyText={element.element} />
      <SyntaxHighlighter
        language="javascript"
        style={{
          ...atomOneDarkReasonable,
          hljs: {
            ...atomOneDarkReasonable.hljs,
            background: 'rgb(24, 24, 24)',
          },
        }}
        className="text-left text-sm h-full min-w-full rounded-md scrollable-content"
      >
        {element.element}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <div className=" min-w-[80%] flex flex-col">
      <LiveProvider code={element.element} scope={element.scope}>
        <Tabs className="p-3 mt-4" defaultVal="preview">
          <TabList activeTab="">
            {element ? <Tab title="Preview" value="preview" /> : <></>}
            <Tab title="Code" value="code" />
          </TabList>

          {element ? (
            <TabContent
              content={
                <div className="w-[100%] flex justify-center items-center p-10 bg-neutral-200 dark:bg-neutral-900  relative">
                  <LivePreview />
                </div>
              }
              value="preview"
            />
          ) : (
            <></>
          )}
          <TabContent content={syntaxHighlighterElement} value="code" />
        </Tabs>
      </LiveProvider>
    </div>
  );
};

export {Preview};
