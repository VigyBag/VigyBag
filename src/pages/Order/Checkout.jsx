import { useState } from 'react';
import ProgressBar from '../../components/Order/ProgressBar';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    pinCode: '',
    address: '',
    locality: '',
    saveAs: 'home',
    defaultAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fff0e3ff] py-10 mt-1">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-1 w-full" style={{ backgroundColor: '#fff0e3ff' }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Checkout</h2>
        </div>
        {/*<ProgressBar />*/}

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-6 md:mb-0">
            <div className="border p-4 rounded-lg mb-6" style={{ border: '2px solid grey' }}>
              <p className="font-semibold mb-2">Default Address</p>
              <p>4-JHA-6, Vigyan Nagar, Kota, Rajasthan 324005</p>
            </div>
            <form onSubmit={handleSubmit} style={{ border: '2px solid grey', padding: '13px 13px', borderRadius: '10px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Mobile No</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Pin Code</label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Address (house no, building, street)</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Locality/Town</label>
                <input
                  type="text"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Save Address As</label>
                <select
                  name="saveAs"
                  value={formData.saveAs}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="defaultAddress"
                    checked={formData.defaultAddress}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Make this my default address</span>
                </label>
              </div>
              <div className="flex justify-between mb-6">
                <button type="button" className="px-4 py-2 bg-gray-300 rounded">Back to Cart</button>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Proceed to Payment</button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/3 pl-0 md:pl-4">
            <div className="border p-4 rounded-lg" style={{ border: '2px solid grey' }}>
              <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
              <ul className="list-disc pl-5 mb-2">
                <li>Eco-friendly Coffee Mug: ₹300</li>
                <li>Handwoven Doormat: ₹275</li>
                <li>Bamboo Insulated Tumbler with Strainer: ₹350</li>
                <li>Storage Basket and Container: ₹175</li>
              </ul>
              <p className="font-medium mb-2">Shipping Charges: Free</p>
              <p className="text-xl font-bold">Total: ₹1100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
