import React from 'react';

interface Solution {
  image: string;
  title: string;
  description: string;
  button: string;
}

interface ScrollBoxProps {
  solutions: Solution[];

}

const ScrollBox: React.FC<ScrollBoxProps> = ({ solutions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto overflow-hidden">
      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[600px]">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex h-[500px] bg-gray-50"
          >
            {/* Left Side - Image */}
            <div className="w-1/2 p-6 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={solution.image}
                alt={solution.title}
                className="rounded-xl shadow-lg max-w-full max-h-full object-cover"
              />
            </div>

            {/* Right Side - Solution Details */}
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <div className="max-w-sm">
                {/* Solution Index */}
                <div className="text-[#4A3AFF] font-medium mb-2">
                  Solution {index + 1}
                </div>
                
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {solution.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {solution.description}
                </p>
                
                {/* Button */}
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                  {solution.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBox;
