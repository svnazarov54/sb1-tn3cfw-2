import React, { useState } from 'react';
import { X, CreditCard, Mail, Phone, MessageSquare, User } from 'lucide-react';

interface PaymentModalProps {
  plan: {
    title: string;
    price: string;
  };
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Complete Your Registration</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-2">Selected Plan:</p>
          <p className="text-xl font-semibold">{plan.title} - {plan.price}</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-orange-500" />
                <span>Full Name</span>
              </div>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>Email Address</span>
              </div>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>Phone Number</span>
              </div>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="+1 (234) 567-890"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <button
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-orange-600 hover:to-amber-600 transition duration-300"
          >
            <CreditCard className="w-5 h-5" />
            <span>Proceed to Payment</span>
          </button>
          
          <button
            className="w-full bg-white border-2 border-orange-500 text-orange-500 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-50 transition duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Leave a Request</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;