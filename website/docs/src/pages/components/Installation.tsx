import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {installationDocs} from '@/utils/constants';
import CopyButton from './copyButton';

export const Installation = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-10">
      <section>
        <h1 className="text-2xl font-semibold mb-2">Vite Setup</h1>
        <p className="text-muted-foreground">
          Start by initializing your project with Vite.
        </p>
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-2">Tailwind Setup</h1>
        <p className="text-muted-foreground">
          Configure Tailwind for styling across your components.
        </p>
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-2">
          Edit
          <code className="text-xl ml-2 bg-muted px-1 py-0.5 rounded">
            tsconfig.json
          </code>
        </h1>
        <div className="bg-muted rounded-lg max-w-[90%] overflow-auto relative ">
          <CopyButton copyText={installationDocs.tsconfig} />
          <SyntaxHighlighter
            language="json"
            style={{
              ...atomOneDarkReasonable,
              hljs: {
                ...atomOneDarkReasonable.hljs,
                background: '#1e1e21',
              },
            }}
            className="text-left text-xl h-full max-h-[50vh] rounded-md scrollable-content"
          >
            {installationDocs.tsconfig}
          </SyntaxHighlighter>
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-2 ">
          Edit
          <code className=" text-xl ml-2 bg-muted px-1 py-0.5 rounded">
            tsconfig.app.json
          </code>
        </h1>
        <div className="bg-muted rounded-lg  overflow-auto relative max-w-[90%]">
          <CopyButton copyText={installationDocs.tsconfigApp} />
          <SyntaxHighlighter
            language="json"
            style={{
              ...atomOneDarkReasonable,
              hljs: {
                ...atomOneDarkReasonable.hljs,
                background: '#1e1e21',
              },
            }}
            className="text-left text-xl  h-full max-h-[50vh] rounded-md scrollable-content"
          >
            {installationDocs.tsconfigApp}
          </SyntaxHighlighter>
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-2">
          Update
          <code className="text-xl ml-2 bg-muted px-1 py-0.5 rounded">
            vite.config.ts
          </code>
        </h1>
        <div className="bg-muted rounded-lg  overflow-auto relative max-w-[90%]">
          <CopyButton copyText={installationDocs.vite} />
          <SyntaxHighlighter
            language="typescript"
            style={{
              ...atomOneDarkReasonable,
              hljs: {
                ...atomOneDarkReasonable.hljs,
                background: '#1e1e21',
              },
            }}
            className="text-left text-xl h-full max-h-[50vh] rounded-md scrollable-content"
          >
            {installationDocs.vite}
          </SyntaxHighlighter>
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-2">Run the CLI</h1>
        <p className="text-muted-foreground">
          Use the CLI to generate starter boilerplate and configurations.
        </p>
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-2">Add Components</h1>
        <div className="bg-muted rounded-lg  overflow-auto relative max-w-[90%]">
          <CopyButton copyText={installationDocs.addComponent} />
          <SyntaxHighlighter
            language="tsx"
            style={{
              ...atomOneDarkReasonable,
              hljs: {
                ...atomOneDarkReasonable.hljs,
                background: '#1e1e21',
              },
            }}
            className="text-left text-xl  h-full max-h-[50vh] rounded-md scrollable-content"
          >
            {installationDocs.addComponent}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};
