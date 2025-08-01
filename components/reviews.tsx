"use client"
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      rating: 4.5,
      title: "Transformed my job search",
      content: "Resumatch.io transformed my job search! The tailored resume suggestions and mock interview practice gave me the confidence I needed. I landed my dream job within weeks!",
      author: {
        name: "Sarah M",
        position: "Marketing Manager",
        avatar: "/images/avatar1.jpg"
      }
    },
    {
      id: 2,
      rating: 4.5,
      title: "Transformed my job search",
      content: "I've never felt so prepared for interviews. The practice tools on Resumatch.io made all the difference, and the resume tailoring helped me stand out in a competitive market.",
      author: {
        name: "Sarah M",
        position: "Marketing Manager",
        avatar: "/images/avatar2.jpg"
      }
    },
    {
      id: 3,
      rating: 4.5,
      title: "Transformed my job search",
      content: "Resumatch.io transformed my job search! The tailored resume suggestions and mock interview practice gave me the confidence I needed. I landed my dream job within weeks!",
      author: {
        name: "Sarah M",
        position: "Marketing Manager",
        avatar: "/images/avatar3.jpg"
      }
    },
    {
      id: 4,
      rating: 4.5,
      title: "Amazing platform for job seekers",
      content: "The AI-powered resume optimization is incredible. It helped me identify key areas for improvement and significantly increased my interview callbacks.",
      author: {
        name: "John D",
        position: "Software Engineer",
        avatar: "/images/avatar4.jpg"
      }
    },
    {
      id: 5,
      rating: 5.0,
      title: "Best investment for my career",
      content: "Worth every penny! The personalized feedback and industry-specific suggestions made all the difference in my job search journey.",
      author: {
        name: "Emily R",
        position: "Data Analyst",
        avatar: "/images/avatar5.jpg"
      }
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, reviews.length - 3) : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-[#4A3AFF] text-[#4A3AFF]" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-[#4A3AFF] text-[#4A3AFF]" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className='py-16 px-6 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-start mb-12'>
          <div>
            <div className='inline-flex items-center justify-center mb-4 border-gray-200 border rounded-full px-4 py-1'>
              <div className='w-2 h-2 bg-[#4A3AFF] rounded-full mr-2'></div>
              <span className='text-black font-medium text-sm'>Customer Reviews</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
              What Resumatch AI<br />
              users are saying
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className='flex gap-2'>
            <button 
              onClick={prevReview}
              className='w-12 h-12 bg-[#4A3AFF] hover:bg-[#4A3AFF] text-white rounded-full flex items-center justify-center transition-colors duration-200'
              disabled={currentIndex === 0}
            >
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button 
              onClick={nextReview}
              className='w-12 h-12 bg-[#4A3AFF] hover:bg-[#4A3AFF] text-white rounded-full flex items-center justify-center transition-colors duration-200'
              disabled={currentIndex + 3 >= reviews.length}
            >
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {visibleReviews.map((review, index) => (
            <div key={review.id} className=' rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#4A3AFF]/5'>
              {/* Stars */}
              <div className='flex items-center mb-4'>
                {renderStars(review.rating)}
              </div>

              {/* Review Title */}
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                {review.title}
              </h3>

              {/* Review Content */}
              <p className='text-gray-600 leading-relaxed mb-6'>
                {review.content}
              </p>

              {/* Author */}
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden'>
                  <img 
                    src={review.author.avatar} 
                    alt={review.author.name}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const fallback = target.nextSibling as HTMLDivElement;
                      target.style.display = 'none';
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className='w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold' style={{display: 'none'}}>
                    {review.author.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>{review.author.name}</h4>
                  <p className='text-gray-600 text-sm'>{review.author.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
