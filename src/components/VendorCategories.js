'use client';

import React, { useState, useRef } from 'react';
import VendorCategoryCard from './VendorCategoryCard';

const VendorCategories = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400',
      title: 'Makeup Artists',
      count: 25585,
      href: '/vendors/makeup-artists',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
      title: 'Planners',
      count: 3541,
      href: '/vendors/planners',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Decorators',
      count: 3473,
      href: '/vendors/decorators',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
      title: 'Caterers',
      count: 1346,
      href: '/vendors/caterers',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      title: 'Jewellery',
      count: 243,
      href: '/vendors/jewellery',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400',
      title: 'Photographers',
      count: 23227,
      href: '/vendors/photographers',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Venues',
      count: 50493,
      href: '/vendors/venues',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400',
      title: 'Mehendi Artists',
      count: 3232,
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
      title: 'DJs',
      count: 290,
      href: '/vendors/djs',
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-16 bg-gray-50 flex justify-center">
      <div className="w-7xl px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Vendor categories</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
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

