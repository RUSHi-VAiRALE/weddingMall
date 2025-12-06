'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const VendorDropdown = ({ isOpen, onClose }) => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const products = [
        {
            name: 'Wedding Wear',
            icon: '👗',
            href: '/vendors/wedding-wear',
        },
        {
            name: 'Jewellery',
            icon: '💍',
            href: '/vendors/jewellery',
        },
        {
            name: 'Wedding Invitation',
            icon: '💌',
            href: '/vendors/invitations',
        },
        {
            name: 'Wedding Gifts',
            icon: '🎁',
            href: '/vendors/gifts',
            hasSubmenu: true,
            submenu: [
                { name: 'Furniture', href: '/vendors/gifts/furniture' },
                { name: 'Electrical Appliance', href: '/vendors/gifts/electrical' },
            ],
        },
    ];

    const services = [
        {
            name: 'Wedding Venue',
            icon: '🏛️',
            href: '/vendors/venues',
        },
        {
            name: 'Wedding Photographer',
            icon: '📷',
            href: '/vendors/photographers',
        },
        {
            name: 'Wedding Caterers',
            icon: '🍽️',
            href: '/vendors/caterers',
        },
        {
            name: 'Decorators',
            icon: '🎨',
            href: '/vendors/decorators',
        },
        {
            name: 'Makeup Artist',
            icon: '💄',
            href: '/vendors/makeup-artists',
        },
        {
            name: 'Mehendi Artist',
            icon: '🤚',
            href: '/vendors/mehendi-artists',
        },
        {
            name: 'Event Planner',
            icon: '📋',
            href: '/vendors/planners',
        },
        {
            name: 'DJ / Sound / Audio',
            icon: '🎵',
            href: '/vendors/djs',
        },
        {
            name: 'Wedding Entertainments',
            icon: '🎭',
            href: '/vendors/entertainment',
            hasSubmenu: true,
            submenu: [
                { name: 'Band', href: '/vendors/entertainment/band' },
                { name: 'Bhangra', href: '/vendors/entertainment/bhangra' },
                { name: 'Singers', href: '/vendors/entertainment/singers' },
                { name: 'Dancers', href: '/vendors/entertainment/dancers' },
                { name: 'Celebrities', href: '/vendors/entertainment/celebrities' },
            ],
        },
        {
            name: 'Dance Choreographer',
            icon: '💃',
            href: '/vendors/choreographers',
        },
        {
            name: 'Anchor / Wedding Host',
            icon: '🎤',
            href: '/vendors/anchor',
        },
        {
            name: 'Wedding Transport',
            icon: '🚗',
            href: '/vendors/transport',
        },
        {
            name: 'Pandit',
            icon: '🕉️',
            href: '/vendors/pandit',
        },
        {
            name: 'Halwai',
            icon: '🍬',
            href: '/vendors/halwai',
        },
        {
            name: 'Honeymoon Package',
            icon: '✈️',
            href: '/vendors/honeymoon',
        },
        {
            name: 'Pre-Wedding Photoshoot',
            icon: '📸',
            href: '/vendors/pre-wedding-photoshoot',
        },
    ];

    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[750px] bg-white rounded-xl shadow-2xl overflow-hidden border border-[#FFE5D9]">
            <div className="grid grid-cols-2 gap-6 p-6">
                {/* Products Section */}
                <div>
                    <div className="mb-4 pb-2 border-b border-[#FFE5D9]">
                        <h3 className="text-sm font-bold text-[#E63946] uppercase tracking-wide flex items-center gap-2">
                            <span>📦</span>
                            Products
                        </h3>
                    </div>
                    <div className="space-y-1">
                        {products.map((item, index) => (
                            <div key={index} onMouseLeave={() => item.hasSubmenu && setExpandedCategory(null)} onMouseEnter={() => item.hasSubmenu && setExpandedCategory(item.name)}>
                                <Link
                                    href='/vendors/makeup-artists'
                                    className="flex items-center justify-between gap-x-3 px-4 py-2.5 rounded-lg transition-all text-[#2B2D42] hover:bg-[#FFF8F0] text-[14px] group"

                                >
                                    <div className="flex items-center gap-x-3">
                                        <span className="text-lg w-6">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    {item.hasSubmenu && (
                                        <svg
                                            className="w-4 h-4 text-[#8D99AE] group-hover:text-[#E63946]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    )}
                                </Link>
                                {item.hasSubmenu && expandedCategory === item.name && (
                                    <div className="ml-9 mt-1 space-y-1 pl-4 border-l-2 border-[#FFE5D9]">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href='/vendors/makeup-artists'
                                                className="block px-3 py-1.5 text-[13px] text-[#2B2D42] hover:text-[#E63946] transition-colors"
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

                {/* Services Section */}
                <div>
                    <div className="mb-4 pb-2 border-b border-[#FFE5D9]">
                        <h3 className="text-sm font-bold text-[#E63946] uppercase tracking-wide flex items-center gap-2">
                            <span>🎉</span>
                            Services
                        </h3>
                    </div>
                    <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {services.map((item, index) => (
                            <div key={index} onMouseLeave={() => item.hasSubmenu && setExpandedCategory(null)} onMouseEnter={() => item.hasSubmenu && setExpandedCategory(item.name)}>
                                <Link
                                    href='/vendors/makeup-artists'
                                    className="flex items-center justify-between gap-x-3 px-4 py-2.5 rounded-lg transition-all text-[#2B2D42] hover:bg-[#FFF8F0] text-[14px] group"

                                >
                                    <div className="flex items-center gap-x-3">
                                        <span className="text-lg w-6">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    {item.hasSubmenu && (
                                        <svg
                                            className="w-4 h-4 text-[#8D99AE] group-hover:text-[#E63946]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    )}
                                </Link>
                                {item.hasSubmenu && expandedCategory === item.name && (
                                    <div className="ml-9 mt-1 space-y-1 pl-4 border-l-2 border-[#FFE5D9]">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href='/vendors/makeup-artists'
                                                className="block px-3 py-1.5 text-[13px] text-[#2B2D42] hover:text-[#E63946] transition-colors"
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
            </div>

            {/* Vendor Registration CTA */}
            <div
                className="px-6 py-4 flex items-center justify-between border-t border-[#FFE5D9]"
                style={{ background: 'linear-gradient(to right, #FFF8F0, #FFE5D9)' }}
            >
                <span className="font-medium text-[15px] text-[#2B2D42]">I am a vendor</span>
                <Link
                    href="/vendor/register"
                    className="px-6 py-2 rounded-full text-[14px] font-semibold transition-all hover:shadow-lg text-white"
                    style={{
                        background: 'linear-gradient(135deg, #E63946, #F77F00)',
                    }}
                >
                    Register now
                </Link>
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #FFF8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E63946;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D62828;
        }
      `}</style>
        </div>
    );
};

export default VendorDropdown;

