'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const VendorCard = ({ vendor }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFE5D9]">
      {/* Image Container */}
      <div className="relative h-64">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Most Preferred Badge */}
        {vendor.isPreferred && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5" style={{ background: 'linear-gradient(135deg, #E63946, #F77F00)' }}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Most Preferred
          </div>
        )}

        {/* Bottom Stats */}
        <div className="absolute bottom-3 left-3 flex items-center gap-3">
          {vendor.photoCount && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/60 backdrop-blur-sm">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-xs font-medium">{vendor.photoCount}+</span>
            </div>
          )}
          {vendor.videoCount && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/60 backdrop-blur-sm">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <span className="text-white text-xs font-medium">{vendor.videoCount}</span>
            </div>
          )}
        </div>

        {/* Shortlist Button */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-md">
          <svg className="w-5 h-5 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#2B2D42] mb-1 line-clamp-1">
              {vendor.name}
            </h3>
            <p className="text-sm text-[#8D99AE] mb-1">{vendor.location}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-[#2B2D42]">₹{vendor.price.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#8D99AE]">{vendor.category}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-[#F77F00]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-[#2B2D42]">{vendor.rating}</span>
            {vendor.reviewCount && (
              <span className="text-xs text-[#8D99AE]">({vendor.reviewCount} Reviews)</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2.5 rounded-lg border border-[#FFE5D9] text-[#2B2D42] font-semibold text-sm hover:bg-[#FFF8F0] transition-all">
            Send enquiry
          </button>
          <button className="flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #E63946, #F77F00)' }}>
            View contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;

