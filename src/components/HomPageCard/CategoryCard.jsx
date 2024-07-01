import React from 'react';

const CategoryCard = ({ image, name }) => {
  return (
    <div
      className="relative w-full aspect-square max-w-[240px] mx-auto flex items-center justify-center overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity hover:bg-opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 px-2 py-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center truncate text-white">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;