'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const products = [
    { name: 'Wedding Wear', icon: '👗', href: '/vendors/wedding-wear' },
    { name: 'Jewellery', icon: '💍', href: '/vendors/jewellery' },
    { name: 'Wedding Invitation', icon: '💌', href: '/vendors/invitations' },
    {
      name: 'Wedding Gifts',
      icon: '🎁',
      href: '/vendors/gifts',
      submenu: [
        { name: 'Furniture', href: '/vendors/gifts/furniture' },
        { name: 'Electrical Appliance', href: '/vendors/gifts/electrical' },
      ],
    },
  ];

  const services = [
    { name: 'Wedding Venue', icon: '🏛️', href: '/vendors/venues' },
    { name: 'Wedding Photographer', icon: '📷', href: '/vendors/photographers' },
    { name: 'Wedding Caterers', icon: '🍽️', href: '/vendors/caterers' },
    { name: 'Decorators', icon: '🎨', href: '/vendors/decorators' },
    { name: 'Makeup Artist', icon: '💄', href: '/vendors/makeup-artists' },
    { name: 'Mehendi Artist', icon: '🤚', href: '/vendors/mehendi-artists' },
    { name: 'Event Planner', icon: '📋', href: '/vendors/planners' },
    { name: 'DJ / Sound / Audio', icon: '🎵', href: '/vendors/djs' },
    {
      name: 'Wedding Entertainments',
      icon: '🎭',
      href: '/vendors/entertainment',
      submenu: [
        { name: 'Band', href: '/vendors/entertainment/band' },
        { name: 'Bhangra', href: '/vendors/entertainment/bhangra' },
        { name: 'Singers', href: '/vendors/entertainment/singers' },
        { name: 'Dancers', href: '/vendors/entertainment/dancers' },
        { name: 'Celebrities', href: '/vendors/entertainment/celebrities' },
      ],
    },
    { name: 'Dance Choreographer', icon: '💃', href: '/vendors/choreographers' },
    { name: 'Anchor / Wedding Host', icon: '🎤', href: '/vendors/anchor' },
    { name: 'Wedding Transport', icon: '🚗', href: '/vendors/transport' },
    { name: 'Pandit', icon: '🕉️', href: '/vendors/pandit' },
    { name: 'Halwai', icon: '🍬', href: '/vendors/halwai' },
    { name: 'Honeymoon Package', icon: '✈️', href: '/vendors/honeymoon' },
    { name: 'Pre-Wedding Photoshoot', icon: '📸', href: '/vendors/pre-wedding-photoshoot' },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-[#FFE5D9] max-h-[80vh] overflow-y-auto">
      <div className="px-4 py-4 space-y-3">
        {/* Vendors Section */}
        <div>
          <button
            onClick={() => setExpandedSection(expandedSection === 'vendors' ? null : 'vendors')}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg font-semibold text-[#2B2D42] bg-[#FFF8F0] hover:bg-[#FFE5D9] transition-colors"
          >
            <span>Vendors</span>
            <svg
              className={`w-5 h-5 transition-transform ${expandedSection === 'vendors' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSection === 'vendors' && (
            <div className="mt-2 space-y-2 pl-4">
              {/* Products */}
              <div className="mb-3">
                <h4 className="text-xs font-bold text-[#E63946] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span>📦</span>
                  Products
                </h4>
                {products.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-[#2B2D42] hover:text-[#E63946] transition-colors flex-1"
                        onClick={onClose}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => setExpandedCategory(expandedCategory === item.name ? null : item.name)}
                          className="p-2"
                        >
                          <svg
                            className={`w-4 h-4 text-[#8D99AE] transition-transform ${expandedCategory === item.name ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.submenu && expandedCategory === item.name && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-3 py-1.5 text-xs text-[#8D99AE] hover:text-[#E63946]"
                            onClick={onClose}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xs font-bold text-[#E63946] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span>🎉</span>
                  Services
                </h4>
                {services.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-[#2B2D42] hover:text-[#E63946] transition-colors flex-1"
                        onClick={onClose}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => setExpandedCategory(expandedCategory === item.name ? null : item.name)}
                          className="p-2"
                        >
                          <svg
                            className={`w-4 h-4 text-[#8D99AE] transition-transform ${expandedCategory === item.name ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.submenu && expandedCategory === item.name && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-3 py-1.5 text-xs text-[#8D99AE] hover:text-[#E63946]"
                            onClick={onClose}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <Link
          href="/blog"
          className="block px-4 py-3 rounded-lg font-semibold text-[#2B2D42] hover:bg-[#FFF8F0] transition-colors"
          onClick={onClose}
        >
          Blog
        </Link>

        <Link
          href="/search"
          className="block px-4 py-3 rounded-lg font-semibold text-[#2B2D42] hover:bg-[#FFF8F0] transition-colors"
          onClick={onClose}
        >
          Search
        </Link>

        <Link
          href="/login"
          className="block px-4 py-3 rounded-lg font-semibold text-[#2B2D42] hover:bg-[#FFF8F0] transition-colors"
          onClick={onClose}
        >
          Login
        </Link>

        <Link
          href="/vendor/register"
          className="block mx-4 px-6 py-3 rounded-full font-semibold text-white text-center transition-all hover:shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #E63946, #F77F00)',
          }}
          onClick={onClose}
        >
          Are you a vendor?
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

