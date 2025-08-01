import React from 'react';
import Image from 'next/image';

function Problems() {
  const problems = [
    {
      icon: '/problems/1.svg',
      title: "ATS Compatibility",
      description: "Many resumes fail ATS scans due to poor formatting, missing keywords, or irrelevant content."
    },
    {
      icon: '/problems/2.svg',
      title: "Generic Resumes",
      description: "Many job seekers use generic resumes that ignore specific job requirements or industry standards."
    },
    {
      icon: '/problems/3.svg',
      title: "Lacking Confidence",
      description: "Many candidates struggle with interviews, from common questions to effective self-presentation."
    },
    {
      icon: '/problems/4.svg',
      title: "Unclear Feedback Loop",
      description: "Job seekers often lack feedback on rejections or interview performance, missing actionable insights."
    },
    {
      icon: '/problems/5.svg',
      title: "Time Constraints",
      description: "Customizing resumes, interview prep and job analysis can be overwhelming."
    },
    {
      icon: '/problems/6.svg',
      title: "High Competition",
      description: "Standing out among hundreds of applicants is increasingly challenging without a clear edge."
    }
  ];

  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center mb-4 border-gray-200 border rounded-full px-4 py-1'>
            <div className='w-2 h-2 bg-[#4A3AFF] rounded-full mr-2'></div>
            <span className='text-black font-medium text-sm'>Your Problems</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-4'>
            Current Problems in the Job<br />
            Application Process
          </h2>
        </div>

        {/* Problems Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {problems.map((problem, index) => (
            <div
              key={index}
              className='group relative p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 h-72 flex flex-col justify-between bg-gray-200 overflow-hidden'
            >
              <Image
                src='/R.svg'
                alt='background arrow'
                width={140}
                height={288}
                className='absolute left-0 top-0 w-auto h-full object-cover z-0 group-hover:hidden'
                style={{ height: '100%' }}
              />
              <Image
                src='/colorarrow.svg'
                alt='hover arrow'
                width={140}
                height={288}
                className='absolute left-0 top-0 w-auto h-full object-cover z-0 hidden group-hover:block'
                style={{ height: '100%' }}
              />
              <div className='relative z-10 flex items-start'>
                <Image
                  src={problem.icon}
                  alt={problem.title}
                  width={48}
                  height={48}
                  className='text-[#4A3AFF]'
                />
              </div>
              <div className='relative z-10'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {problem.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center mt-12 space-x-2'>
          <div className='w-2 h-2 bg-[#4A3AFF] rounded-full'></div>
          <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </section>
  );
}

export default Problems;
