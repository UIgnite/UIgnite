import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Tab, Tabs, TabContent, TabList} from '@pkgs/uignite';
import React from 'react';
import {getComponentById} from '../../utils/lib';
import CopyButton from './copyButton';

const Install = ({
  codeString,
  componentId,
}: {
  codeString: any;
  componentId: string;
}) => {
  const currComponent = getComponentById(componentId);

  if (!componentId || !currComponent) {
    return <div className="text-red-500">Code not found.</div>;
  }

  const CommandElement = () => {
    return (
      <div className="w-full h-[44px] relative cli ">
        <CopyButton copyText={`npx uignite add ${componentId}`} />
        <SyntaxHighlighter
          style={{
            ...atomOneDarkReasonable,
            hljs: {
              ...atomOneDarkReasonable.hljs,
              background: 'rgb(24, 24, 24)',
            },
          }}
          language="cli"
          className="text-left  text-sm h-full min-w-full rounded-md  "
        >
          {`npx uignite add ${componentId}`}
        </SyntaxHighlighter>
      </div>
    );
  };

  const InstallationElement = () => (
    <div className="w-full">
      {currComponent.installation.map((item: any, idx: number) => {
        const code =
          item.title === 'Copy the code' ? codeString.element : item.codeBlock;

        return (
          <React.Fragment key={idx}>
            <div className="font-bold text-xl mt-3 mb-2">{item.title}</div>

            <div className="w-full min-h-[50px]  relative">
              <CopyButton copyText={code} />
              <SyntaxHighlighter
                className="mb-7 min-h-[50px]  max-h-[400px]  scrollable-content text-left text-sm min-w-full rounded-md"
                language="cli"
                style={{
                  ...atomOneDarkReasonable,
                  hljs: {
                    ...atomOneDarkReasonable.hljs,
                    background: 'rgb(24, 24, 24)',
                  },
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );

  return (
    <div className=" min-w-[90%] flex flex-col">
      <Tabs defaultVal="cli">
        <TabList activeTab="">
          <Tab
            activeTab=""
            setActiveTab={() => {}}
            title="CLI"
            value="cli"
          ></Tab>
          <Tab
            activeTab=""
            setActiveTab={() => {}}
            title="Manual"
            value="manual"
          ></Tab>
        </TabList>
        <TabContent
          activeTab=""
          content={
            <Tabs defaultVal="cli">
              <TabList activeTab="">
                <Tab
                  activeTab=""
                  setActiveTab={() => {}}
                  title="npm"
                  value="cli"
                ></Tab>
              </TabList>
              <TabContent
                activeTab="npm"
                content={<CommandElement />}
                value="cli"
              ></TabContent>
            </Tabs>
          }
          value="cli"
        ></TabContent>
        <TabContent
          activeTab=""
          content={<InstallationElement />}
          value="manual"
        ></TabContent>
      </Tabs>
    </div>
  );
};

export {Install};
