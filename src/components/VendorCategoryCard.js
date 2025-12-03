'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VendorCategoryCard = ({ image, title, count, href }) => {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-[#FFE5D9]">
        {/* Image Container */}
        <div className="p-3">
          <div className="relative w-full h-36 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          <h3 className="text-base font-semibold text-[#2B2D42] mb-1">
            {title}
          </h3>
          <p className="text-sm text-[#8D99AE] flex items-center">
            {count.toLocaleString()}
            <span className="ml-1 text-[#F77F00]">›</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VendorCategoryCard;

