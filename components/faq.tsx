"use client"
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the definition of a resumatch.io?",
      answer: "A resume is a concise document that summarizes your work experience, education, skills, qualities, and accomplishments. It's used to showcase your qualifications to potential employers and helps you stand out. It tells employers why you deserve a job interview in one or two powerful pages."
    },
    {
      question: "What is the difference between a CV and a resume?",
      answer: "A resume is a brief summary of your skills and experience over one or two pages, a CV is more detailed and can be longer. A resume is tailored to a specific job, whereas a CV is a comprehensive overview of your academic and professional history."
    },
    {
      question: "How do I choose the right resume template?",
      answer: "Consider the industry, your experience level, and the company culture. Creative fields may allow for more design-forward templates, while traditional industries prefer a classic, straightforward format. Our platform helps you choose the best one for your situation."
    },
    {
      question: "How far back should a resume go?",
      answer: "Typically, you should include the last 10-15 years of your work experience. If you have a long and varied career, focus on the roles most relevant to the job you're applying for. Older, less relevant experience can be summarized or omitted."
    },
    {
      question: "What does an ATS-friendly resume mean?",
      answer: "An ATS-friendly resume is formatted to be easily read by Applicant Tracking Systems. This means using standard fonts, clear headings, and relevant keywords, while avoiding complex layouts, graphics, or tables that can confuse the software."
    },
    {
      question: "What resume file format can I download in?",
      answer: "You can download your resume in PDF format, which is the industry standard and preserves your formatting across all devices. We also offer options for .docx (Word) and plain text for specific application requirements."
    },
    {
      question: "Should I make a different resume for every job application?",
      answer: "Yes, absolutely. Tailoring your resume for each specific job by highlighting the most relevant skills and experience significantly increases your chances of getting an interview. Our AI tools make this process fast and easy."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-16 px-6 bg-gray-50'>
      <div className='max-w-3xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center mb-4 border-gray-200 border rounded-full px-4 py-1'>
            <div className='w-2 h-2 bg-[#4A3AFF] rounded-full mr-2'></div>
            <span className='text-black font-medium text-sm'>FAQs</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex justify-between items-center p-6 text-left'
              >
                <h3 className='text-lg font-semibold text-gray-900'>{faq.question}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {openIndex === index ? <X size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className='px-6 pb-6'>
                  <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
