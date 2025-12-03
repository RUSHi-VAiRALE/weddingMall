'use client';

import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'I found the perfect makeover artist for my wedding through WeddingBazaar.com. My wedding took place in Indore. Vinaya traveled here and her work was flawless. She styled my hair beautifully and did a fantastic job with the entire makeover.',
      name: 'Harmeet Kaur',
      service: 'Wedding Makeup',
      location: 'Indore',
    },
    {
      id: 2,
      quote:
        'Aperture Art impressed me with their amazing photography skills. I made the right choice by selecting them for my marriage. Grateful to WeddingBazaar.com for suggesting the right people. They know what exactly to bring in front of you.',
      name: 'S. Rahul',
      service: 'Photography',
      location: 'Bangalore',
    },
    {
      id: 3,
      quote:
        'The team of photographers recommended by WeddingBazaar.com surprised me with their approach to my portfolio. Their out-of-the-box thinking made the posing process exciting for me.',
      name: 'Shatabdi',
      service: 'Photography',
      location: 'Chennai',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#2B2D42]">
            What our customers say
          </h2>
        </div>

        {/* Testimonials Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              service={testimonial.service}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

