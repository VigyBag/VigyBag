import React from 'react';

const Nav = () => (
  <nav className="bg-[#d8e0afff] mt-[-1vh]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <span className="text-black font-semibold text-xl">Related products --&rarr; </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="text-black hover:bg-[#6ba340ff] hover:text-white px-3 py-2 rounded-md text-lg font-medium">Furniture</a>
            <a href="#" className="text-black hover:bg-[#6ba340ff] hover:text-white px-3 py-2 rounded-md text-lg font-medium">Kitchen & Dining</a>
            <a href="#" className="text-black hover:bg-[#6ba340ff] hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home Decor</a>
            <a href="#" className="text-black hover:bg-[#6ba340ff] hover:text-white px-3 py-2 rounded-md text-lg font-medium">Garden and Outdoor</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
