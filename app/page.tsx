import React from "react";
import Image from "next/image";
import Hero from "../public/Hero.png";
import DecodeText from "./components/DecodeText";
import { BsArrowRight } from "react-icons/bs";
import ProviderCarousel from "./components/ProviderCarousel";
import MedrixServices from "./components/MedrixServices";
import WholesaleSection from "./components/WholesaleSection";
import AboutSection from "./components/AboutSection";
import ContactUsSection from "./components/ContactUsSection";
import SymptomsCheckerSection from "./components/SymptomsCheckerSection";

const Home = () => {
  return (
    <main className="w-full ">
      <section className="text-white py-8 grid grid-cols-2 bg-gradient-to-br from-indigo-500 to-blue-500 mt-2 rounded-md">
        <div className="w-5/6  mx-auto ">
          <h1 className="text-7xl font-bold mt-6 mb-6 text-wrap">
            Welcome to <DecodeText text="Medrix" speed={50} />
          </h1>
          <p className="text-white/50 text-xl w-6/7">
            Your one-stop platform connecting pharmacies, clinics, diagnostic
            centers, hospitals, and medical suppliers for efficient, intelligent
            healthcare delivery.
          </p>
          <div className="w-full mt-8">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xl font-medium cursor-pointer">
              Get Started <BsArrowRight className="inline" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-blue-400 border-2 ">
            <Image src={Hero} alt="hero" />
          </div>
        </div>
      </section>
      <section
        id="services"
        className=" mt-2 rounded-md overflow-hidden shadow-md"
      >
        <MedrixServices />
      </section>
      <section
        id="provider"
        className="bg-white grid-cols-2 grid py-8 mt-2 rounded-md"
      >
        <div className="w-4/6 mx-auto my-20 ">
          <h2 className="text-6xl  text-center font-mono capitalize">
            You can join us as a <DecodeText text="Provider" speed={50} />
          </h2>
        </div>
        <div className="w-4/5 mx-auto my-auto  h-full ">
          <ProviderCarousel />
        </div>
      </section>

      <section id="suppliers" className="default-section p-24">
        <WholesaleSection />
      </section>
      <section>
        <SymptomsCheckerSection />
      </section>
      <section id="about" className="default-section">
        <AboutSection />
      </section>
      <section id="contact" className="default-section">
        <ContactUsSection />
      </section>
    </main>
  );
};

export default Home;
