import React from 'react';
import { FileText, Users, MessageCircle, RefreshCw, Clock, TrendingUp } from 'lucide-react';

function Problems() {
  const problems = [
    {
      icon: <FileText className="text-[#4A3AFF]" size={48} />,
      title: "ATS Compatibility",
      description: "Many resumes fail ATS scans due to poor formatting, missing keywords, or irrelevant content."
    },
    {
      icon: <FileText className="text-[#4A3AFF]" size={48} />,
      title: "Generic Resumes",
      description: "Many job seekers use generic resumes that ignore specific job requirements or industry standards."
    },
    {
      icon: <MessageCircle className="text-[#4A3AFF]" size={48} />,
      title: "Lacking Confidence",
      description: "Many candidates struggle with interviews, from common questions to effective self-presentation."
    },
    {
      icon: <RefreshCw className="text-[#4A3AFF]" size={48} />,
      title: "Unclear Feedback Loop",
      description: "Job seekers often lack feedback on rejections or interview performance, missing actionable insights."
    },
    {
      icon: <Clock className="text-[#4A3AFF]" size={48} />,
      title: "Time Constraints",
      description: "Customizing resumes, interview prep and job analysis can be overwhelming."
    },
    {
      icon: <TrendingUp className="text-[#4A3AFF]" size={48} />,
      title: "High Competition",
      description: "Standing out among hundreds of applicants is increasingly challenging without a clear edge."
    }
  ];

  return (
    <section className='py-16 px-6 bg-gray-50'>
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
            <div key={index} className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-64 flex flex-col justify-between'>
              <div className='flex items-start'>
                {problem.icon}
              </div>
              <div>
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
