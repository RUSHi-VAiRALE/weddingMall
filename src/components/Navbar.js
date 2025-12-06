'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/weddingLogo.png';
import VendorDropdown from './navbar/VendorDropdown';
import MobileMenu from './navbar/MobileMenu';

export default function Navbar() {
    const [isVendorsOpen, setIsVendorsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="w-full flex justify-center">
                <div className="flex justify-between items-center h-16 w-full lg:w-7xl px-8 lg:px-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src={logo}
                            alt="WeddingMall Logo"
                            width={44}
                            height={44}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="font-bold text-xl text-[#E63946]">
                                WeddingMall.Online
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
                                className="flex items-center space-x-1 h-16 font-bold text-[15px] transition-colors text-[#2B2D42] hover:text-[#E63946]"
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

                            <VendorDropdown isOpen={isVendorsOpen} onClose={() => setIsVendorsOpen(false)} />
                        </div>

                        <Link
                            href="/blog"
                            className="font-bold text-[15px] transition-colors hover:text-[#E63946] text-[#2B2D42]"
                        >
                            Blog
                        </Link>

                        <button className="flex items-center space-x-1.5 font-bold text-[15px] transition-colors hover:text-[#E63946] text-[#2B2D42]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Search</span>
                        </button>

                        <Link
                            href="/login"
                            className="font-bold text-[15px] transition-colors hover:text-[#E63946] text-[#2B2D42]"
                        >
                            Login
                        </Link>

                        <Link
                            href="/vendor/register"
                            className="px-5 py-2 rounded-full text-[14px] font-bold hover:text-[#E63946] text-[#2B2D42] transition-all hover:shadow-md"
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
                <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            </div>
        </nav>
    );
}

