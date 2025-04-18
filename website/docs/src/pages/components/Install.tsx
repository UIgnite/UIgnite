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

  const CommandElement = ({val = 'npx'}) => {
    return (
      <div className="w-full h-[44px] relative cli ">
        <CopyButton
          copyText={`${val} shadcn add https://uignite.in/r/${componentId}.json `}
          />
          <style>
            {
              `
              .cli-command code span {
                color: #f5f5f5 !important; 
              }
              `
            }
          </style>
        <SyntaxHighlighter
          style={{
            ...atomOneDarkReasonable,
            hljs: {
              ...atomOneDarkReasonable.hljs,
              background: 'rgb(24, 24, 24)',
            },
          }}
          className="text-left text-white text-sm h-full min-w-full rounded-md cli-command"
        >
          {`${val} shadcn add https://uignite.in/r/${componentId}.json `}
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
          code && (
            <React.Fragment key={idx}>
              <div className="font-bold text-xl mt-3 mb-2">{item.title}</div>

              <div className="w-full min-h-[50px]  relative">
                <CopyButton copyText={code} />
                <SyntaxHighlighter
                  className="mb-7 min-h-[50px]  max-h-[400px]  scrollable-content text-left text-sm min-w-full rounded-md"
                  language="asdflasdf"
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
          )
        );
      })}
    </div>
  );

  return (
    <div className=" min-w-[90%] flex flex-col">
      <Tabs className="mt-4 p-3 " defaultVal="cli">
        <TabList activeTab="">
          <Tab title="CLI" value="cli"></Tab>
          <Tab title="Manual" value="manual"></Tab>
        </TabList>
        <TabContent
          content={
            <Tabs
              className="p-3 mt-4 border-[0.5px] dark:border-neutral-800 border-neutral-200"
              defaultVal="npm"
            >
              <TabList>
                <Tab title="bun" value="bun"></Tab>
                <Tab title="npm" value="npm"></Tab>
                <Tab title="yarn" value="yarn"></Tab>
              </TabList>
              <TabContent
                content={<CommandElement val="bunx" />}
                value="bun"
              ></TabContent>
              <TabContent
                content={<CommandElement val="npx" />}
                value="npm"
              ></TabContent>
              <TabContent
                content={<CommandElement val="yarn" />}
                value="yarn"
              ></TabContent>
            </Tabs>
          }
          value="cli"
        ></TabContent>
        <TabContent
          content={<InstallationElement />}
          value="manual"
        ></TabContent>
      </Tabs>
    </div>
  );
};

export {Install};
