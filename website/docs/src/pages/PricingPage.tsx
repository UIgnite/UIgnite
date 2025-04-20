import {PricingCard} from '@pkgs/uignite';

const PricingSection = () => {
  const pricingData = [
    {
      title: 'Free',
      price: '0',
      validity: '/month',
      description:
        'All the components that are freely available on the website are free to use.',
      features: [
        'Access to 100+ UI components',
        'Open-source community support',
        'Bi-weekly template updates',
        'Comprehensive documentation and guides',
      ],
    },
    {
      title: 'Custom Components',
      price: `60`,
      validity: '/month',
      description:
        'Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.',
      features: [
        'Bespoke design and branding',
        '24-hour priority email support',
        'Extensive component customization',
        'Full access to source code',
      ],
      highlighted: true,
      popular: true,
    },
    {
      title: 'Pages',
      price: '100',
      validity: '/month',
      description:
        'Best for early-stage startups and businesses that need a marketing site and ongoing developmental work.',
      features: [
        'Tailored component library',
        'Real-time Slack and email support',
        'Quarterly strategy sessions',
        'Bespoke component and page development',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
            Pricing Plans
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project needs with flexible options
            and powerful features.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {pricingData.map((plan, index) => (
            <div key={index} className="flex-grow basis-[300px] max-w-[400px]">
              <PricingCard
                title={plan.title}
                price={plan.price}
                validity={plan.validity}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
