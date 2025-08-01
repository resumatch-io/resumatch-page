import React from 'react';
import { Dot, Video, Star } from 'lucide-react';
import Image from 'next/image';

function Hero() {
    return (
        <main className='flex flex-col items-center justify-center min-h-screen relative px-6 overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(74,58,255,0.24)] to-[rgba(74,58,255,0)]'></div>
            <div className='absolute left-0 top-0 w-[592px] h-full bg-gradient-to-br from-transparent via-transparent to-white opacity-80'></div>
            <div className='absolute right-0 top-0 w-[592px] h-full bg-gradient-to-bl from-transparent via-transparent to-white opacity-80'></div>
            
            {/* Content */}
            <div className='relative z-10 flex flex-col items-center justify-center'>
                {/* Top Info Section */}
                <div className='text-center flex items-center border-gray-200 border justify-center rounded-full px-6 mb-4'>
                <Dot className="text-[#4A3AFF]" size={48} />
                <p className='text-[14px]'>46,912 resumes created today</p>
            </div>

            {/* Main Heading */}
            <h1 className='text-[64px] font-bold text-center text-gray-900 mb-6 max-w-4xl leading-tight'>
                Land your dream job<br />
                with <span className='text-gray-800'>Precision</span>
            </h1>

            {/* Subheading */}
            <p className='text-lg text-gray-600 text-center mb-8 max-w-2xl leading-relaxed'>
                Stand out in the job market with tailored resumes,<br />
                interview prep tools, and company insights.
            </p>

            {/* Call to Action and Rating Section */}
            <div className='flex flex-col items-center text-center mb-4 relative'>
                <div className='flex items-center justify-center mb-6'>
                    <button className='flex items-center bg-[#4A3AFF] text-white px-8 py-4 rounded-lg hover:bg-[#3A2ADF] transition-colors duration-200 font-medium text-lg'>
                        <Video className='mr-3' size={24} />
                        Get Started Now
                    </button>
                    <Image
                        src="/arrow.svg"
                        alt="arrow pointing down"
                        width={60}
                        height={60}
                        className="ml-8"
                    />
                </div>
                <div className='flex items-center mt-4'>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className='text-yellow-400 fill-current' size={20} />
                    ))}
                    <span className='ml-2 text-lg font-semibold text-gray-900'>4.9</span>
                </div>
            </div>
            <p className='text-gray-600 text-sm mb-8'>
                5000+ people use <span className='text-[#4A3AFF] underline'>Resumatch.io</span>
            </p>

            {/* Hero Image */}
            <div className="relative">
                <Image
                    src="/hero-image.svg"
                    alt="hero image"
                    width={700}
                    height={700}
                    className="rounded-lg shadow-lg"
                />
            </div>
            </div>
        </main>
    )
}

export default Hero;