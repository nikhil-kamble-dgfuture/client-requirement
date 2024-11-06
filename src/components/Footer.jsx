
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-6"> {/* Reduced py-10 to py-6 */}
        {/* Footer content (such as the download section) is commented out for now */}
        <div className="mt-10 flex flex-col md:flex-row md:justify-center items-center text-sm text-gray-400 space-x-4"> {/* Reduced space between items */}
          <div className="order-1 md:order-2 flex space-x-4"> {/* Reduced space between items */}
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
