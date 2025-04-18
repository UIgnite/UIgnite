import {Button} from '@pkgs/uignite';
import {BsCurrencyDollar} from 'react-icons/bs';

interface PricingParams {
  title: string;
  price: string;
  validity?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
}

const PricingCard = ({
  title,
  price,
  validity,
  description,
  features,
  highlighted = false,
  popular = false,
}: PricingParams) => {
  return (
    <div
      className={`rounded-xl shadow-sm w-[400px] p-8 flex flex-col h-full relative transition-all duration-200 transform hover:scale-102 ${
        highlighted
          ? // ? 'bg-cyan-50/10 dark:bg-neutral-900'
            // : 'bg-zinc-200/10 dark:bg-zinc-800'
            'grainy-light dark:bg-neutral-900'
          : 'grainy-light dark:bg-zinc-800'
      } ${popular ? 'border-none ring-2 ring-offset-2 dark:ring-offset-slate-900 dark:ring-cyan-700' : ''}`}
    >
      {popular && (
        <div
          className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-zinc-900 dark:bg-cyan-700 text-zinc-200 rounded-full text-sm font-bold`}
        >
          Most Popular
        </div>
      )}

      <div
        className={`text-lg font-normal mb-2 ${highlighted ? ' text-zinc-800 dark:text-zinc-200' : `text-neutral-800 dark:text-zinc-200`}`}
      >
        {title}
      </div>

      <div
        className={`text-4xl font-bold mb-4 flex items-center ${highlighted ? 'text-zinc-800 dark:text-zinc-200' : `text-neutral-900 dark:text-white`}`}
      >
        <>
          <BsCurrencyDollar className="inline -mr-1.5" />
          {price}{' '}
          <span
            className={`text-lg ml-2 mt-1 font-normal ${highlighted ? 'text-gray-500/80' : 'text-zinc-500/80'}`}
          >
            {validity}
          </span>
        </>
      </div>
      <p
        className={`mb-4 ${highlighted ? 'text-zinc-500 dark:text-zinc-300' : `text-zinc-500 dark:text-gray-300`}`}
      >
        {description}
      </p>
      <hr
        className={`mb-4 border-1.8 w-[96%] ${highlighted ? 'text-zinc-700' : `$text-zinc-300 dark:text-gray-800`}`}
      />
      <div className="flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start mb-4 group">
            <div className="mr-3 mt-1 ">
              <div
                className={`w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3 w-3 text-white dark:text-white`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`text-gray-500/80 dark:text-gray-300/80 ${highlighted ? 'text-zinc-500/80' : `$text-black/45 dark:text-gray-300`} `}
            >
              {feature}
            </div>
          </div>
        ))}
      </div>

      <a href="https://rzp.io/rzp/FuM0wyrD">
        <Button className="w-full mt-3">Get Started</Button>
      </a>
    </div>
  );
};

export {PricingCard};
