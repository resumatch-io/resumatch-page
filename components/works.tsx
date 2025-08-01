import React from 'react'

function Works() {
    const steps = [
        {
            number: 1,
            title: "Keyword Optimization",
            description: "Optimize your resume with recruiter keywords to boost ATS compatibility and increase interview chances."
        },
        {
            number: 2,
            title: "Skill Highlighting",
            description: "Emphasize your most relevant skills and achievements that match the job requirements."
        },
        {
            number: 3,
            title: "Custom Formatting",
            description: "Apply professional formatting that stands out while maintaining ATS compatibility."
        },
        {
            number: 4,
            title: "Experience Prioritization",
            description: "Reorganize your experience to highlight the most relevant roles and accomplishments."
        }
    ];

    return (
        <section className='py-16 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex items-center gap-12'>
                    {/* Left Side - Content */}
                    <div className='w-1/2 text-white'>
                        {/* Header */}
                        <div className='mb-8'>
                            <div className='inline-flex items-center justify-center mb-4 border-white border rounded-full px-4 py-1'>
                                <div className='w-2 h-2 bg-white rounded-full mr-2'></div>
                                <span className='text-white font-medium text-sm'>Our Solutions</span>
                            </div>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4 leading-tight'>
                                How resume<br />
                                tailoring helps you
                            </h2>
                            <p className='text-blue-100 text-lg leading-relaxed'>
                                Our AI system focuses on key aspects of your resume
                            </p>
                        </div>

                        {/* Steps */}
                        <div className='space-y-6'>
                            {steps.map((step, index) => (
                                <div key={step.number} className='flex items-start'>
                                    {/* Step Number */}
                                    <div className='flex-shrink-0 mr-4'>
                                        <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                                            <span className='text-white font-bold text-sm'>Step {step.number}</span>
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-bold text-white mb-2'>
                                            {step.title}
                                        </h3>
                                        <p className='text-blue-100 leading-relaxed'>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Video/Image Placeholder */}
                    <div className='w-1/2'>
                        <div className='bg-white rounded-2xl p-6 shadow-lg'>
                            <div className='aspect-video bg-gray-100 rounded-lg border-4 border-gray-300 flex items-center justify-center'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                        <svg className='w-8 h-8 text-gray-500' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd'></path>
                                        </svg>
                                    </div>
                                    <p className='text-gray-500 font-medium'>Video Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works
