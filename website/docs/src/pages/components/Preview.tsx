import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Tab, Tabs, TabContent, TabList, Button} from '@pkgs/uignite';
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
    <div className="w-full h-full relative ">
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
        className="text-left text-sm h-full max-h-[50vh] rounded-md scrollable-content"
      >
        {element.element}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <div className=" min-w-[80%] flex flex-col ">
      <LiveProvider code={element.element} scope={element.scope}>
        <Tabs className="p-3 mt-4" defaultVal="preview">
          <TabList activeTab="">
            {element ? <Tab title="Preview" value="preview" /> : <></>}
            <Tab title="Code" value="code" />
          </TabList>

          {/* Rendering Element  */}
          {element ? (
            <TabContent
              content={
                <div className="w-[100%] flex justify-center items-center p-10 bg-neutral-200 dark:bg-neutral-900  relative">
                  <div className=" absolute top-3 right-5">
                    <Button className="h-8  w-[100px] dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-black bg-black hover:bg-black/80 text-white">
                      <a
                        href={`https://v0.dev/chat/api/open?url=https://uignite.in/r/${currComponent.id.toLowerCase()}.json`}
                        className="flex flex-row"
                        target="_blank"
                      >
                        <span className="mr-1">Open in</span>
                        <svg
                          viewBox="0 0 40 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-current"
                        >
                          <path
                            d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </Button>
                  </div>

                  <LivePreview className="mt-6" />
                </div>
              }
              value="preview"
            />
          ) : (
            <></>
          )}

          {/* Rendering Code  */}
          <TabContent content={syntaxHighlighterElement} value="code" />
        </Tabs>
      </LiveProvider>
    </div>
  );
};

export {Preview};
