'use client';

import React, { useState } from 'react';
import VendorCategoryCard from './VendorCategoryCard';

const VendorCategories = () => {
  // pagination: show this many items per page (10 items: 5 cols x 2 rows)
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400',
      title: 'Makeup Artists',
      count: 25671,
      href: '/vendors/makeup-artists',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
      title: 'Planners',
      count: 3560,
      href: '/vendors/planners',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Decorators',
      count: 3484,
      href: '/vendors/decorators',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
      title: 'Caterers',
      count: 1347,
      href: '/vendors/caterers',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      title: 'Jewellery',
      count: 244,
      href: '/vendors/jewellery',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400',
      title: 'Photographers',
      count: 23285,
      href: '/vendors/photographers',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Venues',
      count: 50504,
      href: '/vendors/venues',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400',
      title: 'Mehendi Artists',
      count: 3235,
      href: '/vendors/mehendi-artists',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1545414689-67d21d2a6c97?w=400',
      title: 'Invitations',
      count: 399,
      href: '/vendors/invitations',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400',
      title: 'Djs',
      count: 291,
      href: '/vendors/djs',
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(categories.length / PAGE_SIZE);
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  const handlePrevious = () => {
    if (!isFirstPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="py-12 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#2B2D42]">Vendor categories</h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={isFirstPage}
              aria-label="Previous page"
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all ${isFirstPage
                ? 'bg-[#FFE5D9] border-[#FFE5D9] text-[#8D99AE] cursor-not-allowed'
                : 'bg-white border-[#FFE5D9] text-[#E63946] hover:bg-[#FFE5D9] hover:border-[#E63946]'
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              onClick={handleNext}
              disabled={isLastPage}
              aria-label="Next page"
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all ${isLastPage
                ? 'bg-[#FFE5D9] border-[#FFE5D9] text-[#8D99AE] cursor-not-allowed'
                : 'bg-white border-[#FFE5D9] text-[#E63946] hover:bg-[#FFE5D9] hover:border-[#E63946]'
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
        </div>

        {/* Grid - 5 columns x 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories
            .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)
            .map((category) => (
              <VendorCategoryCard
                key={category.id}
                image={category.image}
                title={category.title}
                count={category.count}
                href={category.href}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default VendorCategories;

