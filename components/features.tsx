"use client"
import React, { useState } from 'react'

function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: <img src="/fi1.svg" alt="Feature 1" className="w-6 h-6" />,
      title: 'Tailored Resume & Cover Letter',
      subtitle: 'Easy to Create Resume & Cover Letter',
      heading: 'Tailored Resume\n& Cover Letter',
      description: 'Resumatch.io aligns your resume with job descriptions, highlighting your key strengths to grab recruiters\' attention and boost your chances of getting interviews.',
      buttonText: 'Build Resume Now',
      image: '/f1.png'
    },
    {
      id: 1,
      icon: <img src="/fi2.svg" alt="Feature 2" className="w-6 h-6" />,
      title: 'Interview Prep Tools',
      subtitle: 'Ace Your Interview with AI Assistance',
      heading: 'Interview Prep Tools',
      description: 'Get personalized interview questions, practice with AI feedback, and build confidence with our comprehensive interview preparation tools.',
      buttonText: 'Start Practicing',
      image: '/f2.png'
    },
    {
      id: 2,
      icon: <img src="/fi3.svg" alt="Feature 3" className="w-6 h-6" />,
      title: 'Job Matches & Insights',
      subtitle: 'Find Perfect Job Matches',
      heading: 'Job Matches & Insights',
      description: 'Discover job opportunities that match your skills and experience with detailed insights and compatibility scores.',
      buttonText: 'Explore Jobs',
      image: '/f3.png'
    }
  ];

  return (
    <main className='py-16 px-6 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center mb-4 border-gray-200 border rounded-full px-4 py-1'>
            <div className='w-2 h-2 bg-[#4A3AFF] rounded-full mr-2'></div>
            <span className='text-black font-medium text-sm'>Our Features</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8'>Resumatch AI Features</h1>
        </div>

        {/* Feature Navigation Tabs */}
        <div className='flex justify-center mb-12 gap-4'>
          {features.map((feature) => (
            <button 
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`px-8 py-4 rounded-full  font-medium transition-colors flex items-center ${
                activeFeature === feature.id
                  ? 'bg-[#4A3AFF] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className='mr-3 text-xl'>{feature.icon}</span>
              {feature.title}
            </button>
          ))}
        </div>

        {/* Main Feature Card */}
        <div className='bg-[#4A3AFF] rounded-3xl p-12 shadow-xl'>
          <div className='flex items-center gap-12'>
            {/* Left Side - Feature Image */}
            <div className='w-1/2'>
              <div className='bg-gray-400 rounded-2xl p-6 shadow-lg'>
                {/* Mock Resume Preview */}
                <img 
                  src={features[activeFeature].image} 
                  alt={features[activeFeature].title} 
                  className='w-full h-auto rounded-lg'
                />
              </div>
            </div>

            {/* Right Side - Feature Content */}
            <div className='w-1/2 text-white'>
              <div className='mb-4'>
                <span className='text-white/80 text-base font-medium'>{features[activeFeature].subtitle}</span>
              </div>
              <h2 className='text-5xl font-bold mb-6 leading-tight whitespace-pre-line'>
                {features[activeFeature].heading}
              </h2>
              <p className='text-white/90 text-lg leading-relaxed mb-8'>
                {features[activeFeature].description}
              </p>
              <button className='bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200'>
                {features[activeFeature].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Features