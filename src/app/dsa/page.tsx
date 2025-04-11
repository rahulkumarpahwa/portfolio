"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import dropdown icons

const DsaPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedRow, setExpandedRow] = useState<number | null>(null); // Track expanded row
    const [expandedSubstep, setExpandedSubstep] = useState<number | null>(null); // Track expanded substep

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/dsa");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleRow = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index); // Toggle row expansion
    };

    const toggleSubstep = (index: number) => {
        setExpandedSubstep(expandedSubstep === index ? null : index); // Toggle substep expansion
    };

    if (loading) return <p className="text-center text-lg font-medium">Loading...</p>;
    if (error) return <p className="text-center text-lg font-medium text-red-500">Error: {error}</p>;

    return (
        <div className="bg-[#51abb2] min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">DSA Sheet</h1>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300 bg-white">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
                                    #
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
                                    Topic
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(
                                (
                                    item: {
                                        step: string;
                                        name: string;
                                        substeps: {
                                            substep: string;
                                            name: string;
                                            problems: {
                                                topic: string;
                                                gfg: string;
                                                video: string;
                                                leetcode: string;
                                            }[];
                                        }[];
                                    },
                                    index: number
                                ) => (
                                    <React.Fragment key={index}>
                                        <tr
                                            className={`${
                                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } hover:bg-gray-100`}
                                        >
                                            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                                                {item.step}
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 flex items-center justify-between">
                                                {item.name}
                                                <button
                                                    className="flex items-center bg-blue-500 text-white px-3 py-1 rounded text-sm"
                                                    onClick={() => toggleRow(index)}
                                                >
                                                    {expandedRow === index ? (
                                                        <FaChevronUp />
                                                    ) : (
                                                        <FaChevronDown />
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                        {expandedRow === index &&
                                            item.substeps.map((substep, subIndex) => (
                                                <React.Fragment key={subIndex}>
                                                    <tr className="bg-blue-100">
                                                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                                                            {substep.substep}
                                                        </td>
                                                        <td
                                                            className="px-4 py-2 border border-gray-300 text-sm text-gray-700"
                                                        >
                                                            {substep.name}
                                                            <button
                                                                className="ml-4 bg-green-500 text-white px-3 py-1 rounded text-sm"
                                                                onClick={() => toggleSubstep(subIndex)}
                                                            >
                                                                {expandedSubstep === subIndex
                                                                    ? "Hide Problems"
                                                                    : "Show Problems"}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    {expandedSubstep === subIndex && (
                                                        <tr>
                                                            <td
                                                                colSpan={2}
                                                                className="px-4 py-2 border border-gray-300"
                                                            >
                                                                <table className="table-auto w-full border border-gray-300">
                                                                    <thead>
                                                                        <tr className="bg-gray-100">
                                                                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
                                                                                Topic
                                                                            </th>
                                                                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
                                                                                GFG
                                                                            </th>
                                                                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
                                                                                Video
                                                                            </th>
                                                                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
                                                                                LeetCode
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {substep.problems.map(
                                                                            (problem, problemIndex) => (
                                                                                <tr key={problemIndex}>
                                                                                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                                                                                        {problem.topic || "N/A"}
                                                                                    </td>
                                                                                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                                                                                        <a
                                                                                            href={problem.gfg}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            className="text-blue-500 underline"
                                                                                        >
                                                                                            Link
                                                                                        </a>
                                                                                    </td>
                                                                                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                                                                                        {problem.video ? (
                                                                                            <a
                                                                                                href={problem.video}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="text-blue-500 underline"
                                                                                            >
                                                                                                Watch
                                                                                            </a>
                                                                                        ) : (
                                                                                            "N/A"
                                                                                        )}
                                                                                    </td>
                                                                                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                                                                                        {problem.leetcode ? (
                                                                                            <a
                                                                                                href={problem.leetcode}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="text-blue-500 underline"
                                                                                            >
                                                                                                Solve
                                                                                            </a>
                                                                                        ) : (
                                                                                            "N/A"
                                                                                        )}
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                    </React.Fragment>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DsaPage;