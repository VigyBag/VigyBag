import React, { useState, useEffect } from 'react';
import comb from '../../assets/comb.jpg';

const Similarproducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getProductsPerRow = () => {
    if (screenSize >= 1024) return 6;
    if (screenSize >= 768) return 4;
    if (screenSize >= 640) return 3;
    return 2;
  };

  const handleSeeMore = () => {
    setVisibleProducts((prevCount) => prevCount + getProductsPerRow());
  };

  const handleViewLess = () => {
    setVisibleProducts(getProductsPerRow());
  };

  return (
    <div className="mt-8 px-4 ">
      <h3 className="text-lg font-bold mb-4 text-gray-800 dark:black">Similar Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(visibleProducts)].map((_, index) => (
          <SimilarProductCard key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {visibleProducts < 18 ? (
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-[#15a349ff] text-white rounded-lg mr-4 hover:bg-green-600 focus:outline-none transition duration-300"
          >
            See More
          </button>
        ) : (
          <button
            onClick={handleViewLess}
            className="px-4 py-2 bg-red-500 text-white rounded-lg mr-4 hover:bg-red-600 focus:outline-none transition duration-300"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

const SimilarProductCard = () => (
  <div className="bg-white dark:bg-white p-4 rounded-lg shadow-md transition duration-300">
    <img src={comb} alt="Similar Product" className="w-full h-40 object-cover rounded-lg mb-2" />
    <h4 className="text-md font-semibold mb-1 text-gray-800 dark:black">Bamboo Comb</h4>
    <p className="text-gray-600 dark:black text-sm mb-1">
      ₹175 <span className="line-through text-gray-500 dark:text-gray-400">₹249</span>
    </p>
    <p className="text-green-600 dark:text-green-700 text-sm font-bold">30% OFF</p>
  </div>
);

export default Similarproducts;