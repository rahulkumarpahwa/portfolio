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
        <div className="flex items-center justify-center h-screen bg-[#51abb2] text-black dark:text-white">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Fuzzy Set Operations</h1>
                <div className="mb-4">
                    <label className="block mb-2">Fuzzy Set A (comma-separated, values between 0 and 1):</label>
                    <input
                        type="text"
                        className="border p-2 rounded w-full"
                        onChange={(e) => handleInputChange(e, setFuzzySetA)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Fuzzy Set B (comma-separated, values between 0 and 1):</label>
                    <input
                        type="text"
                        className="border p-2 rounded w-full"
                        onChange={(e) => handleInputChange(e, setFuzzySetB)}
                    />
                </div>
                <div className="mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleFuzzyUnion}
                    >
                        Fuzzy Union
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleFuzzyIntersection}
                    >
                        Fuzzy Intersection
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleFuzzyComplement}
                    >
                        Fuzzy Complement
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
                {showResult && ( // Conditionally render the result heading and values
                    <div>
                        <h2 className="text-xl font-bold">Result:</h2>
                        <p>{result.join(", ")}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Operators;