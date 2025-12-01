'use client';

import React, { useState } from 'react';

const HelpWithDetails = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    city: '',
    category: '',
  });

  const topVendors = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400',
      title: 'Makeup Artists',
      count: 25586,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400',
      title: 'Photographers',
      count: 23238,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Planners',
      count: 3541,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Venues',
      count: 50617,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e4?w=400',
      title: 'Decorators',
      count: 3474,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400',
      title: 'Mehendi Artists',
      count: 3233,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleEnquire = () => {
    console.log('Enquire now clicked');
    // Handle enquiry here
  };

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, rgba(253, 164, 175, 0.15), #ffffff)',paddingTop: '80px', paddingBottom: '80px' }}>
      {/* Decorative floral elements */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#E63946" strokeWidth="1" opacity="0.3" />
          <circle cx="50" cy="50" r="30" stroke="#E63946" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#E63946" strokeWidth="1" opacity="0.3" />
          <circle cx="50" cy="50" r="30" stroke="#E63946" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Help us with your details
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our executives will call you to understand your requirements to find suitable vendors
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              required
            />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 appearance-none cursor-pointer bg-white"
              required
            >
              <option value="">Select city</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="pune">Pune</option>
              <option value="ahmedabad">Ahmedabad</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 appearance-none cursor-pointer bg-white"
              required
            >
              <option value="">Select vendor category</option>
              <option value="makeup">Makeup Artists</option>
              <option value="photographers">Photographers</option>
              <option value="planners">Planners</option>
              <option value="venues">Venues</option>
              <option value="decorators">Decorators</option>
              <option value="mehendi">Mehendi Artists</option>
            </select>
            <button
              type="submit"
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #E63946, #F77F00)',
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Top Vendors Section */}
        <div className="bg-white rounded-3xl border-2 border-pink-100/50 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Find top vendors for hassle-free wedding planning
          </h3>

          {/* Vendor Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {topVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden h-48 md:h-56 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Image */}
                <img
                  src={vendor.image}
                  alt={vendor.title}
                  className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 opacity-80 group-hover:opacity-85 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, #000000, transparent)' }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">
                    {vendor.title}
                  </h4>
                  <p className="text-white text-xs md:text-sm opacity-90">
                    {vendor.count.toLocaleString()}
                  </p>
                </div>

                {/* Checkmark Icon */}
                <div className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:bg-white transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.667 5L7.5 14.167L3.333 10"
                      stroke="#E63946"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text and Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-700 text-base md:text-lg">
              Send your enquiry to know about the vendors. Our executive will call you shortly.
            </p>
            <button
              onClick={handleEnquire}
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center justify-center gap-2 self-end"
              style={{
                background: 'linear-gradient(135deg, #E63946, #F77F00)',
              }}
            >
              Enquire now
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpWithDetails;
