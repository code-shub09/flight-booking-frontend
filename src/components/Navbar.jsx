

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md  relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-teal-600 font-bold text-xl">SkyPlane</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/help"
              className="text-gray-700 hover:text-teal-600 text-sm font-medium"
            >
              Help
            </a>
            <a
              href="/my-trips"
              className="text-gray-700 hover:text-teal-600 text-sm font-medium"
            >
              My Trips
            </a>
            <a
              href="/signup"
              className="px-4 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="px-4 py-1 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Log In
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="/help"
            className="block text-gray-700 hover:text-teal-600 text-sm font-medium"
          >
            Help
          </a>
          <a
            href="/my-trips"
            className="block text-gray-700 hover:text-teal-600 text-sm font-medium"
          >
            My Trips
          </a>
          <a
            href="/signup"
            className="block px-4 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 w-fit"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="block px-4 py-1 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 w-fit"
          >
            Log In
          </a>
        </div>
      )}
    </nav>
  );
}

