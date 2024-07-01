import React, { useState } from 'react';
import granola from '../../assets/granola.jpg';
import cuttery from '../../assets/cuttery-set.jpg';
import basket from '../../assets/basket.png';
import shawls from '../../assets/shawals.jpg';
import notebooks from '../../assets/eco-friendly-notebooks.jpeg';
import toothbrushes from '../../assets/Bamboo-Toothbrush-Set.jpeg';
import towels from '../../assets/Organic Cotton Towels.jpg';
import shoppingBags from '../../assets/Reusable-Shopping-Bags.jpeg';
import phoneCase from '../../assets/Biodegradable-Phone-Case.jpeg';
import journals from '../../assets/Recycled-Paper-Journals.webp';
import waterBottle from '../../assets/Glass-Water-Bottle.webp';
import teaSet from '../../assets/Organic-Tea-Set.webp';
import { FaSearch } from 'react-icons/fa';
import carryBag from '../../assets/vigybag-carry-bag.png';
import profile from '../../assets/profile.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import Aside from '../../components/Aside/Aside';

const Dashboard = () => {
    
  const initialProducts = [
    {
      image: granola,
      title: "Snacker's Special Granola",
      price: 350,
      rating: 5,
    },
    {
      image: cuttery,
      title: 'Wooden Cutlery Set of 7',
      price: 1200,
      rating: 4,
    },
    {
      image: basket,
      title: 'Jute Cotton Basket',
      price: 399,
      rating: 4,
    },
    {
      image: shawls,
      title: 'Premium Woolen Shawls',
      price: 5000,
      rating: 5,
    },
  ];

  const moreProducts = [
    {
      image: notebooks,
      title: 'Eco-Friendly Notebook',
      price: 250,
      rating: 4,
    },
    {
      image: toothbrushes,
      title: 'Bamboo Toothbrush Set',
      price: 150,
      rating: 5,
    },
    {
      image: towels,
      title: 'Organic Cotton Towels',
      price: 600,
      rating: 4,
    },
    {
      image: shoppingBags,
      title: 'Reusable Shopping Bags',
      price: 300,
      rating: 5,
    },
    {
      image: phoneCase,
      title: 'Biodegradable Phone Case',
      price: 450,
      rating: 5,
    },
    {
      image: journals,
      title: 'Recycled Paper Journals',
      price: 200,
      rating: 4,
    },
    {
      image: waterBottle,
      title: 'Glass Water Bottle',
      price: 350,
      rating: 5,
    },
    {
      image: teaSet,
      title: 'Organic Tea Set',
      price: 750,
      rating: 5,
    },
  ];

  const [products] = useState([...initialProducts, ...moreProducts]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [clicked, setClicked] = useState(0);
  const [showViewLess, setShowViewLess] = useState(false);

  const handleSeeMore = () => {
    if (clicked === 0) {
      setVisibleProducts(visibleProducts + 4);
    } else if (clicked === 1) {
      setVisibleProducts(products.length);
      setShowViewLess(true);
    }
    setClicked(clicked + 1);
  };

  const handleViewLess = () => {
    setVisibleProducts(4);
    setClicked(0);
    setShowViewLess(false);
  };

  return (
    
    <div className="flex min-h-screen bg-[#fff1e6] mt-1">
     
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            
            
            <div className="h-10 bg-[#686469ff]  flex items-center justify-center px-3 rounded-xl">
            <img src={profile} alt="" style={{ width: '30px', height: '30px',borderRadius:'50%' ,border: '1px solid black',margin:'5px' }} />
              <span className="text-white">Vivek Prajapati</span>
            </div>
          </div>
        </header>

        {/* Welcome Banner */}
        <div className="bg-[#686469ff] p-6 rounded-lg shadow-lg text-white mb-6"style={{ width: '100%' ,display: 'flex',
          alignItems: 'center',flexDirection: 'row'}}>
            <div style={{ width: '100%' ,display: 'flex',flexDirection: 'column'}}>
            <h1 className="text-3xl ml-3 ">Welcome Back, <span style={{ color: '#faf48cff' }}>Vivek Prajapati</span></h1>
          <h1 className=" text-xl ml-3 mt-2">What will u learn today?</h1>
            </div>
         
          <div className="flex mt-3 mr-20 ">
            <img src={carryBag} alt="" style={{ width: '13vw', height: '19vh' }} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[#d1cdcdff] focus:outline-none focus:ring-2 focus:ring-[#6AB04C] text-[#616161ff]"
          />
          <FaSearch className="absolute right-10 top-2.5 text-[#616161ff]" />
        </div>

        {/* New Today Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">New Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            {clicked < 2 && (
              <button 
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                onClick={handleSeeMore}
              >
                See More
              </button>
            )}
            {showViewLess && (
              <button 
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 ml-4"
                onClick={handleViewLess}
              >
                View Less
              </button>
            )}
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
