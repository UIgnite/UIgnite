interface Theme {
  name: string;
  background: string;
  cardBackground: string;
  highlightedCard: string;
  headerText: string;
  priceText: string;
  descriptionText: string;
  line: string;
  checkmarkBg: string;
  checkmarkText: string;
  featureText: string;
  selectBg: string;
  selectText: string;
  border: string;
}

interface ThemesParams {
  [key: string]: Theme;
}

export const themes: ThemesParams = {
  dark: {
    name: 'Dark',
    background: 'bg-slate-900',
    cardBackground: 'bg-slate-800',
    highlightedCard: 'bg-slate-700',
    headerText: 'text-green-400',
    priceText: 'text-white',
    descriptionText: 'text-gray-300',
    line: 'text-gray-600',
    checkmarkBg: 'bg-green-600',
    checkmarkText: 'text-white',
    featureText: 'text-gray-300',
    selectBg: 'bg-slate-700',
    selectText: 'text-white',
    border: 'border-green-900',
  },
  dracula: {
    name: 'Dracula',
    background: 'bg-slate-900',
    cardBackground: 'bg-black',
    highlightedCard: 'bg-[#0D1520]',
    headerText: 'text-blue-400',
    priceText: 'text-white',
    descriptionText: 'text-gray-300',
    line: 'text-gray-800',
    checkmarkBg: 'bg-blue-500',
    checkmarkText: 'text-white',
    featureText: 'text-gray-300',
    selectBg: 'bg-[#0D1520]',
    selectText: 'text-cyan-400',
    border: 'border-blue-500',
  },
};
