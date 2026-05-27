"use client";

import Link from "next/link";
import { useState } from "react";

const DashboardButton = () => {

  const [isVisible, setIsVisible] =
    useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() =>
        setIsVisible(true)
      }
      onMouseLeave={() =>
        setIsVisible(false)
      }
    >

      {/* Button */}
      <button
        type="button"
        className="inline-flex items-center justify-between rounded-md px-3 py-2 font-medium text-gray-700 transition-all duration-300 hover:text-indigo-600 focus:outline-none"
      >
        <span className="flex-shrink-0">
          Dashboard
        </span>

        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="ml-1 h-5 w-5 flex-shrink-0"
        >
          <path
            className={`origin-center transform transition duration-300 ease-in-out ${
              isVisible
                ? "rotate-180"
                : ""
            }`}
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 z-50 pt-2 transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative rounded-md border border-gray-200 bg-white py-1 shadow-xl">

          {/* Arrow */}
          <div className="absolute top-0 right-6 h-4 w-4 -translate-y-2 rotate-45 rounded-sm border-l border-t border-gray-200 bg-white"></div>

          <div className="relative min-w-[220px]">

            <Link
              href="/dashboard"
              className="block w-full px-4 py-2 font-medium text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/add-product"
              className="block w-full px-4 py-2 font-medium text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              Add Product
            </Link>

            <Link
              href="/dashboard/my-products"
              className="block w-full px-4 py-2 font-medium text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              My Products
            </Link>

            <Link
              href="/dashboard/edit-profile"
              className="block w-full px-4 py-2 font-medium text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              Edit Profile
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardButton;