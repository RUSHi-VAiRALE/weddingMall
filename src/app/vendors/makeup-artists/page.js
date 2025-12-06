'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FilterBar from '@/components/vendor-listing/FilterBar';
import FilterSidebar from '@/components/vendor-listing/FilterSidebar';
import VendorCard from '@/components/vendor-listing/VendorCard';
import image1 from '../../../../public/makeupArtists/image1.jpg'
import image2 from '../../../../public/makeupArtists/image2.jpg'
import image3 from '../../../../public/makeupArtists/image3.jpg'
import image4 from '../../../../public/makeupArtists/image4.jpg'
import image5 from '../../../../public/makeupArtists/image5.jpg'

const VendorListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Sample vendor data
  const vendors = [
    {
      id: 1,
      name: 'Bloom Bridal Studio',
      location: 'Aminjikarai, Chennai',
      category: 'Bridal Makeup',
      price: 15000,
      rating: 4.5,
      reviewCount: null,
      photoCount: 40,
      videoCount: null,
      isPreferred: true,
      image: image1,
    },
    {
      id: 2,
      name: 'Makeover by Manpreet',
      location: 'Yelahanka, Bangalore',
      category: 'Bridal Makeup',
      price: 16000,
      rating: 5.0,
      reviewCount: 5,
      photoCount: 15,
      videoCount: null,
      isPreferred: true,
      image: image5,
    },
    {
      id: 3,
      name: 'Chanel Makeup Studio',
      location: 'Lucknow',
      category: 'Bridal Makeup',
      price: 11000,
      rating: 4.9,
      reviewCount: 2,
      photoCount: 50,
      videoCount: 1,
      isPreferred: true,
      image: image3,
    },
    {
      id: 4,
      name: 'Glamour Studio',
      location: 'Connaught Place, Delhi',
      category: 'Bridal Makeup',
      price: 25000,
      rating: 4.8,
      reviewCount: 12,
      photoCount: 60,
      videoCount: 2,
      isPreferred: true,
      image: image4,
    },
    {
      id: 5,
      name: 'Royal Bridal Makeup',
      location: 'Andheri, Mumbai',
      category: 'Bridal Makeup',
      price: 18000,
      rating: 4.7,
      reviewCount: 8,
      photoCount: 45,
      videoCount: 1,
      isPreferred: false,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
    },
    {
      id: 6,
      name: 'Elite Makeup Artists',
      location: 'Koramangala, Bangalore',
      category: 'Bridal Makeup',
      price: 22000,
      rating: 4.6,
      reviewCount: 15,
      photoCount: 55,
      videoCount: 3,
      isPreferred: false,
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Navbar */}
      <Navbar />

      {/* Header Section (scrolls away) */}
      <div
        className={`transition-all duration-300 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full absolute'
          } pt-20 bg-white border-b border-[#FFE5D9]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-[#E63946] hover:text-[#D62828] font-medium">
              Home
            </Link>
            <span className="text-[#8D99AE]">/</span>
            <span className="text-[#8D99AE]">Bridal Makeup Artists</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-3">
            Best Bridal Makeup Artists <span className="text-[#8D99AE]">(25,755)</span>
          </h1>

          {/* Description */}
          <p className="text-[#2B2D42] text-base leading-relaxed">
            See List Of Best Bridal Makeup Artists In All Indian Cities Find Premium And Budget HD Makeup Artists, AirBrush Bridal Makeup Artists. Get Full Quotations From Bridal Makeup Artists In All Indian Cities For Your Requirements, See Phone Number, Portfolio, Latest Reviews, Photos On WeddingBazaar
          </p>
        </div>
      </div>

      {/* Filter Bar (sticky) */}
      <FilterBar onFilterClick={() => setIsFilterOpen(true)} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #E63946, #F77F00)' }}>
            Load More Vendors
          </button>
        </div>
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
};

export default VendorListingPage;

