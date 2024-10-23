import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className='mb-4 ml-40'>
        <button
          className='w-[60%] h-24 bg-white dark:bg-gray-800 dark:text-gray-100 py-4 px-6 rounded-lg shadow-md flex justify-between items-center'
          onClick={toggle}
        >
          <span className='text-lg font-medium'>{question}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <div className='mt-2 px-6 py-4 bg-gray-100 dark:bg-gray-700 rounded-lg w-[60%]'>
            <p className='text-gray-700 dark:text-gray-300'>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    { question: 'What products do you offer?', answer: 'We offer a dazzling array of phones, laptops, and more!' },
    { question: 'How do I place an order?', answer: 'Just click, buy, and enjoy the ride!' },
    { question: 'Is shipping really free?', answer: 'Absolutely! Free shipping on all orders!' },
    { question: 'Can I return my purchase?', answer: 'Yes, returns are easy-peasy lemon squeezy!' },
    { question: 'Do you have a warranty?', answer: 'Of course! We stand by our products!' },
  ];

  return (
    <div className='mt-20'>
      <h1 className="text-center font-bold text-6xl dark:text-gray-100">Curious Minds Ask</h1>
      <div className='h-[90vh] w-[90%] p-8 mt-10'>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
