import {getElementByCompId} from '@/utils/lib';
import {Tab, Tabs, TabContent, TabList} from '@pkgs/uignite';
import {LivePreview, LiveProvider} from 'react-live';
import CopyButton from './copyButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {AppWindowMac, Code} from 'lucide-react';

export const Variants = ({componentId}: {componentId: string}) => {
  const currElement = getElementByCompId(componentId);
  if (!currElement || !componentId) {
    return <div className="text-red-500">Code not found.</div>;
  }

  const syntaxHighlighterElement = (currVariant: string) => (
    <div className="w-full h-full relative ">
      <CopyButton copyText={currVariant} />
      <SyntaxHighlighter
        language="javascript"
        style={{
          ...atomOneDarkReasonable,
          hljs: {
            ...atomOneDarkReasonable.hljs,
            background: 'rgb(24, 24, 24)',
          },
        }}
        className="text-left text-sm h-full overflow-scroll max-h-[40vh] rounded-md scrollable-content"
      >
        {currVariant}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <div>
      {currElement.variation &&
        currElement.variation.map((currVariant) => {
          const currVariantCode = currVariant.code;
          const currVarTitle = currVariant.title;
          return (
            <div>
              <div className="text-2xl ml-2 mt-8 "> {currVarTitle} </div>
              <LiveProvider code={currVariantCode} scope={currElement.scope}>
                <Tabs className="p-3 mt-3 mb-12" defaultVal="preview">
                  <TabList activeTab="">
                    {currElement ? (
                      <Tab
                        title={
                          <div className="flex gap-2">
                            <Code /> <p>Preview </p>
                          </div>
                        }
                        value="preview"
                      />
                    ) : (
                      <></>
                    )}
                    <Tab
                      title={
                        <div className="flex gap-2">
                          <AppWindowMac /> <p>Code</p>
                        </div>
                      }
                      value="code"
                    />
                  </TabList>
                  {currVariant ? (
                    <TabContent
                      content={
                        <div className="w-[100%] flex justify-center items-center p-10 bg-neutral-200 dark:bg-neutral-900  relative">
                          <LivePreview className="mt-6" />
                        </div>
                      }
                      value="preview"
                    />
                  ) : (
                    <></>
                  )}
                  <TabContent
                    content={syntaxHighlighterElement(currVariantCode)}
                    value="code"
                  />
                </Tabs>
              </LiveProvider>
            </div>
          );
        })}
    </div>
  );
};
