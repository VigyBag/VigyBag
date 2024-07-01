import React from 'react';
import { FaStar } from 'react-icons/fa';
import {FaShoppingCart} from'react-icons/fa';

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="mt-2 ">
        <h3 className="text-lg font-semibold text-[#171616]">{title}</h3>
        
        <div className="flex items-center mt-3"style={{display:'flex',
        alignItems:'center',flexDirection:'row'}}>
        <p className="text-[#1b1a1a]">₹{price}</p>
          {[...Array(rating)].map((_, i) => (
            <FaStar style={{position:'relative',left:'8vw'}} key={i} className="text-yellow-500" />
          ))}
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600" style={{display:'flex',
        justifyContent:'center',alignItems:'center',gap:'10px'}}>
          Add to Cart
          <FaShoppingCart className="ml-2 text-[black]" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
