"use client";

import React from "react";

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="bg-gray-800 text-white p-4 rounded w-full h-64 resize-none"
    />
  );
};
