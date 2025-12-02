'use client';

import React from 'react';

const TestimonialCard = ({ quote, name, service, location }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#E63946' }}
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
        {quote}
      </p>

      {/* Author Info */}
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-semibold text-gray-900 text-base mb-1">{name}</h4>
        <p className="text-sm text-gray-600">
          {service}, {location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;

