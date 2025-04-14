import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Tab, Tabs, TabContent, TabList} from '@pkgs/uignite';
import {useCallback, useState} from 'react';
import {LiveProvider, LivePreview} from 'react-live';

interface PreviewPropT {
  currComponent: any;
  element: any;
}

const Preview = ({currComponent, element}: PreviewPropT) => {
  const [copied, setCopied] = useState(false);

  if (!currComponent) {
    return <div className="text-red-500">Code not found.</div>;
  }

  const handleCopyCodeBlock = useCallback(() => {
    window.navigator.clipboard.writeText(currComponent.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [currComponent, setCopied]);

  console.log(atomOneDarkReasonable);

  const syntaxHighlighterElement = (
    <div className="w-full h-full relative">
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
  console.log(atomOneDarkReasonable);
  return (
    <div className=" min-w-[80%] flex flex-col">
      <LiveProvider code={element.element} scope={element.scope}>
        <Tabs defaultVal="preview">
          <TabList activeTab="">
            {element ? (
              <Tab
                activeTab=""
                setActiveTab={() => {}}
                title="Preview"
                value="preview"
              />
            ) : (
              <></>
            )}

            <Tab
              title="Code"
              value="code"
              activeTab=""
              setActiveTab={() => {}}
            />
          </TabList>

          {element ? (
            <TabContent
              activeTab=""
              content={
                <div className="w-[100%] flex justify-center items-center p-10 bg-neutral-900">
                  <LivePreview />
                </div>
              }
              value="preview"
            />
          ) : (
            <></>
          )}
          <TabContent
            activeTab=""
            content={syntaxHighlighterElement}
            value="code"
          />
        </Tabs>
      </LiveProvider>
    </div>
  );
};

export {Preview};
