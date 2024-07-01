import React from 'react';
import avatar from '../../assets/avatar.png';
import like from '../../assets/like.png';
import comb from '../../assets/comb.jpg';
import Similarproducts from '../Products/Similarproducts';

const sharedClasses = {
  textGray: 'text-zinc-600 dark:white',
  roundedFull: 'rounded-full',
  roundedLg: 'rounded-lg',
  mb4: 'mb-4',
  flexSpaceX2: 'flex space-x-2',
  buttonBase: 'px-4 py-2 border rounded-lg dark:white',
  buttonGreen: 'px-4 py-2 bg-green-600 text-white rounded-lg',
};

const ProductImage = () => (
  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
    <img src={comb} alt="Product Image" className={`${sharedClasses.roundedLg} ${sharedClasses.mb4} w-full h-auto max-h-[50vh] object-contain`} />
    <div className={`${sharedClasses.flexSpaceX2} ${sharedClasses.mb4} justify-center`}>
      {[1, 2, 3].map((i) => (
        <img key={i} src={comb} alt={`Thumbnail ${i}`} className="w-1/4 h-auto rounded-lg object-cover" />
      ))}
    </div>
  </div>
);

const ProductDetails = () => (
  <div className="w-full lg:w-1/2 lg:pl-6">
    <h2 className="text-2xl font-bold mb-2  sm:text-2xl md:text-3xl  md:mb-8 text-black">Bamboo India</h2>
    <p className={`${sharedClasses.textGray} ${sharedClasses.mb4}`}>Eco-friendly Handmade Bamboo Comb | Reduce Breakage and Hairfall</p>
    <p className="text-xl font-semibold mb-2">₹175 <span className="line-through text-zinc-500">₹249</span> (30% OFF)</p>
    <p className="text-zinc-500 dark:white mb-4">Inclusive of taxes</p>
    <ColorOptions />
    <SizeOptions />
    <DeliveryOptions />
    <ActionButtons />
    <ProductInfo />
    <ProductRatings />
    <CustomerFeedback />
  </div>
);

const ColorOptions = () => (
  <div className={sharedClasses.mb4}>
    <label className="block text-zinc-700 dark:white mb-2">More Colors</label>
    <div className={sharedClasses.flexSpaceX2}>
      {['zinc-600', 'zinc-800', 'black'].map((color, index) => (
        <div key={index} className={`w-8 h-8 bg-${color} rounded-full`}></div>
      ))}
    </div>
  </div>
);

const SizeOptions = () => (
  <div className={sharedClasses.mb4}>
    <label className="block text-zinc-700 dark:white mb-2">Select Size</label>
    <div className={sharedClasses.flexSpaceX2}>
      {['S', 'M', 'L'].map((size) => (
        <button key={size} className={sharedClasses.buttonBase} style={{
          border: '1px solid black',
        }}>{size} </button>
      ))}
    </div>
  </div>
);

const DeliveryOptions = () => (
  <div className={sharedClasses.mb4}>
    <label className="block text-zinc-700 dark:white mb-2">Delivery Options</label>
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
      <input type="text" placeholder="Enter Pincode" className="px-4 py-2 border rounded-lg flex-grow" />
      <button className={`${sharedClasses.buttonGreen} whitespace-nowrap`}>Check</button>
    </div>
  </div>
);

const ActionButtons = () => (
  <div className={`${sharedClasses.mb4} space-y-2`}>
    <button className={`${sharedClasses.buttonGreen} w-full`}>Add to Cart</button>
    <button className="w-full px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg">Wishlist</button>
  </div>
);

const ProductInfo = () => (
  <div className={sharedClasses.mb4}>
    <h3 className="text-lg font-semibold mb-2">Product Details</h3>
    {['Pattern: Solid', 'Sleeve Length: Short Sleeves', 'Neck: Round Neck', 'Sustainable: Regular', 'Wash Care: Machine Wash', 'Country of Origin: India'].map((detail, index) => (
      <p key={index} className={`${sharedClasses.textGray} mb-1`}>{detail}</p>
    ))}
  </div>
);

const ProductRatings = () => (
  <div className={sharedClasses.mb4}>
    <h3 className="text-lg font-semibold mb-2">Product Ratings & Reviews</h3>
    <div className="flex items-center mb-2">
      <span className="text-2xl font-bold">3.7</span>
      <span className="text-yellow-500 ml-2">★</span>
    </div>
    <p className={`${sharedClasses.textGray} mb-2`}>204 Ratings, 36 Reviews</p>
    {[
      { label: 'Excellent', width: 'w-2/3', color: 'bg-green-600' },
      { label: 'Very Good', width: 'w-1/2', color: 'bg-green-500' },
      { label: 'Good', width: 'w-1/3', color: 'bg-green-400' },
      { label: 'Average', width: 'w-1/4', color: 'bg-green-300' },
    ].map((rating, index) => (
      <RatingBar key={index} {...rating} />
    ))}
  </div>
);

const RatingBar = ({ label, width, color }) => (
  <div className="flex items-center mb-1">
    <span className={`flex-1 ${sharedClasses.textGray}`}>{label}</span>
    <div className={`${width} ${color} h-2 rounded-lg`}></div>
  </div>
);

const CustomerFeedback = () => (
  <div className={sharedClasses.mb4}>
    <h3 className="text-lg font-semibold mb-2">Customer Feedback</h3>
    <div className="p-4 bg-[#798280ff] rounded-lg text-white">
      <div className="flex items-center mb-2">
        <img src={avatar} alt="User Avatar" className={`w-12 h-12 ${sharedClasses.roundedFull} mr-2`} />
        <div>
          <p className="font-semibold">User Name</p>
          <p className="text-sm text-white">Posted on May 2023</p>
        </div>
      </div>
      <p className="mb-2 text-white">This is a good comb. It's very comfortable, and the size is just right... but great. Nice buy!</p>
      <div className="flex items-center">
        <img src={like} alt="Product Thumbnail" className={`w-12 h-12 ${sharedClasses.roundedLg} mr-2`} />
        <span className="text-white">Likes: 21</span>
      </div>
    </div>
  </div>
);

const ProductPage = () => (
  <div className="bg-[#fff0e3ff] min-h-screen">
    <div className="max-w-7xl mx-auto bg-[#fff0e3ff] rounded-lg  p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row">
        <ProductImage />
        <ProductDetails />
      </div>
      <Similarproducts />
    </div>
  </div>
);

export default ProductPage;