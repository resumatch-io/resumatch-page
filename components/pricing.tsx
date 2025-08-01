"use client"
import React, { useState } from 'react';
import { Check } from 'lucide-react';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'annually' | 'monthly'>('annually');

  const plans = [
    {
      name: 'Standard',
      description: 'For companies looking to structure their contract management and give their teams greater autonomy.',
      prices: {
        annually: 19,
        monthly: 29,
      },
      features: [
        'Unlimited users',
        'Unlimited testing minutes',
      ],
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'For companies looking to structure their contract management and give their teams greater autonomy.',
      prices: {
        annually: 39,
        monthly: 49,
      },
      features: [
        'Unlimited users',
        'Unlimited testing minutes',
      ],
      isPopular: true,
    },
    {
      name: 'Premium',
      description: 'For companies looking to structure their contract management and give their teams greater autonomy.',
      prices: {
        annually: 55,
        monthly: 65,
      },
      features: [
        'Unlimited users',
        'Unlimited testing minutes',
      ],
      isPopular: false,
    },
  ];

  return (
    <section className='py-16 px-6 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-12'>
          <div>
            <div className='inline-flex items-center justify-center mb-4 border-gray-200 border rounded-full px-4 py-1'>
              <div className='w-2 h-2 bg-[#4A3AFF] rounded-full mr-2'></div>
              <span className='text-black font-medium text-sm'>Pricing</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Our Top Plans
            </h2>
          </div>
          
          {/* Billing Cycle Toggle */}
          <div className='flex items-center bg-gray-200 rounded-full p-1'>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'annually' ? 'bg-[#4A3AFF] text-white' : 'text-gray-600'
              }`}
            >
              Annually
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly' ? 'bg-[#4A3AFF] text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg relative flex flex-col ${
                plan.isPopular ? 'bg-[#4A3AFF] text-white' : 'bg-white text-gray-800'
              }`}
            >
              {plan.isPopular && (
                <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-4 py-1 rounded-full'>
                  The most popular
                </div>
              )}
              
              <div className='flex-grow'>
                <h3 className='text-2xl font-bold mb-4'>{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <div className='flex items-end mb-8'>
                  <span className='text-4xl font-bold'>
                    ${plan.prices[billingCycle]}
                  </span>
                  <span className={`ml-2 text-sm ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                    / month
                  </span>
                </div>

                <div className={`text-xs mb-8 ${plan.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                  Per month, billed {billingCycle === 'annually' ? `annually or $${plan.prices.monthly} month to month` : 'monthly'}
                </div>

                <div className='border-t border-gray-200 opacity-50 mb-8'></div>

                <p className={`text-sm font-semibold mb-4 ${plan.isPopular ? 'text-white' : 'text-gray-800'}`}>
                  INCLUDED
                </p>
                <ul className='space-y-3'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-center text-sm'>
                      <Check className={`w-4 h-4 mr-2 ${plan.isPopular ? 'text-white' : 'text-[#4A3AFF]'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-8'>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.isPopular
                      ? 'bg-white text-[#4A3AFF] hover:bg-gray-100'
                      : 'bg-[#4A3AFF] text-white hover:bg-blue-700'
                  }`}
                >
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
