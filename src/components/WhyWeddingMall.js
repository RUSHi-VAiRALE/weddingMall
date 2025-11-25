'use client';

import React, { useState, useRef } from 'react';

const WhyWeddingMall = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const features = [
        {
            id: 1,
            icon: '💍',
            iconBg: '#FFE5E5',
            cardBg: '#FFF5F5',
            title: 'Trusted marketplace from Matrimony.com group',
        },
        {
            id: 2,
            icon: '📍',
            iconBg: '#E0F7FA',
            cardBg: '#F0FEFF',
            title: '2.8 Lakh+ trusted vendors across 40+ cities',
        },
        {
            id: 3,
            icon: '💑',
            iconBg: '#F3E5F5',
            cardBg: '#FAF5FF',
            title: '2.3 million connections with 60K+ vendors',
        },
        {
            id: 4,
            icon: '😊',
            iconBg: '#E3F2FD',
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
        <section className="py-16 px-[5%] bg-white relative flex justify-center" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <div className="max-w-7xl mx-auto" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                    Why WeddingMall?
                </h2>

                {/* Navigation Arrows */}
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!showLeftArrow}
                    className="absolute left-60 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
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
                            stroke="#333"
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
                    className="absolute right-60 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 shadow-lg hover:shadow-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
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
                <div className="relative px-8" style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="overflow-x-auto scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <div className="flex gap-6 pb-4" style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="w-[220px] h-[200px] rounded-2xl p-8 transition-all duration-300 hover:shadow-lg flex-shrink-0"
                                    style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', backgroundColor: feature.cardBg }}

                                >
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6"
                                        style={{ backgroundColor: feature.iconBg }}
                                    >
                                        {feature.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
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
