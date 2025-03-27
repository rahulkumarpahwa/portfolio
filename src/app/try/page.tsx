"use client";

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { LanguageSelector } from "@/components/try/LanguageSelector";
import { CodeEditor } from "@/components/try/CodeEditor";
import { OutputPanel } from "@/components/try/OutputPanel";

const Try = () => {
  const [code, setCode] = useState('print("Hello, World!")'); // Default to Python
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python"); // Default language is Python
  const [error, setError] = useState("");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    switch (language) {
      case "javascript":
        setCode('console.log("Hello, World!");');
        break;
      case "python":
        setCode('print("Hello, World!")');
        break;
      case "cpp":
        setCode(
          '#include <iostream>\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}'
        );
        break;
      case "java":
        setCode(
          'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
        );
        break;
      default:
        setCode('print("Hello, World!")');
    }
  }, [language]);

  const handleRun = async () => {
    setRunning(true);
    setError("");
    setOutput("");

    try {
      const response = await fetch("/api/compile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language }),
      });

      if (!response.ok) {
        throw new Error("Failed to compile code.");
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setOutput(data.output);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setRunning(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "Enter") {
        handleRun();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [code, language]);

  return (
    <div className="min-h-screen bg-[#51abb2] dark:bg-black text-white p-4 pt-8 pb-8 flex flex-col items-center justify-center">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Online Code Compiler</h1>
      </header>
      <div className="flex space-x-4 mb-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <button
          onClick={handleRun}
          disabled={running}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center ${
            running ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Play className="mr-2" />
          {running ? "Running..." : "Run"}
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4 w-full max-w-3xl">
        {/* Input (Code Editor) */}
        <CodeEditor code={code} setCode={setCode} />
        {/* Output (Output Panel) */}
        <OutputPanel output={output} error={error} />
      </div>
    </div>
  );
};

export default Try;
