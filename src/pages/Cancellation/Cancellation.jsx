import React from 'react';
import cancel from '../../assets/cancel.png';

const CancellationPage = () => {
  return (
    <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center justify-center">
      
      <main className="bg-[#FFF5EE] p-10 rounded-lg shadow-lg text-center max-w-3xl mx-auto mt-6"style={{border:'2px solid #3779edff'}}>
        <div className="mb-6">
          <img src={cancel} alt="Sad Box" className="mx-auto mb-4" style={{width: '250px',borderRadius:'50%'}} />
          <h1 className="text-3xl font-bold text-green-900">Are you sure you want to cancel?</h1>
        </div>
        <p className="text-gray-700 mb-6">
          Sorry to see you cancel. Please tell us the reason and we will try to make your
          shopping experience better! It may take a few days to return. Please wait patiently.
        </p>
        <div className="mb-6">
          <textarea
            className="w-full p-4 rounded-lg border border-gray-300 resize-none h-32 bg-[#686469ff] text-white"
            placeholder="Please tell us the reason."
          />
        </div>
        <button className="bg-[#ad8c74ff] text-white py-2 px-6 rounded-lg hover:bg-brown-700 transition-colors duration-300">
          Cancel Order
        </button>
      </main>
      
    </div>
    
  );
};

export default CancellationPage;
