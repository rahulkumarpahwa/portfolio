"use client";
import React, { useState } from "react";

const Operators: React.FC = () => {
  const [fuzzySetA, setFuzzySetA] = useState<number[]>([]);
  const [fuzzySetB, setFuzzySetB] = useState<number[]>([]);
  const [result, setResult] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false); // New state to control result visibility

  const handleFuzzyUnion = () => {
    const union = fuzzySetA.map((value, index) =>
      Math.max(value, fuzzySetB[index] || 0)
    );
    setResult(union);
    setShowResult(true); // Show result
  };

  const handleFuzzyIntersection = () => {
    const intersection = fuzzySetA.map((value, index) =>
      Math.min(value, fuzzySetB[index] || 0)
    );
    setResult(intersection);
    setShowResult(true); // Show result
  };

  const handleFuzzyComplement = () => {
    const complement = fuzzySetA.map((value) => 1 - value);
    setResult(complement);
    setShowResult(true); // Show result
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFuzzySet: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    const values = e.target.value.split(",").map((v) => parseFloat(v.trim()));
    setFuzzySet(values.filter((v) => !isNaN(v) && v >= 0 && v <= 1)); // Ensure values are between 0 and 1
  };

  const handleReset = () => {
    setFuzzySetA([]);
    setFuzzySetB([]);
    setResult([]);
    setShowResult(false); // Hide result
  };

  return (
    <div className="flex items-center justify-center bg-[#51abb2] p-4 sm:p-6 lg:p-8 text-black dark:bg-black dark:text-white">
      <div className="w-full max-w-md text-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          Fuzzy Set Operations
        </h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm sm:text-base">
            Fuzzy Set A (comma-separated, values between 0 and 1):
          </label>
          <input
            type="text"
            className="border p-2 rounded w-full text-sm sm:text-base"
            onChange={(e) => handleInputChange(e, setFuzzySetA)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm sm:text-base">
            Fuzzy Set B (comma-separated, values between 0 and 1):
          </label>
          <input
            type="text"
            className="border p-2 rounded w-full text-sm sm:text-base"
            onChange={(e) => handleInputChange(e, setFuzzySetB)}
          />
        </div>
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded text-sm sm:text-base"
            onClick={handleFuzzyUnion}
          >
            Fuzzy Union
          </button>
          <button
            className="bg-green-500 text-white px-3 py-2 rounded text-sm sm:text-base"
            onClick={handleFuzzyIntersection}
          >
            Fuzzy Intersection
          </button>
          <button
            className="bg-red-500 text-white px-3 py-2 rounded text-sm sm:text-base"
            onClick={handleFuzzyComplement}
          >
            Fuzzy Complement
          </button>
          <button
            className="bg-gray-500 text-white px-3 py-2 rounded text-sm sm:text-base"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        {showResult && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold">Result:</h2>
            <p className="text-sm sm:text-base">{result.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Operators;
