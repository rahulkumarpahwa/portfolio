"use client";

import React from "react";

interface OutputPanelProps {
  output: string;
  error: string;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ output, error }) => {
  return (
    <div className="w-full p-4 bg-gray-800 text-white rounded h-64 overflow-y-auto">
      {error && (
        <div className="bg-red-800 text-white p-2 rounded mb-2">{error}</div>
      )}
      <pre>{output}</pre>
    </div>
  );
};
