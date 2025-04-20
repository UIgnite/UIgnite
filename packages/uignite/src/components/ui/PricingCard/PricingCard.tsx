import {useTheme} from '@/hooks/theme';
import {Button} from '@/components/ui/Button';
import {BsCurrencyDollar} from 'react-icons/bs';
import {Check} from 'lucide-react';

interface PricingParams {
  title: string;
  price: string;
  validity?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
  checkBgColor?: string;
  checkTextColor?: string;
}

const PricingCard = ({
  title,
  price,
  validity,
  description,
  features,
  highlighted = false,
  popular = false,
  checkBgColor = 'bg-blue-600',
  checkTextColor = 'text-white',
}: PricingParams) => {
  const {theme} = useTheme();

  return (
    <div
      className={`rounded-xl shadow-sm w-full max-w-[400px] p-6 sm:p-8 flex flex-col h-full relative transition-all duration-200 transform hover:scale-[1.02] ${
        highlighted
          ? `${theme === 'light' ? 'grainy-light' : ''} dark:bg-neutral-900`
          : `${theme === 'light' ? 'grainy-light' : ''} dark:bg-zinc-800`
      } ${popular ? 'border-none ring-2 ring-zinc-600 dark:ring-cyan-700' : ''}`}
    >
      {popular && (
        <div
          className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 ${
            theme === 'light' ? 'bg-zinc-900' : 'bg-cyan-700'
          } text-zinc-200 rounded-full text-sm font-bold`}
        >
          Most Popular
        </div>
      )}

      <h3
        className={`text-lg font-semibold mb-2 ${
          highlighted
            ? 'text-zinc-800 dark:text-zinc-200'
            : 'text-neutral-800 dark:text-zinc-200'
        }`}
      >
        {title}
      </h3>

      <div
        className={`text-4xl font-bold mb-4 flex items-end flex-wrap gap-1 ${
          highlighted
            ? 'text-zinc-800 dark:text-zinc-100'
            : 'text-neutral-900 dark:text-white'
        }`}
      >
        <BsCurrencyDollar className="inline -mr-3" />
        {price}
        {validity && (
          <span
            className={`text-lg font-normal ml-1 ${
              highlighted ? 'text-gray-500/80' : 'text-zinc-500/80'
            }`}
          >
            {validity}
          </span>
        )}
      </div>

      <p
        className={`mb-4 text-sm ${
          highlighted
            ? 'text-zinc-500 dark:text-zinc-300'
            : 'text-zinc-500 dark:text-gray-300'
        }`}
      >
        {description}
      </p>

      <hr
        className={`mb-4 border w-full ${
          highlighted
            ? 'border-zinc-200/70 dark:border-zinc-800'
            : 'border-zinc-200/70 dark:border-zinc-700/50'
        }`}
      />

      <div className="flex-grow mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start mb-3 gap-3">
            <div className="mt-1">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${checkBgColor}`}
              >
                <Check className={`h-3.5 w-3.5 ${checkTextColor}`} />
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {feature}
            </p>
          </div>
        ))}
      </div>

      <a href="https://rzp.io/rzp/FuM0wyrD" className="mt-auto">
        <Button className="w-full">Get Started</Button>
      </a>
    </div>
  );
};

export {PricingCard};
