"use client";

import React from "react";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  setLanguage,
}) => {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-gray-800 text-white p-2 rounded"
    >
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="cpp">C++</option>
      <option value="java">Java</option>
    </select>
  );
};
