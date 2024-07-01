import React, { useState } from 'react';
import { FaHome, FaGift, FaList, FaInfoCircle, FaSearch, FaShoppingCart, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search functionality here
  };

  const handleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-[#ecd5c5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="VigyBag Logo" style={{ height: '7vh' }} />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-large flex items-center" style={{ fontSize: '20px' }}>
                  Home
                </Link>

                <div className="relative group">
                  <button
                    className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center focus:outline-none"
                    onClick={() => handleDropdown('gifts')}
                  >
                    Gifts
                    <FaChevronDown className="ml-1" />
                  </button>
                  <div className={`${openDropdown === 'gifts' ? 'block' : 'hidden'} absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`} style={{ zIndex: '5' }}>
                    <div className="py-1">
                      <Link to="/categories/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                      <Link to="/categories/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                      <Link to="/categories/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                      <Link to="/categories/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                      <Link to="/categories/bodycare" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center focus:outline-none"
                    onClick={() => handleDropdown('categories')}
                  >
                    Categories
                    <FaChevronDown className="ml-1" />
                  </button>
                  <div className={`${openDropdown === 'categories' ? 'block' : 'hidden'} absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`} style={{ zIndex: '5' }}>
                    <div className="py-1">
                      <Link to="/categories/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                      <Link to="/categories/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                      <Link to="/categories/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                      <Link to="/categories/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                      <Link to="/categories/bodycare" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="flex items-center rounded-full border-black border-2 bg-gray-200 px-4 py-2 w-72">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none w-full"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <FaSearch className="text-gray-600" />
                </div>
                <Link to="/cart" className="ml-4 text-black hover:text-gray-600">
                  <FaShoppingCart className="mx-2 cursor-pointer text-3xl" />
                </Link>
                <Link to="/login" className="ml-4 text-black hover:text-gray-600 flex items-center">
                  <FaUserCircle className="mr-2 text-3xl" />
                  <button className="text-lg text-white bg-[#3d784aff] px-5 py-1 rounded-2xl" style={{ fontSize: '19px' }}>Login</button>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none"
              >
                {isOpen ? (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex items-center rounded-full border-black border-2 bg-gray-200 px-4 py-2 w-full">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="text-gray-600" />
          </div>

          <Link to="/" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>

          <div className="relative group">
            <button
              className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center w-full focus:outline-none"
              onClick={() => handleDropdown('gifts')}
            >
              <FaGift className="mr-2" />
              Gifts
              <FaChevronDown className="ml-1" />
            </button>
            <div className={`${openDropdown === 'gifts' ? 'block' : 'hidden'} absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`} style={{ zIndex: '5' }}>
              <div className="py-1">
                <Link to="/categories/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                <Link to="/categories/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                <Link to="/categories/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                <Link to="/categories/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                <Link to="/categories/bodycare" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center w-full focus:outline-none"
              onClick={() => handleDropdown('categories')}
            >
              <FaList className="mr-2" />
              Categories
              <FaChevronDown className="ml-1" />
            </button>
            <div className={`${openDropdown === 'categories' ? 'block' : 'hidden'} absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`} style={{ zIndex: '5' }}>
              <div className="py-1">
                <Link to="/categories/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
                <Link to="/categories/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
                <Link to="/categories/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
                <Link to="/categories/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
                <Link to="/categories/bodycare" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
              </div>
            </div>
          </div>

          <Link to="/about" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaInfoCircle className="mr-2" />
            About Us
          </Link>

          <Link to="/cart" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>

          <Link to="/login" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaUserCircle className="mr-2" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
