"use client";

import { useState } from "react";
import BusinessCard from "./BusinessCard";

interface Business {
  id: string;
  businessName: string;
  contactNumber: string;
  discreption: string;
  totalProducts?: number;
  businessImage: string;
}

interface Props {
  businesses: Business[];
}

const SearchBusiness = ({
  businesses,
}: Props) => {

  const [search, setSearch] = useState("");

  const filteredBusinesses =
    businesses.filter((business) =>
      business.businessName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
      
      {/* Search Input */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search businesses..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-300 bg-white p-4 outline-none focus:border-indigo-500"
        />
      </div>

      {/* Business Grid */}
      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
        
        {filteredBusinesses.length === 0 ? (
          <div>
            <p className="text-slate-500">
              No businesses found.
            </p>
          </div>
        ) : (
          filteredBusinesses.map((business) => (
            <div
              key={business.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <BusinessCard
                id={business.id}
                businessName={
                  business.businessName
                }
                contactNumber={
                  business.contactNumber
                }
                discreption={
                  business.discreption
                }
                totalProducts={
                  business.totalProducts
                }
                businessImage={
                  business.businessImage
}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBusiness;