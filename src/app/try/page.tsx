'use client';

import { CodeEditor } from '@/components/try/CodeEditor';
import { LanguageSelector } from '@/components/try/LanguageSelector';
import { OutputPanel } from '@/components/try/OutputPanel';
import { Play } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

const Try = () => {
  const [code, setCode] = useState('print("Hello, World!")'); // Default to Python
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python'); // Default language is Python
  const [error, setError] = useState('');
  const [running, setRunning] = useState(false);

  useEffect(() => {
    switch (language) {
      case 'javascript':
        setCode('console.log("Hello, World!");');
        break;
      case 'python':
        setCode('print("Hello, World!")');
        break;
      case 'cpp':
        setCode(
          '#include <iostream>\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}',
        );
        break;
      case 'java':
        setCode(
          'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
        );
        break;
      default:
        setCode('print("Hello, World!")');
    }
  }, [language]);

  const handleRun = useCallback(async () => {
    setRunning(true);
    setError('');
    setOutput('');

    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      if (!response.ok) {
        throw new Error('Failed to compile code.');
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setOutput(data.output);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred.';
      setError(message);
    } finally {
      setRunning(false);
    }
  }, [code, language]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'Enter') {
        handleRun();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [code, language, handleRun]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#51abb2] p-4 pt-8 pb-8 text-white dark:bg-black">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Online Code Compiler</h1>
      </header>
      <div className="mb-4 flex space-x-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <button
          onClick={handleRun}
          disabled={running}
          className={`flex items-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
            running ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          <Play className="mr-2" />
          {running ? 'Running...' : 'Run'}
        </button>
      </div>
      <div className="flex w-full max-w-3xl flex-col items-center space-y-4">
        {/* Input (Code Editor) */}
        <CodeEditor code={code} setCode={setCode} />
        {/* Output (Output Panel) */}
        <OutputPanel output={output} error={error} />
      </div>
    </div>
  );
};

export default Try;
