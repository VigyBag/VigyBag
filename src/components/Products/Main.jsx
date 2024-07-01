import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const SharedClasses = {
  cardContainer: 'bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
  button: 'bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700 transition-colors duration-300',
  headerImage: 'h-24 lg:h-32 object-cover'
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <AiFillStar 
        key={i} 
        className={i < rating ? 'text-yellow-500' : 'text-gray-300'} 
      />
    );
  }
  return stars;
};

const Main = ({ 
  products, 
  applyFilters, 
  sortProducts, 
  sortBy, 
  setSortBy 
}) => (
  <main className="flex-1 p-6 relative" style={{ left: '-10vw' }}>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-green-900 dark:text-green-100">Products</h2>
      <select
        className="bg-white dark:bg-zinc-800 p-2 rounded-md shadow-md"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{position:'relative',left:'16vw'}}
      >
        <option value="high-low">Price: High to Low</option>
        <option value="low-high">Price: Low to High</option>
      </select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[17vw] gap-y-6">
      {sortProducts(applyFilters()).map(product => (
        <div key={product.id} className={`${SharedClasses.cardContainer}`} style={{ width: '17vw' }}>
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-md" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">{product.title}</h3>
            <p className="text-green-800 dark:text-green-200">${product.price}</p>
            <div className="flex">
              {renderStars(Math.round(product.rating.rate))}
            </div>
            <button className={SharedClasses.button}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Main;
