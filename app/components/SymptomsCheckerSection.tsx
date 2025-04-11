"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SymptomsCheckerSection: React.FC = () => {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleCheckSymptoms = () => {
    console.log("Checking symptoms:", { symptoms, age, gender });
    // Implement your symptom checker logic here
  };

  return (
    <section className="bg-blue-50 py-16 rounded-lg shadow-md mt-2">
      <div className="max-w-[950px] mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Check Your Symptoms with Our AI-Powered Tool
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Get a preliminary understanding of your potential health concerns with
          our intelligent symptom checker. Provide some information and receive
          relevant insights to help you make informed decisions about your
          health journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 w-full sm:w-2/3 mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your symptoms"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="number"
              min={1}
              max={200}
              placeholder="Age (in years)"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="shadow appearance-none border rounded w-full text-center py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          onClick={handleCheckSymptoms}
        >
          <FaSearch className="inline mr-2" /> Check Symptoms
        </button>
        <p className="text-sm text-gray-500 mt-4">
          <span className="font-semibold">Disclaimer:</span> This tool provides
          preliminary information and should not be considered a substitute for
          professional medical advice. Always consult with a qualified
          healthcare provider for diagnosis and treatment.
        </p>
      </div>
    </section>
  );
};

export default SymptomsCheckerSection;
