import Image from "next/image";
import React from "react";
import about from "../assets/about.png";
const AboutSection = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-500 to-indigo-500">
      <div className="uppercase   w-full p-10 text-white font-bold ">
        <h2 className="text-5xl text-center underline underline-offset-8">
          About Medrix
        </h2>
      </div>
      <div className="flex p-15 ">
        <div className="flex-1">
          <Image src={about} alt="about us image" />
        </div>
        <div className="text-white  px-10 w-1/2 text-left   ">
          <p className="text-3xl mb-4 font-medium">
            Smarter Health, Seamlessly Delivered.
          </p>
          <p className="">
            At Medrix, our mission is to revolutionize healthcare accessibility
            across India by building a digitally unified ecosystem for supply
            and services. We are driven to eliminate inefficiencies, bridge gaps
            in information, and empower stakeholders – from providers to
            patients – with the tools they need for a healthier future. By
            leveraging cutting-edge technology, including AI-driven insights, we
            strive to ensure real-time availability of essential healthcare
            products and services, fostering a more responsive and equitable
            healthcare landscape for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
