'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ images, title, category, date, href }) => {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFE5D9]">
        {/* Image Gallery */}
        <div className="relative h-48 bg-gray-100">
          <div className="grid grid-cols-3 gap-1 h-full p-2">
            {images.slice(0, 3).map((img, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`${title} - ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 15vw"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFE5D9]"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#E63946]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFE5D9]"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#E63946]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-semibold text-[#2B2D42] mb-3 line-clamp-2 group-hover:text-[#E63946] transition-colors">
            {title}
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-[#E63946] uppercase tracking-wide">
              {category}
            </p>
            <p className="text-xs text-[#8D99AE]">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

