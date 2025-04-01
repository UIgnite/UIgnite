// Theme definitions
export const themes = {
    dark: {
      name: "Dark",
      background: "bg-slate-900",
      cardBackground: "bg-slate-800",
      highlightedCard: "bg-slate-700",
      headerText: "text-green-400",
      priceText: "text-white",
      descriptionText: "text-gray-300",
      checkmarkBg: "bg-green-600", 
      checkmarkText: "text-white",
      featureText: "text-gray-300",
      selectBg: "bg-slate-700",
      selectText: "text-white",
      border: "border-green-900"
    },
    neon: {
      name: "Neon",
      background: "bg-slate-900",
      cardBackground: "bg-black",
      highlightedCard: "bg-indigo-900",
      headerText: "text-blue-500",
      priceText: "text-white",
      descriptionText: "text-gray-300",
      checkmarkBg: "bg-blue-600",
      checkmarkText: "text-white",
      featureText: "text-gray-300",
      selectBg: "bg-indigo-900",
      selectText: "text-cyan-400",
      border: "border-indigo-700"
    },
    
  };
  
  export const ThemeSelector = ({ currentTheme, setTheme }) => {
    return (
      <div className="flex justify-center mb-12">
        <div className={`inline-flex rounded-md p-1 ${themes[currentTheme].border} border`}>
          {Object.keys(themes).map((theme) => (
            <button
              key={theme}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentTheme === theme 
                  ? `${themes[theme].selectBg} ${themes[theme].selectText}`
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setTheme(theme)}
            >
              {themes[theme].name}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export const PricingCard = ({ title, price, description, features, highlighted = false, theme, popular = false }) => {
    const currentTheme = themes[theme];
  
    return (
      <div className={`rounded-xl p-8 flex flex-col h-full relative transition-all duration-300 transform hover:scale-105 ${
        highlighted ? currentTheme.highlightedCard : currentTheme.cardBackground
      } ${popular ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-cyan-500' : ''}`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black rounded-full text-sm font-bold">
            Most Popular
          </div>
        )}
        
        <div className={`${currentTheme.headerText} text-sm mb-2`}>{title}</div>
        <div className={`text-4xl font-bold ${currentTheme.priceText} mb-4`}>{price}</div>
        <p className={`${currentTheme.descriptionText} mb-8`}>{description}</p>
        
        <div className="flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-4 group">
              <div className="mr-3 mt-1 transition-transform duration-300 group-hover:scale-110">
                <div className={`w-5 h-5 rounded-full ${currentTheme.checkmarkBg} flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 ${currentTheme.checkmarkText}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className={`${currentTheme.featureText} group-hover:text-white transition-colors duration-300`}>{feature}</div>
            </div>
          ))}
        </div>
        
        <button className={`mt-8 py-3 px-4 rounded-lg font-medium transition-all cursor-pointer duration-300 ${
          highlighted 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
            : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
        }`}>
          Get Started
        </button>
      </div>
    );
  };