import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const faqData = [
  {
    question: "Why are there different prices for the same product? Is it legal",
    answer: "Different prices for the same product can occur due to variations in size, color, seller, or other factors. This practice is generally legal as long as it's not discriminatory. Always check the specific details of the product you're interested in."
  },
  {
    question: "I saw the product at Rs. 1000 but post clicking on the product, there are multiple prices and the size which I want is being sold for Rs. 1600. Why is there a change in price in the product description page?",
    answer: "Price variations can occur due to different sizes, colors, or sellers offering the same product. The initial price you saw might have been for a different variant. Always review the final price for your specific selection before purchasing."
  },
  {
    question: "How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?",
    answer: "Be cautious of unsolicited communications. Legitimate companies won't ask for sensitive information via email or phone. Don't click suspicious links or provide personal data. When in doubt, contact the company directly using official channels."
  },
  {
    question: "How will I identify a genuine appointment letter?",
    answer: "A genuine appointment letter should come from an official company email, include specific job details, company letterhead, and contact information. If unsure, verify with the company's HR department directly."
  },
  {
    question: "Why will 'My Cashback' not be available on VigyBag?",
    answer: "VigyBag may have changed its rewards program or temporarily suspended cashback offers. For the most up-to-date information on our rewards system, please check our current promotions or contact customer support."
  },
  {
    question: "How do I cancel the order, I have placed?",
    answer: "To cancel an order, log into your account, go to 'My Orders', find the order you wish to cancel, and click the 'Cancel Order' button if it's still eligible for cancellation. If you don't see this option, contact our customer support."
  },
  {
    question: "How do I create a Return Request?",
    answer: "To create a Return Request, go to 'My Orders', select the item you want to return, click 'Return or Replace Items', choose a reason for the return, and follow the prompts to complete the process."
  },
  {
    question: "I have created a Return request. When will the product be picked up?",
    answer: "Once your return request is approved, pickup is typically scheduled within 3-5 business days. You'll receive a confirmation email with the expected pickup date. Ensure the item is packaged and ready for collection."
  },
  {
    question: "I have created a Return request. When will I get the refund?",
    answer: "After we receive and inspect the returned item, refunds are usually processed within 5-7 business days. The actual time to reflect in your account may vary depending on your payment method and bank."
  },
  {
    question: "Where should I self-ship the Returns?",
    answer: "For self-shipping returns, please use the address provided in your return confirmation email. Ensure you include your order number and return authorization in the package for quick processing."
  },
  {
    question: "I have accumulated VigyBag Points in my account. How can I redeem them?",
    answer: "To redeem VigyBag Points, log into your account, go to the 'My Rewards' section, and select 'Redeem Points'. You can apply these points during checkout or exchange them for rewards in our rewards catalog."
  },
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{question}</span>
          <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform`}>
            ▼
          </span>
        </button>
        {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
      </div>
    );
  }
  
  function App() {
    return (
      <div className="min-h-screen flex flex-col bg-[#f9e7dd]">
       
  
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
            <div className="mt-6 text-center">
            <Link to="/contact"> <p className="text-gray-600">Still need help?</p>
              
                <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default App;