import React from 'react'

function Statistics() {
  const stats = [
    {
      number: "50+",
      label: "Resume Templates"
    },
    {
      number: "10K+",
      label: "Jobs Available"
    },
    {
      number: "15+",
      label: "Industries Available"
    },
    {
      number: "10K+",
      label: "Resumes Tailored"
    }
  ]

  return (
    <section className='bg-[#4A3AFF] py-10 px-6 mt-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center text-white'>
              <div className='text-[56px] md:text-5xl font-bold mb-2'>
                <span className='inline-block'>
                  <img src="/bracket1.svg" alt="Bracket 1" className='inline-block h-6 mr-1' />
                  {stat.number}
                  <img src="/bracket2.svg" alt="Bracket 2" className='inline-block h-6 ml-1' />
                </span>
              </div>
              <p className='text-[14px] font-medium opacity-90'>
                {stat.label}
              </p>
              
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
