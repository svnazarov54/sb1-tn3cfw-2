import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ScheduleItemProps {
  time: string;
  activity: string;
  icon: React.ReactNode;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity, icon }) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2">
      <div className="text-orange-500 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-2xl mb-1">{time}</p>
        <p className="text-gray-600 text-lg">{activity}</p>
      </div>
    </div>
  );
};

export default ScheduleItem;