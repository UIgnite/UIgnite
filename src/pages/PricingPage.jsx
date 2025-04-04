import React, { useState } from 'react';
import { ThemeSelector,PricingCard } from '../components/PricingCard';
import { themes } from '../utils/theme.js';


const PricingSection = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const pricingData = [
    {
        title: "Existing Components",
        price: "Free",
        description: "All the components that are freely available on the website are free to use.",
        features: [
            "Access to 100+ UI components",
            "Open-source community support",
            "Bi-weekly template updates",
            "Comprehensive documentation and guides"
        ]
    },
    {
        title: "Custom Components",
        price: "$60",
        validity:"/month",
        description: "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
        features: [
            "Bespoke design and branding",
            "24-hour priority email support",
            "Extensive component customization",
            "Full access to source code"
        ],
        highlighted: true,
        popular: true
    },
    {
        title: "Pages",
        price: "$100",
        validity:"/month",
        description: "Best for early-stage startups and businesses that need a marketing site and ongoing developmental work.",
        features: [
            "Tailored component library",
            "Real-time Slack and email support",
            "Quarterly strategy sessions",
            "Bespoke component and page development"
        ]
    },
   
];


  return (
    <div className={`${themes[currentTheme].background} min-h-screen py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Choose the perfect plan for your project needs with flexible options and powerful features.</p>
        </div>
        
        <ThemeSelector currentTheme={currentTheme} setTheme={setCurrentTheme} />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              validity={plan.validity}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              popular={plan.popular}
              theme={currentTheme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;