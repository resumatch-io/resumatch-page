"use client"
import React, { useState } from 'react'

function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: '📄',
      title: 'Tailored Resume & Cover Letter',
      subtitle: 'Easy to Create Resume & Cover Letter',
      heading: 'Tailored Resume & Cover Letter',
      description: 'Resumatch.io aligns your resume with job descriptions, highlighting your key strengths to grab recruiters\' attention and boost your chances of getting interviews.',
      buttonText: 'Build Resume Now',
      image: '/images/resume-preview.png'
    },
    {
      id: 1,
      icon: '🎯',
      title: 'Interview Prep Tools',
      subtitle: 'Ace Your Interview with AI Assistance',
      heading: 'Interview Prep Tools',
      description: 'Get personalized interview questions, practice with AI feedback, and build confidence with our comprehensive interview preparation tools.',
      buttonText: 'Start Practicing',
      image: '/images/interview-prep.png'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Job Matches & Insights',
      subtitle: 'Find Perfect Job Matches',
      heading: 'Job Matches & Insights',
      description: 'Discover job opportunities that match your skills and experience with detailed insights and compatibility scores.',
      buttonText: 'Explore Jobs',
      image: '/images/job-matches.png'
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
        <div className='flex justify-center mb-8 gap-4'>
          {features.map((feature) => (
            <button 
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`px-6 py-3 rounded-full font-medium shadow-sm transition-colors flex items-center ${
                activeFeature === feature.id
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className='mr-2'>{feature.icon}</span>
              {feature.title}
            </button>
          ))}
        </div>

        {/* Main Feature Card */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-lg'>
          <div className='flex items-center'>
            {/* Left Side - Feature Image */}
            <div className='w-1/2 pr-8'>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <img 
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className='rounded-lg w-full object-cover'
                />
              </div>
            </div>

            {/* Right Side - Feature Content */}
            <div className='w-1/2 text-white'>
              <div className='mb-4'>
                <span className='text-blue-200 text-sm font-medium'>{features[activeFeature].subtitle}</span>
              </div>
              <h2 className='text-4xl font-bold mb-6 leading-tight'>
                {features[activeFeature].heading}
              </h2>
              <p className='text-blue-100 text-lg leading-relaxed mb-8'>
                {features[activeFeature].description}
              </p>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200'>
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