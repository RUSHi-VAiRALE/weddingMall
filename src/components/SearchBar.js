'use client';

import { useState } from 'react';

const vendorOptions = [
    'Photographers',
    'Makeup Artists',
    'Venues',
    'Caterers',
    'Decorators',
    'Mehendi Artists',
    'Planners',
    'Wedding Wear',
    'Jewellery',
    'DJs',
    'Invitations',
    'Entertainment',
    'Choreographers',
    'Gifts',
    'Car',
    'Pandit',
    'Honeymoon',
];

const cityOptions = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Pune',
    'Kolkata',
    'Hyderabad',
    'Chennai',
    'Ahmedabad',
];

export default function SearchBar() {
    const [selectedVendor, setSelectedVendor] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isVendorOpen, setIsVendorOpen] = useState(false);
    const [isCityOpen, setIsCityOpen] = useState(false);


    const vendors = [
        { value: '', label: 'Search For Vendors' },
        { value: 'photographers', label: 'Photographers' },
        { value: 'makeup', label: 'Makeup Artists' },
        { value: 'caterers', label: 'Caterers' },
        { value: 'venues', label: 'Venues' },
        { value: 'decorators', label: 'Decorators' },
        { value: 'mehendi', label: 'Mehendi Artists' },
    ];

    const cities = [
        { value: '', label: 'Wedding city' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'pune', label: 'Pune' },
        { value: 'kolkata', label: 'Kolkata' },
        { value: 'hyderabad', label: 'Hyderabad' },
    ];

    const handleSearch = () => {
        if (!selectedVendor || !selectedCity) {
            alert('Please select both vendor type and city');
            return;
        }
        console.log('Searching for:', selectedVendor, 'in', selectedCity);
        // Add your search logic here
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row gap-4 md:gap-6 items-center max-w-5xl mx-auto py-10" style={{ padding: '40px', marginLeft: '45px' }}>
            {/* Vendor Select */}
            <div className="relative flex-1 w-full">
                <select
                    value={selectedVendor}
                    onChange={(e) => setSelectedVendor(e.target.value)}
                    className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-lg bg-white font-medium cursor-pointer appearance-none focus:outline-none transition-all"
                    style={{
                        color: '#2B2D42',
                        borderColor: selectedVendor ? '#e5e5e5' : '#e5e5e5',
                        padding: '10px',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#E63946'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                >
                    {vendors.map((vendor) => (
                        <option key={vendor.value} value={vendor.value}>
                            {vendor.label}
                        </option>
                    ))}
                </select>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none text-xs">
                    ▼
                </span>
            </div>

            {/* City Select */}
            <div className="relative flex-1 w-full">
                <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-lg bg-white font-medium cursor-pointer appearance-none focus:outline-none transition-all"
                    style={{
                        color: selectedCity === '' ? '#9CA3AF' : '#2B2D42',
                        padding: '10px',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#E63946'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                >
                    {cities.map((city) => (
                        <option key={city.value} value={city.value}>
                            {city.label}
                        </option>
                    ))}
                </select>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none text-xs">
                    ▼
                </span>
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="px-8 py-4 text-white rounded-lg text-lg font-semibold whitespace-nowrap w-full md:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl"
                style={{
                    backgroundImage: 'linear-gradient(135deg, #E63946, #F77F00)',
                    padding: '10px',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Find vendors
                <span className="text-xl">→</span>
            </button>
        </div>
    );
};