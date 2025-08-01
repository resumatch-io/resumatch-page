import React from 'react';
import ScrollBox from './ui/scrollbox';

function Solutions() {
  const solutions = [
    {
      image: '/path/to/ats-resume.jpg',
      title: 'ATS-Optimized Resumes',
      description: 'Automatically analyze and enhance resumes to meet ATS criteria, ensuring they pass initial screening.',
      button: 'Get Started Now'
    },
    {
      image: '/path/to/resume-editor.jpg', 
      title: 'Personalized Resume Tailoring',
      description: 'User can provide custom instruction using "Ask AI" feature, and personalize resume according to you.',
      button: 'Get Started Now'
    },
    {
      image: '/path/to/image3.jpg',
      title: 'Solution 3',
      description: 'Description for Solution 3',
      button: 'Learn More'
    }
  ];

  return (
    <main className='py-16 px-6'>
      <div className='text-center mb-12'>
        <div className='inline-flex items-center justify-center mb-4 border-gray-200 border rounded-full px-4 py-1'>
          <div className='w-2 h-2 bg-[#4A3AFF] rounded-full mr-2'></div>
          <span className='text-black font-medium text-sm'>Our Solutions</span>
        </div>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>Resumatch AI Solutions</h1>
      </div>
      
      {/* Horizontal Solutions Layout */}
      <div className='flex gap-8 overflow-x-auto pb-4 max-w-7xl mx-auto'>
        {solutions.map((solution, index) => (
          <div key={index} className='flex-shrink-0 w-[800px]'>
            <ScrollBox solutions={[solution]} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Solutions;