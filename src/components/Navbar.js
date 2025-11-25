'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const vendorCategories = [
    { name: 'Makeup Artists', icon: '💄', href: '/vendors/makeup-artists' },
    { name: 'Photographers', icon: '📷', href: '/vendors/photographers' },
    { name: 'Planners', icon: '📋', href: '/vendors/planners' },
    { name: 'Venues', icon: '🏛️', href: '/vendors/venues' },
    { name: 'Decorators', icon: '🎨', href: '/vendors/decorators' },
    { name: 'Mehendi Artists', icon: '🤚', href: '/vendors/mehendi-artists' },
    { name: 'Caterers', icon: '🍽️', href: '/vendors/caterers' },
    { name: 'Invitations', icon: '💌', href: '/vendors/invitations' },
    { name: 'Jewellery', icon: '💍', href: '/vendors/jewellery' },
    { name: 'DJs', icon: '🎵', href: '/vendors/djs' },
    { name: 'Wedding Wear', icon: '👗', href: '/vendors/wedding-wear' },
    { name: 'Car', icon: '🚗', href: '/vendors/car' },
    { name: 'Entertainment', icon: '🎭', href: '/vendors/entertainment' },
    { name: 'Choreographers', icon: '💃', href: '/vendors/choreographers' },
    { name: 'Gifts', icon: '🎁', href: '/vendors/gifts' },
    { name: 'Pandit', icon: '🕉️', href: '/vendors/pandit' },
    { name: 'Honeymoon', icon: '✈️', href: '/vendors/honeymoon' },
];

export default function Navbar() {
    const [isVendorsOpen, setIsVendorsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="w-full flex justify-center">
                <div className="flex justify-between items-center h-16 w-full lg:w-3/4 px-8 lg:px-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E63946 0%, #F77F00 50%, #FCBF49 100%)' }}>
                            <span className="text-white font-bold text-xl">WB</span>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-bold text-xl text-[#E63946]">
                                weddingbazaar
                            </span>
                            <span className="text-[10px] text-[#8D99AE]">
                                from Matrimony.com group
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-20 min-w-[600px] justify-between">
                        {/* Vendors Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsVendorsOpen(true)}
                            onMouseLeave={() => setIsVendorsOpen(false)}
                        >
                            <button
                                className="flex items-center space-x-1 h-16 font-normal text-[15px] transition-colors text-[#2B2D42] hover:text-[#E63946]"
                            >
                                <span>Vendors</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isVendorsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isVendorsOpen && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[650px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-6">
                                        {vendorCategories.map((category, index) => (
                                            <Link
                                                key={index}
                                                href={category.href}
                                                className="flex items-center gap-x-3 px-6 py-3.5 transition-all text-[#2B2D42] hover:bg-[#FFF8F0] text-[15px]"
                                            >
                                                <span className="text-xl w-6">{category.icon}</span>
                                                <span className="font-normal">{category.name}</span>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Vendor Registration CTA */}
                                    <div className="px-6 h-12 pr-16 flex items-center justify-end gap-x-4 border-t border-gray-100">
                                        <span className="font-normal text-[15px] text-[#2B2D42]">
                                            I am a vendor
                                        </span>
                                        <Link
                                            href="/vendor/register"
                                            className="px-5 py-1.5 rounded-full text-[14px] font-medium transition-all hover:shadow-md hover:text-[#E63946] text-[#2B2D42] border border-[#E63946]"
                                        >
                                            Register now
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/blog"
                            className="font-normal text-[15px] transition-colors hover:text-[#E63946] text-[#2B2D42]"
                        >
                            Blog
                        </Link>

                        <button className="flex items-center space-x-1.5 font-normal text-[15px] transition-colors hover:text-[#E63946] text-[#2B2D42]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Search</span>
                        </button>

                        <Link
                            href="/login"
                            className="font-normal text-[15px] transition-colors hover:text-[#E63946] text-[#2B2D42]"
                        >
                            Login
                        </Link>

                        <Link
                            href="/vendor/register"
                            className="px-5 py-2 rounded-full text-[14px] font-medium hover:text-[#E63946] text-[#2B2D42] transition-all hover:shadow-md"
                        >
                            Are you a vendor?
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[#2B2D42]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => setIsVendorsOpen(!isVendorsOpen)}
                                className="flex items-center justify-between px-4 py-2 rounded-lg font-medium text-[#2B2D42] bg-[#FFE5D9]"
                            >
                                <span>Vendors</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isVendorsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isVendorsOpen && (
                                <div className="pl-4 space-y-2">
                                    {vendorCategories.map((category, index) => (
                                        <Link
                                            key={index}
                                            href={category.href}
                                            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#2B2D42]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span>{category.icon}</span>
                                            <span>{category.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            <Link
                                href="/blog"
                                className="px-4 py-2 rounded-lg font-medium text-[#2B2D42]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/search"
                                className="px-4 py-2 rounded-lg font-medium text-[#2B2D42]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Search
                            </Link>

                            <Link
                                href="/login"
                                className="px-4 py-2 rounded-lg font-medium text-[#2B2D42]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>

                            <Link
                                href="/vendor/register"
                                className="mx-4 px-6 py-3 rounded-full font-medium text-white text-center bg-[#E63946]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Are you a vendor?
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

