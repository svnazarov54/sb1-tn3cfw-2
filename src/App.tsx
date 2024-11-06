import React, { useState, useRef } from 'react';
import { Phone, Send, MapPin, Trophy, Building2, Users, TrendingUp, Sunrise, Dumbbell, Target, Swords, Clock, Timer } from 'lucide-react';
import PricingCard from './components/PricingCard';
import ScheduleItem from './components/ScheduleItem';
import CoachCard from './components/CoachCard';
import PaymentModal from './components/PaymentModal';

function App() {
  // ... [Previous state and handlers remain exactly the same]
  const [showPaymentModal, setShowPaymentModal] = useState(false); 
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<{ title: string; price: string } | null>(null);
  
  const pricingRef = useRef<HTMLElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanSelect = (plan: { title: string; price: string }) => {
    setSelectedPlan(plan.title);
    setSelectedPlanDetails(plan);
    setShowPaymentModal(true);
  };

  const plans = [
    {
      title: "Standard Plan",
      price: "$299",
      features: [
        "4 days of intensive training",
        "Premium equipment access",
        "Group sessions",
        { text: "Advanced technique training", strikethrough: true },
        { text: "Nutrition consultation", strikethrough: true },
        { text: "1-on-1 mentoring", strikethrough: true }
      ],
      popular: false
    },
    {
      title: "Pro Plan",
      price: "$499",
      features: [
        "4 days of intensive training",
        "Premium equipment access",
        "Group sessions",
        "Advanced technique training",
        "Nutrition consultation",
        "1-on-1 mentoring"
      ],
      popular: false
    }
  ];

  const trainingHours = [
    { title: "Boxing Training", hours: 16, icon: <Target className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
    { title: "Physical Training", hours: 8, icon: <Dumbbell className="w-8 h-8" />, color: "from-amber-500 to-yellow-500" },
    { title: "Total Camp Hours", hours: 24, icon: <Clock className="w-8 h-8" />, color: "from-orange-400 to-amber-400" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 text-gray-800">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in text-white">Pro Boxing Camp</h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white">January 3-7, 2024</p>
          <button 
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg 
            transform hover:scale-105 transition duration-300 text-lg md:text-2xl font-semibold"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "Expert Coaches",
              description: "Learn from professional boxers and certified trainers",
              icon: <Trophy className="w-10 h-10 text-orange-500" />
            },
            {
              title: "Modern Facility",
              description: "State-of-the-art equipment and training areas",
              icon: <Building2 className="w-10 h-10 text-orange-500" />
            },
            {
              title: "Small Groups",
              description: "Personal attention and customized training",
              icon: <Users className="w-10 h-10 text-orange-500" />
            },
            {
              title: "All Levels",
              description: "Programs for beginners to advanced fighters",
              icon: <TrendingUp className="w-10 h-10 text-orange-500" />
            }
          ].map((advantage, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg transform hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 md:py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Our Coaches</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <CoachCard
            name="Mike Thompson"
            title="Head Coach"
            image="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80"
            description="Former professional boxer with 15 years of coaching experience, specializing in advanced technique development and fight strategy."
            achievements={[
              "Former WBC International Champion",
              "Trained 3 Olympic medalists",
              "USA Boxing certified coach",
              "25-2 professional record",
              "Boxing Hall of Fame inductee 2020"
            ]}
          />
          <CoachCard
            name="Sarah Rodriguez"
            title="Technical Coach"
            image="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80"
            description="Olympic medalist with a passion for technical boxing, focusing on precision, footwork, and defensive techniques."
            achievements={[
              "Olympic Silver Medalist 2016",
              "Pan American Games Gold Medalist",
              "Sports Science degree from UCLA",
              "Specialized in female boxing development",
              "Youth Program Director 2018-2022"
            ]}
          />
        </div>
      </section>

      {/* Training Overview Section */}
      <section 
        className="py-16 md:py-20 px-4 relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16 text-white">Training Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {trainingHours.map((item, index) => (
              <div
                key={index}
                className="relative group p-6 md:p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-white">{item.title}</h3>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl md:text-5xl font-bold text-orange-500">{item.hours}</span>
                      <Timer className="w-6 h-6 md:w-8 md:h-8 text-orange-500 animate-pulse" />
                    </div>
                    <p className="text-white text-lg md:text-xl mt-2">Hours</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Daily Schedule</h2>
          <div className="space-y-4">
            {[
              { time: "07:00 - 08:30", activity: "Morning Training & Conditioning", icon: <Sunrise className="w-6 h-6" /> },
              { time: "09:00 - 10:30", activity: "Technical Boxing Skills", icon: <Target className="w-6 h-6" /> },
              { time: "11:00 - 12:30", activity: "Sparring Sessions", icon: <Swords className="w-6 h-6" /> },
              { time: "14:00 - 15:30", activity: "Strength & Conditioning", icon: <Dumbbell className="w-6 h-6" /> },
              { time: "16:00 - 17:30", activity: "Advanced Techniques", icon: <Target className="w-6 h-6" /> }
            ].map((item, index) => (
              <ScheduleItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                selected={selectedPlan === plan.title}
                onSelect={() => handlePlanSelect(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-3 bg-white px-6 md:px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 w-full md:w-auto"
              >
                <Phone className="w-6 md:w-8 h-6 md:h-8 text-orange-500" />
                <span className="text-xl md:text-2xl font-semibold text-gray-800">+1 (234) 567-890</span>
              </a>
              <a
                href="https://t.me/proboxingcamp"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-500 px-6 md:px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 w-full md:w-auto"
              >
                <Send className="w-6 md:w-8 h-6 md:h-8 text-white" />
                <span className="text-xl md:text-2xl font-semibold text-white">Telegram</span>
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 mb-2">123 Boxing Avenue</p>
                  <p className="text-gray-600 mb-2">Los Angeles, CA 90001</p>
                  <p className="text-gray-600">United States</p>
                  <a 
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedPlanDetails && (
        <PaymentModal
          plan={selectedPlanDetails}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}

export default App;