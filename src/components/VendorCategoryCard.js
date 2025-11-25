'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VendorCategoryCard = ({ image, title, count, href }) => {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100">
        {/* Image Container with padding */}
        <div className="p-3" style={{ padding: '10px' }}>
          <div className="relative w-full h-32 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </div>
        </div>

        {/* Content with padding */}
        <div className="px-3 pb-3" style={{ padding: '10px' }}>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-xs text-gray-600 flex items-center">
            {count.toLocaleString()}
            <span className="ml-1">›</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VendorCategoryCard;

