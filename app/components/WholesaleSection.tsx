"use client";
import React from "react";
import shipment from "../assets/shipment.png";
import Image from "next/image";
import DecodeText from "./DecodeText";

const WholesaleSection: React.FC = () => {
  return (
    <div className="  flex justify-between items-center">
      <div className="flex-1">
        <Image src={shipment} alt="shipment img" />
      </div>
      <div className="flex-1 text-center bg-gray-100 py-8 px-6 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          For Wholesalers, Distributors & Manufacturers
        </h2>
        <p className="text-gray-600/80 mb-8 px-8">
          Expand your reach by connecting directly with pharmacies, clinics, and
          hospitals. Use AI-driven analytics to track demand, supply, and stock
          movement.
        </p>
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          onClick={() => console.log("Partner with Medrix clicked")}
        >
          Partner with Medrix
        </button>
      </div>
    </div>
  );
};

export default WholesaleSection;
