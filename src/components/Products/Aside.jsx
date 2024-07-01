import React from 'react';

const SharedClasses = {
  cardContainer: 'bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
  button: 'bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700 transition-colors duration-300',
  headerImage: 'h-24 lg:h-32 object-cover'
};

const FILTER_OPTIONS = [
  { id: 'mobambo', label: 'Mobambo' },
  { id: 'nutriglow', label: 'Nutriglow' },
  { id: 'bamboo-india', label: 'Bamboo India' }
];

const PRICE_OPTIONS = [
  { id: 'under-200', label: 'Under 200' },
  { id: 'under-500', label: 'Under 500' },
  { id: 'under-750', label: 'Under 750' }
];

const RATINGS_OPTIONS = [
  { id: 5, label: '★★★★★' },
  { id: 3, label: '★★★' },
  { id: 2, label: '★★' }
];

const DISCOUNT_OPTIONS = [
  { id: 'ten-percent', label: '10% and above' },
  { id: 'twenty-percent', label: '20% and above' },
  { id: 'forty-percent', label: '40% and above' }
];

const Aside = ({ 
  selectedBrands, 
  setSelectedBrands, 
  selectedPrices, 
  setSelectedPrices, 
  selectedRatings, 
  setSelectedRatings, 
  selectedDiscounts, 
  setSelectedDiscounts 
}) => (
  <aside className="bg-[#d8e0afff] px-10 rounded-lg relative" 
  style={{ top: '-1vh', left: '-10vw', paddingRight: '10vw', paddingTop: '30px', paddingBottom: '30px' }}>
    <h2 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100">FILTERS</h2>
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">BRAND</h3>
      <ul className="space-y-2">
        {FILTER_OPTIONS.map(option => (
          <li key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              className="mr-2"
              onChange={() => {
                setSelectedBrands(prevBrands =>
                  prevBrands.includes(option.id)
                    ? prevBrands.filter(brand => brand !== option.id)
                    : [...prevBrands, option.id]
                );
              }}
            />
            <label htmlFor={option.id} className="text-green-800 dark:text-green-200">
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">PRICE</h3>
      <ul className="space-y-2">
        {PRICE_OPTIONS.map(option => (
          <li key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              className="mr-2"
              onChange={() => {
                setSelectedPrices(prevPrices =>
                  prevPrices.includes(option.id)
                    ? prevPrices.filter(price => price !== option.id)
                    : [...prevPrices, option.id]
                );
              }}
            />
            <label htmlFor={option.id} className="text-green-800 dark:text-green-200">
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">RATINGS</h3>
      <ul className="space-y-2">
        {RATINGS_OPTIONS.map(option => (
          <li key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              className="mr-2"
              onChange={() => {
                setSelectedRatings(prevRatings =>
                  prevRatings.includes(option.id.toString())
                    ? prevRatings.filter(rating => rating !== option.id.toString())
                    : [...prevRatings, option.id.toString()]
                );
              }}
            />
            <label htmlFor={option.id} className="text-green-800 dark:text-green-200">
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">DISCOUNT</h3>
      <ul className="space-y-2">
        {DISCOUNT_OPTIONS.map(option => (
          <li key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              className="mr-2"
              onChange={() => {
                setSelectedDiscounts(prevDiscounts =>
                  prevDiscounts.includes(option.id)
                    ? prevDiscounts.filter(discount => discount !== option.id)
                    : [...prevDiscounts, option.id]
                );
              }}
            />
            <label htmlFor={option.id} className="text-green-800 dark:text-green-200">
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
    <button className={SharedClasses.button} onClick={() => {
      setSelectedBrands([]);
      setSelectedPrices([]);
      setSelectedRatings([]);
      setSelectedDiscounts([]);
    }}>
      Clear All
    </button>
  </aside>
);

export default Aside;
