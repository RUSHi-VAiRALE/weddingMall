'use client';

import React, { useState } from 'react';

const FilterBar = ({ onFilterClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-[#FFE5D9] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Budget Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('budget')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFE5D9] bg-white hover:bg-[#FFF8F0] transition-all text-[#2B2D42] font-medium text-sm"
              >
                <span>Budget</span>
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'budget' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'budget' && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveDropdown(null)}
                  />
                  <div className="absolute top-full mt-2 left-0 w-80 bg-white rounded-xl shadow-2xl border border-[#FFE5D9] p-6 z-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[#2B2D42]">Budget</h3>
                      <button
                        className="text-sm font-semibold text-[#E63946] hover:text-[#D62828]"
                        onClick={() => {/* Clear filters logic */}}
                      >
                        Clear all
                      </button>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Upto ₹10,000',
                        '₹10,000 - 20,000',
                        '₹20,000 - 30,000',
                        '₹30,000 - 40,000',
                        'Over ₹40,000',
                      ].map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-3 rounded-lg border border-[#FFE5D9] hover:bg-[#FFF8F0] hover:border-[#E63946] transition-all text-[#2B2D42] text-sm font-medium"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Ratings Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ratings')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFE5D9] bg-white hover:bg-[#FFF8F0] transition-all text-[#2B2D42] font-medium text-sm"
              >
                <span>Ratings</span>
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'ratings' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'ratings' && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveDropdown(null)}
                  />
                  <div className="absolute top-full mt-2 left-0 w-64 bg-white rounded-xl shadow-2xl border border-[#FFE5D9] p-6 z-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[#2B2D42]">Ratings</h3>
                      <button
                        className="text-sm font-semibold text-[#E63946] hover:text-[#D62828]"
                        onClick={() => {/* Clear filters logic */}}
                      >
                        Clear all
                      </button>
                    </div>
                    <div className="space-y-3">
                      {['3 star', '4 star', '5 star'].map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-3 rounded-lg border border-[#FFE5D9] hover:bg-[#FFF8F0] hover:border-[#E63946] transition-all text-[#2B2D42] text-sm font-medium"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Shortlisted Button */}
            <button className="px-5 py-2.5 rounded-full border border-[#FFE5D9] bg-white hover:bg-[#FFF8F0] transition-all text-[#2B2D42] font-medium text-sm">
              Shortlisted
            </button>
          </div>

          {/* Filters Button */}
          <button
            onClick={onFilterClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFE5D9] bg-white hover:bg-[#FFF8F0] transition-all text-[#2B2D42] font-medium text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

