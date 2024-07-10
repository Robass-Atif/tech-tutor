import React from 'react';

const HeroSection = () => {
  return (
    <main className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">A small business is only as good as its tools.</h1>
        <p className="text-lg text-gray-700 mb-6">We’re different. Growlight is the only SaaS business platform that lets you run your business on one platform.</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Learn more</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300">See pricing</button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src="path/to/hero-image.png" alt="Woman with laptop" className="w-full rounded-lg" /> {/* Replace with the path to your hero image */}
      </div>
    </main>
  );
};

export default HeroSection;
