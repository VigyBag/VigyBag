import React, { useEffect, useState } from 'react';
import Header from '../../components/Products/Header';
import Nav from '../../components/Products/Navbar';
import Aside from '../../components/Products/Aside';
import Main from '../../components/Products/Main';

const BambooProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [sortBy, setSortBy] = useState('high-low');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const applyFilters = () => {
    let filteredProducts = [...products];

    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedBrands.includes(product.category)
      );
    }

    if (selectedPrices.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.price);
        return selectedPrices.includes('under-200') && price < 200 ||
          selectedPrices.includes('under-500') && price < 500 ||
          selectedPrices.includes('under-750') && price < 750;
      });
    }

    if (selectedRatings.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedRatings.includes(product.rating.rate.toString())
      );
    }

    if (selectedDiscounts.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedDiscounts.includes(product.discount)
      );
    }

    return filteredProducts;
  };

  const sortProducts = (products) => {
    if (sortBy === 'high-low') {
      return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === 'low-high') {
      return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    return products;
  };

  if (loading) {
    return <div className="w-full min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full bg-[#fff0e3ff]">
      <Header />
      <Nav />
      <div className="flex max-w-6xl mx-auto mt-6">
        <Aside 
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedPrices={selectedPrices}
          setSelectedPrices={setSelectedPrices}
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
          selectedDiscounts={selectedDiscounts}
          setSelectedDiscounts={setSelectedDiscounts}
        />
        <Main 
          products={products} 
          applyFilters={applyFilters}
          sortProducts={sortProducts}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </div>
  );
};

export default BambooProducts;
