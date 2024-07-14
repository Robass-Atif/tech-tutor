import React from 'react';
import imageC from '..../public/guru.png'; // Correct path to your hero image


const HeroSection = () => {
  return (

    <main className="container mx-auto px-4 py-2 flex flex-col lg:flex-row items-center  xl:mt-0 sm:mt-12 ">
      <div className="lg:w-1/2 mb-10 lg:mb-0 pr-10 mt-8 xl:mt-0 md:mt-0 sm:mt-0 ">
        <h1 className="text-4xl font-bold mb-4">A small business is only as good as its tools.</h1>
        <p className="text-lg text-gray-700 mb-6">
          We’re different. Growlight is the only SaaS business platform that lets you run your business on one platform.
          We are a group of teachers and students who facilitate understanding
          the true purpose of life, developing a good moral and professional
          character, mastering leadership and collaboration, increasing

        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Learn more</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300">See pricing</button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={"/hero.png"} alt="Woman with laptop" className="w-full rounded-lg p-5 " />

      </div>
    </main>

  );
};

export default HeroSection;
