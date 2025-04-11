"use client";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  buttonText,
  onClick,
}) => (
  <div className="bg-blue-50 rounded-md p-9 text-center shadow-sm hover:shadow-lg transition duration-300 ">
    <h3 className="text-xl leading-6 font-semibold  mb-2">{title}</h3>
    <p className="text-sm  mb-4">{description}</p>
    <button
      className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
      onClick={onClick}
    >
      {buttonText}
    </button>
  </div>
);

const MedrixServices: React.FC = () => {
  return (
    <div className="py-20 text-center bg-blue-100">
      <h2 className="text-4xl font-semibold text-blue-900 mb-8 ">
        What You Can Do on Medrix
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <ServiceCard
          title="Order Medicines"
          description="Easily search and order genuine medicines from nearby pharmacies with home delivery."
          buttonText="Order Now"
          onClick={() => console.log("Order Medicines clicked")}
        />
        <ServiceCard
          title="Book Doctor Appointments"
          description="Find doctors by specialty and book appointments at your convenience."
          buttonText="Book Appointment"
          onClick={() => console.log("Book Doctor Appointments clicked")}
        />
        <ServiceCard
          title="Book Lab Tests"
          description="Schedule lab tests and get reports digitally from trusted diagnostic centers."
          buttonText="Book Lab Test"
          onClick={() => console.log("Book Lab Tests clicked")}
        />
      </div>
    </div>
  );
};

export default MedrixServices;
