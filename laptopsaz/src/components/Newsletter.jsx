import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg text-center my-8">
      <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
      <p className="mb-4">Get the latest updates and offers.</p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <input type="email" placeholder="Your email" className="p-2 rounded border border-gray-300" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
