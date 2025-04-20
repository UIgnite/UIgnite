import {useTheme} from '@/hooks/theme';
import {Button} from '@/components/ui/Button';
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
  const {theme} = useTheme();

  const containerStyles = [
    'rounded-xl shadow-sm p-6 sm:p-8 w-full max-w-md',
    'flex flex-col h-full relative transition-all duration-200 transform hover:scale-[1.02]',
    highlighted
      ? theme === 'light'
        ? 'grainy-light'
        : 'dark:bg-neutral-900'
      : theme === 'light'
        ? 'grainy-light'
        : 'dark:bg-zinc-800',
    popular &&
      'ring-2 ring-offset-2 dark:ring-offset-slate-900 dark:ring-cyan-700',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerStyles}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-cyan-700 text-zinc-100 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <div className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-2">
        {title}
      </div>

      <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 flex items-end flex-wrap gap-2">
        <BsCurrencyDollar className="inline-block -mt-1" />
        {price}
        {validity && (
          <span className="text-lg font-normal text-zinc-500/80 ml-1">
            {validity}
          </span>
        )}
      </div>

      <p className="text-zinc-500 dark:text-zinc-300 mb-4">{description}</p>

      <hr className="border border-zinc-200/70 dark:border-zinc-700/50 mb-4" />

      <div className="flex flex-col gap-3 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
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
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {feature}
            </p>
          </div>
        ))}
      </div>

      <a href="https://rzp.io/rzp/FuM0wyrD" className="mt-6">
        <Button className="w-full">Get Started</Button>
      </a>
    </div>
  );
};

export {PricingCard};
