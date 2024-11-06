import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: Array<string | { text: string; strikethrough: boolean }>;
  popular: boolean;
  selected: boolean;
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  popular,
  selected,
  onSelect,
}) => {
  const isPro = title === "Pro Plan";
  
  return (
    <div
      className={`relative p-8 rounded-2xl transition-all duration-500 hover:translate-y-[-8px] ${
        isPro
          ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white'
          : 'bg-white hover:shadow-2xl'
      } ${selected ? 'ring-4 ring-orange-500' : ''} shadow-xl h-full flex flex-col`}
    >
      <h3 className={`text-2xl font-bold mb-4 ${isPro ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
        <span className={`text-4xl font-bold ${isPro ? 'text-white' : 'text-gray-800'}`}>
          {price}
        </span>
      </div>
      <ul className="mb-8 space-y-4 flex-grow">
        {features.map((feature, index) => {
          const isStrikethrough = typeof feature === 'object' && feature.strikethrough;
          const text = typeof feature === 'object' ? feature.text : feature;
          
          return (
            <li key={index} className="flex items-center animate-slide-in group" style={{ animationDelay: `${index * 100}ms` }}>
              <Check className={`w-5 h-5 mr-2 ${isPro ? 'text-white' : 'text-orange-500'} ${isStrikethrough ? 'opacity-50' : ''} transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`} />
              <span className={`${isPro ? 'text-white' : 'text-gray-600'} ${isStrikethrough ? 'line-through opacity-50' : ''}`}>
                {text}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
          isPro
            ? 'bg-white text-orange-500 hover:bg-gray-100'
            : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
        } font-semibold mt-auto`}
      >
        Select Plan
      </button>
    </div>
  );
};

export default PricingCard;