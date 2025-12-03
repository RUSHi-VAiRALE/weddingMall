'use client';

import React, { useState } from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 3; // Show 3 blog posts at a time

  const blogPosts = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
      ],
      title: 'Royal Romance on Lake Pichola: Inside Netra Mantena & Vamsi ...',
      category: 'CELEBRITY',
      date: '28 Nov 2025',
      href: '/blog/royal-romance-lake-pichola',
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      ],
      title: 'The Ultimate Groom Style Guide: Top Indian Brands Every Dulh...',
      category: 'GROOM FASHION',
      date: '27 Nov 2025',
      href: '/blog/ultimate-groom-style-guide',
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400',
        'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400',
      ],
      title: 'The Art of Gifting: 20 Indian Luxury Brands Redefining Weddi...',
      category: 'WEDDING FAVOURS & GIFTS',
      date: '25 Nov 2025',
      href: '/blog/art-of-gifting-luxury-brands',
    },
    {
      id: 4,
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
        'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=400',
        'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400',
      ],
      title: 'Destination Wedding Planning: Everything You Need to Know',
      category: 'WEDDING PLANNING',
      date: '24 Nov 2025',
      href: '/blog/destination-wedding-planning',
    },
  ];

  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);
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
          <h2 className="text-3xl font-bold text-[#2B2D42]">Latest Articles</h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={isFirstPage}
              aria-label="Previous page"
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                isFirstPage
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
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                isLastPage
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

        {/* Blog Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)
            .map((post) => (
              <BlogCard
                key={post.id}
                images={post.images}
                title={post.title}
                category={post.category}
                date={post.date}
                href={post.href}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

