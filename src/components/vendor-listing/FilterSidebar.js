'use client';

import React from 'react';

const FilterSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#FFE5D9] px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-[#2B2D42]">Filter & Sort</h2>
          <div className="flex items-center gap-3">
            <button
              className="text-sm font-semibold text-[#E63946] hover:text-[#D62828] transition-colors"
              onClick={() => {/* Clear all filters */}}
            >
              Clear all
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#FFF8F0] transition-colors"
            >
              <svg className="w-5 h-5 text-[#2B2D42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Budget Section */}
          <div>
            <h3 className="text-lg font-bold text-[#2B2D42] mb-4">Budget</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Upto ₹10,000',
                '₹10,000 - 20,000',
                '₹20,000 - 30,000',
                '₹30,000 - 40,000',
              ].map((option, index) => (
                <button
                  key={index}
                  className="px-4 py-3 rounded-lg border border-[#FFE5D9] hover:bg-[#FFF8F0] hover:border-[#E63946] transition-all text-[#2B2D42] text-sm font-medium text-center"
                >
                  {option}
                </button>
              ))}
              <button className="col-span-2 px-4 py-3 rounded-lg border border-[#FFE5D9] hover:bg-[#FFF8F0] hover:border-[#E63946] transition-all text-[#2B2D42] text-sm font-medium">
                Over ₹40,000
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#FFE5D9]"></div>

          {/* Ratings Section */}
          <div>
            <h3 className="text-lg font-bold text-[#2B2D42] mb-4">Ratings</h3>
            <div className="flex gap-3">
              {['3 star', '4 star', '5 star'].map((option, index) => (
                <button
                  key={index}
                  className="flex-1 px-4 py-3 rounded-lg border border-[#FFE5D9] hover:bg-[#FFF8F0] hover:border-[#E63946] transition-all text-[#2B2D42] text-sm font-medium text-center"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-[#FFE5D9] px-6 py-4">
          <button
            className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #E63946, #F77F00)',
            }}
          >
            Show Results (25,755)
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;

