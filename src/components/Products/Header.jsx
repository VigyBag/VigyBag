import React from 'react';
import bambooLeft from '../../assets/bamboo_left.png';
import bambooRight from '../../assets/bamboo_right.png';

const SharedClasses = {
  cardContainer: 'bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
  button: 'bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700 transition-colors duration-300',
  headerImage: 'h-24 lg:h-32 object-cover'
};

const Header = () => (
  <header className="p-6 flex items-center justify-between relative mt-1">
    <img src={bambooLeft} alt="Bamboo Left" className={`absolute left-0 top-0 ${SharedClasses.headerImage}`} />
    <div className="text-center w-full bg-gradient-to-tr from-yellow-300 to-green-700 h-[16.5vh] rounded-lg mt-[-2.5vh]">
      <h1 className="text-4xl font-bold text-green-900 dark:text-green-100 mt-6 ">BAMBOO PRODUCTS</h1>
      <p className="text-lg text-green-700 dark:text-green-300">Home / Bamboo products</p>
    </div>
    <img src={bambooRight} alt="Bamboo Right" className={`absolute right-0 top-0 ${SharedClasses.headerImage}`} />
  </header>
);

export default Header;
