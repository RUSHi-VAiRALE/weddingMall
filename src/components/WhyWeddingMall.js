'use client';

import React, { useState, useRef } from 'react';

const WhyWeddingMall = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const features = [
        {
            id: 1,
            iconSvg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12L28 20H20L24 12Z" fill="#E63946" />
                    <path d="M20 20H28L32 28H16L20 20Z" fill="#E63946" />
                    <path d="M16 28H32L28 36H20L16 28Z" fill="#E63946" />
                </svg>
            ),
            cardBg: '#FFF5F5',
            title: 'Trusted marketplace from Matrimony.com group',
        },
        {
            id: 2,
            iconSvg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="18" r="4" fill="#0288D1" />
                    <circle cx="24" cy="12" r="3" fill="#0288D1" />
                    <circle cx="32" cy="18" r="4" fill="#0288D1" />
                    <path d="M12 30C12 26 16 24 24 24C32 24 36 26 36 30V36H12V30Z" fill="#0288D1" />
                </svg>
            ),
            cardBg: '#F0FEFF',
            title: '2.8 Lakh+ trusted vendors across 40+ cities',
        },
        {
            id: 3,
            iconSvg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="16" r="5" fill="#7C3AED" />
                    <circle cx="30" cy="16" r="5" fill="#7C3AED" />
                    <path d="M14 28C14 24 17 22 24 22C31 22 34 24 34 28V34H14V28Z" fill="#7C3AED" />
                </svg>
            ),
            cardBg: '#FAF5FF',
            title: '2.3 million connections with 60K+ vendors',
        },
        {
            id: 4,
            iconSvg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="18" r="6" fill="#9CA3AF" />
                    <path d="M12 32C12 27 17 25 24 25C31 25 36 27 36 32V38H12V32Z" fill="#9CA3AF" />
                    <circle cx="28" cy="34" r="4" fill="#9CA3AF" />
                </svg>
            ),
            cardBg: '#F0F7FF',
            title: '20 Lakh+ and counting happy customers',
        },
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350;
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
        <section className="py-16 px-[5%] bg-white relative flex justify-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#2B2D42] mb-12">
                    Why WeddingMall?
                </h2>

                {/* Navigation Arrows */}
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!showLeftArrow}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
                    aria-label="Previous features"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 15L7.5 10L12.5 5"
                            stroke="#666"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    disabled={!showRightArrow}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
                    style={{
                        background: showRightArrow ? 'linear-gradient(135deg, #E63946, #F77F00)' : '#FFE5D9'
                    }}
                    aria-label="Next features"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Scrollable Container */}
                <div className="relative px-8">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="overflow-x-auto scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <div className="flex gap-6 pb-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="w-[280px] rounded-2xl p-8 transition-all duration-300 hover:shadow-lg shrink-0"
                                    style={{ backgroundColor: feature.cardBg }}
                                >
                                    {/* Icon */}
                                    <div className="flex items-center justify-center mb-6">
                                        {feature.iconSvg}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-[#2B2D42] leading-relaxed">
                                        {feature.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default WhyWeddingMall;
