import React from 'react';
import { Check } from 'lucide-react';

interface CoachCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  achievements: string[];
}

const CoachCard: React.FC<CoachCardProps> = ({ name, title, image, description, achievements }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:translate-y-[-12px] hover:translate-x-[-4px] hover:shadow-2xl">
      <div className="h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-2">{name}</h3>
        <p className="text-xl text-orange-500 mb-4">{title}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-gray-700">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachCard;