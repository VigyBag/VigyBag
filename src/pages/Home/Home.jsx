import React from 'react';
import CategoryCard from '../../components/HomPageCard/CategoryCard';
import LatestInMarketCard from '../../components/HomPageCard/LatestInMarketCard';
import background from '../../assets/background.png';
import app from '../../assets/app.png';
import googlePlay from '../../assets/google-play.png';
import mobile from '../../assets/mobile.png';

// Import category images
import customisedGiftsImg from '../../assets/Customized-Gifts.png';
import HealthSupplementsImg from '../../assets/Health-supplements.png';
import PrintingAndStationary from '../../assets/Printing-Stationary.png';
import BodyCare from '../../assets/Body-Care.png';
import FurnitureAndDecor from '../../assets/Furniture-Decor.jpeg';
import BeautyAndWellness from '../../assets/Beauty-Wellness.png';
import FoodAndBeverages from '../../assets/Food-Beverages.png';
import fashionAndAccessories from '../../assets/Fashion-Accessories.png';

// Import LatestProducts in markets image
import HandmadeSoapsImg from '../../assets/Handmade-Soaps.png';
import ArtSuppliesImg from '../../assets/Art-Supplies.png';
import CeramicDinnerwareImg from '../../assets/Ceramic-Dinnerware.png';
import BambooProductsImg from '../../assets/Bamboo-Products.png';
import StorageBasketsImg from '../../assets/Storage-Baskets.png';

const popularCategories = [
  { name: 'Fashion & Accessories', image: fashionAndAccessories },
  { name: 'Printing & Stationery', image: PrintingAndStationary },
  { name: 'Food & Beverages', image: FoodAndBeverages },
  { name: 'Beauty & Wellness', image: BeautyAndWellness },
  { name: 'Furniture & Decor', image: FurnitureAndDecor },
  { name: 'Body Care', image: BodyCare },
  { name: 'Health Supplements', image: HealthSupplementsImg },
  { name: 'Customized Gifts', image: customisedGiftsImg },
];

const latestProducts = [
  { img: HandmadeSoapsImg, name: 'Handmade Soaps', description: 'A vibrant collection of artisan soaps that are 100% natural and biodegradable.', discount: '15% Off' },
  { img: ArtSuppliesImg, name: 'Art Supplies', description: 'Natural and cruelty-free selection of art supplies.', discount: 'Upto 50% Off' },
  { img: CeramicDinnerwareImg, name: 'Ceramic Dinnerware', description: 'Long-lasting and durable eco-friendly dinnerware.', discount: 'Buy 1 Get 1' },
  { img: BambooProductsImg, name: 'Bamboo Products', description: 'Natural, non-toxic, biodegradable household and bath products.', discount: '20% Off' },
  { img: StorageBasketsImg, name: 'Storage Baskets', description: 'Natural basket collection featuring hand-woven sustainable materials.', discount: '20% Off' },
  { img: HandmadeSoapsImg, name: 'Organic Soaps', description: 'Handcrafted organic soaps made with natural ingredients.', discount: '10% Off' },
  { img: FoodAndBeverages, name: 'Organic Tea', description: 'A selection of premium organic teas from sustainable sources.', discount: '25% Off' },
  { img: BeautyAndWellness, name: 'Natural Cosmetics', description: 'Eco-friendly makeup and skincare products made from natural ingredients.', discount: 'Buy 2 Get 1' },

];

const Home = () => {
  return (
    <div className="bg-[#fff0e3ff]">
      <main className="mt-1">
        {/* Hero Section */}
        <section className="bg-[#FFF5EA] py-12 md:py-20 lg:py-24 flex items-center" style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '87vh',
          height: 'auto',
         
        }}>  
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-0 md:pr-8 text-center md:text-left">
              <h1 className="text-[33px] sm:text-4xl md:text-[53px] font-bold mb-4">
                Welcome to <span className="text-green-700">VigyBag!</span>
              </h1>
              <h2 className="text-[25px] sm:text-2xl md:text-[33px] font-semibold mb-6"style={{lineHeight:'1.5'}}>
                Your Eco-Friendly Shopping Heaven
              </h2>
              <p className="mb-6 text-gray-700 text-[20px] sm:text-[23px]"style={{lineHeight:'1.5'}}>
                At VigyBag, we curate the finest earth-friendly essentials to help you reduce your environmental footprint without compromising on quality or style. Shop smart, live green, and embrace a sustainable future with VigyBag.
              </p>
              <button className="bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-green-800 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
       
<section className="py-8 sm:py-12 md:py-16 bg-[#fff0e3ff]">
  <div className="container mx-auto px-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Popular Categories</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {popularCategories.map((category, index) => (
        <CategoryCard key={index} name={category.name} image={category.image} />
      ))}
    </div>
  </div>
</section>

        {/* Latest in the Market */}
        <section className="bg-[#fff0e3ff] py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="ttext-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Latest in the Market</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {latestProducts.map((product, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full max-w-[220px]">
                    <LatestInMarketCard product={product} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 md:mt-8">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300">See More</button>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-8 sm:py-12 md:py-16 relative mb-[-1px]" 
        style={{ backgroundImage: `url(${app})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-[#393d3cff] rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-lg" style={{ minHeight: '30vh', height: 'auto' }}>
              <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                <div className="text-center md:text-left mb-4 md:mb-0 md:mr-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white">Download the App NOW</h2>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.vigybag" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#1a73e8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition duration-300"
                  >
                    <img src={googlePlay} alt="Google Play" className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                    <span>
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-base sm:text-lg md:text-xl font-semibold">Google Play</div>
                    </span>
                  </a>
                </div>
                <img src={mobile} alt="VigyBag App" className="w-32 sm:w-40 md:w-60 mt-4 md:mt-0" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;