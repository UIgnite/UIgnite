import {Button, Input, TextArea, useToast} from '@pkgs/uignite';
import React, {FormEvent, useCallback, useId, useState} from 'react';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import CopyButton from './components/copyButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function FeedbackForm() {
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const [viewCode, setViewCode] = useState(false);

  const toast = useToast();

  const nameId = useId();
  const emailId = useId();
  const feedbackId = useId();

  const handleSubmitFeedbackForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        fetch('https://www.formbackend.com/f/03b9581fa27da2f2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            feedback,
            'g-recaptcha-response': recaptchaToken,
          }),
        })
          .then((response) => {
            if (response.status === 422) {
              throw new Error('Validation error');
            } else if (!response.ok) {
              throw new Error('Something went wrong');
            }

            return response.json();
          })
          .then(() => {
            toast.showToast('Thank you for your feedback');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } catch (error: any) {
        setRefreshReCaptcha(!refreshReCaptcha);
        console.error(
          `Error occured in submitting feedback form: ${error.message}`
        );
        toast.showToast('Thank you for your Feedback', {
          desc: `Thanks for your feedback but due to high requests, Please try again later.`,
        });
      } finally {
        setLoading(false);
        setName('');
        setEmail('');
        setFeedback('');
      }
    },
    [
      refreshReCaptcha,
      setRefreshReCaptcha,
      toast,
      setLoading,
      name,
      email,
      feedback,
      setFeedback,
      setName,
      setEmail,
    ]
  );

  const codeBlock = `
    import {Button, Input, TextArea, useToast} from '@pkgs/uignite';
    import React, {FormEvent, useCallback, useId, useState} from 'react';
    import {
      GoogleReCaptchaProvider,
      GoogleReCaptcha,
    } from 'react-google-recaptcha-v3';
    import CopyButton from './components/copyButton';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    
    export default function FeedbackForm() {
      const [recaptchaToken, setRecaptchaToken] = useState('');
      const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [feedback, setFeedback] = useState('');
      const [loading, setLoading] = useState(false);
    
      const [viewCode, setViewCode] = useState(false);
    
      const toast = useToast();
    
      const nameId = useId();
      const emailId = useId();
      const feedbackId = useId();
    
      const handleSubmitFeedbackForm = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setLoading(true);
          try {
            fetch('https://www.formbackend.com/f/03b9581fa27da2f2', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                feedback,
                'g-recaptcha-response': recaptchaToken,
              }),
            })
              .then((response) => {
                if (response.status === 422) {
                  throw new Error('Validation error');
                } else if (!response.ok) {
                  throw new Error('Something went wrong');
                }
    
                return response.json();
              })
              .then(() => {
                toast.showToast('Thank you for your feedback');
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          } catch (error: any) {
            setRefreshReCaptcha(!refreshReCaptcha);
            console.error(
              \`Error occured in submitting feedback form: \${error.message}\`
            );
            toast.showToast('Thank you for your Feedback', {
              desc: \`Thanks for your feedback but due to high requests, Please try again later.\`,
            });
          } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setFeedback('');
          }
        },
        [
          refreshReCaptcha,
          setRefreshReCaptcha,
          toast,
          setLoading,
          name,
          email,
          feedback,
          setFeedback,
          setName,
          setEmail,
        ]
      );
    
      return (
        <div className="w-screen flex flex-col h-screen overflow-hidden items-center">
          <title>UIgnite | Feeback Form</title>
          <section className="border dark:bg-neutral-900 dark:border-neutral-800 px-8 pt-10 rounded-lg lg:mt-12 border-neutral-200 bg-white relative">
            <Button
              onClick={() => setViewCode(!viewCode)}
              variant="outline"
              className="text-xs px-1 h-8 absolute right-3 top-3"
            >
              View Code
            </Button>
            {viewCode ? (
              <div>
                <div className="w-full h-full relative ">
          <CopyButton copyText={""} />
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
          </SyntaxHighlighter>
        </div>
              </div>
            ) : (
              <React.Fragment>
                <div className="text-3xl font-medium dark:text-neutral-100">
                  Tell us what you really feel
                </div>
                <div className="text-sm text-neutral-700 mt-2 max-w-2xl dark:text-neutral-50">
                  We want to know your vibe! Pick the emoji that matches your mood
                  and help us make your next visit even better. Let's finish with a
                  smile!
                </div>
                <form
                  onSubmit={handleSubmitFeedbackForm}
                  className="flex flex-col gap-y-4 my-5"
                >
                  <div>
                    <label htmlFor={nameId} className="text-sm">
                      Name
                    </label>
                    <Input
                      required
                      id={nameId}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane doe"
                    />
                  </div>
                  <div>
                    <label htmlFor={emailId} className="text-sm">
                      Email
                    </label>
                    <Input
                      required
                      id={emailId}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="username@uignite.in"
                    />
                  </div>
                  <div>
                    <label htmlFor={feedbackId} className="text-sm">
                      Feedback
                    </label>
                    <TextArea
                      required
                      id={feedbackId}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="bg-transparent rounded-lg focus-visible:ring-0 dark:text-neutral-100 dark:border-none dark:focus-visible:border-2 ring-0 text-neutral-900"
                      placeholder="Your precious feedback here..."
                    />
                  </div>
                  <GoogleReCaptchaProvider
                    reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY!}
                  >
                    <GoogleReCaptcha
                      onVerify={setRecaptchaToken}
                      refreshReCaptcha={refreshReCaptcha}
                    />
                  </GoogleReCaptchaProvider>
                  <div className="flex justify-end py-3 px-1">
                    <Button
                      isLoading={loading}
                      className="hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:ring-neutral-100/20 dark:hover:bg-neutral-200 dark:text-neutral-900 active:ring-2 ring-neutral-500/20"
                      type="submit"
                      variant="movingBorder"
                    >
                      Submit feedback
                    </Button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </section>
        </div>
      );
    }
            
            `;

  return (
    <div className="w-screen flex flex-col h-screen overflow-hidden items-center">
      <title>UIgnite | Feeback Form</title>
      <section className="border dark:bg-neutral-900 dark:border-neutral-800 px-8 pt-10 rounded-lg lg:mt-12 border-neutral-200 bg-white relative">
        <div className="absolute right-26 z-20 top-1">
          <CopyButton copyText={codeBlock} />
        </div>
        <Button
          onClick={() => setViewCode(!viewCode)}
          variant="outline"
          className="text-xs z-20 px-1 h-8 absolute right-3 top-3"
        >
          View Code
        </Button>
        {viewCode ? (
          <div className="max-w-3xl max-h-[70vh] overflow-y-scroll scrollable-content">
            <div className="w-full h-full relative ">
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
                {codeBlock}
              </SyntaxHighlighter>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="text-3xl font-medium dark:text-neutral-100">
              Tell us what you really feel
            </div>
            <div className="text-sm text-neutral-700 mt-2 max-w-2xl dark:text-neutral-50">
              We want to know your vibe! Pick the emoji that matches your mood
              and help us make your next visit even better. Let's finish with a
              smile!
            </div>
            <form
              onSubmit={handleSubmitFeedbackForm}
              className="flex flex-col gap-y-4 my-5"
            >
              <div>
                <label htmlFor={nameId} className="text-sm">
                  Name
                </label>
                <Input
                  className="mt-1"
                  required
                  id={nameId}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane doe"
                />
              </div>
              <div>
                <label htmlFor={emailId} className="text-sm">
                  Email
                </label>
                <Input
                  className="mt-1"
                  required
                  id={emailId}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="username@uignite.in"
                />
              </div>
              <div>
                <label htmlFor={feedbackId} className="text-sm">
                  Feedback
                </label>
                <TextArea
                  required
                  id={feedbackId}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="pl-1.5 mt-1 bg-transparent rounded-lg focus-visible:ring-0 dark:text-neutral-100 dark:border-zinc-500 dark:focus-visible:border-2 ring-0 text-neutral-900"
                  placeholder="Your precious feedback here..."
                />
              </div>
              <GoogleReCaptchaProvider
                reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY!}
              >
                <GoogleReCaptcha
                  onVerify={setRecaptchaToken}
                  refreshReCaptcha={refreshReCaptcha}
                />
              </GoogleReCaptchaProvider>
              <div className="flex justify-end py-3 px-1">
                <Button
                  isLoading={loading}
                  className="hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:ring-neutral-100/20 dark:hover:bg-neutral-200 dark:text-neutral-900 active:ring-2 ring-neutral-500/20"
                  type="submit"
                  variant="movingBorder"
                >
                  Submit feedback
                </Button>
              </div>
            </form>
          </React.Fragment>
        )}
      </section>
    </div>
  );
}
