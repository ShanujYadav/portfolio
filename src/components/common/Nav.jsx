import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900 font-serif">
              Shanuj 
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* <div
            className={`${isOpen ? 'block' : 'hidden'
              } w-full md:w-auto md:flex md:items-center md:justify-end`}
          >
            <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
              <a href="/" className="text-gray-800 py-2 px-4 hover:text-blue-600 font-serif">
                Home
              </a>
              <a href="/" className="text-gray-800 py-2 px-4 hover:text-blue-600 font-serif">
                About
              </a>
              <a href="/" className="text-gray-800 py-2 px-4 hover:text-blue-600 font-serif">
                Project
              </a>
              <a href="/" className="text-gray-800 py-2 px-4 hover:text-blue-600 font-serif">
                Contact
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
