"use client";
import React, { useState } from "react";

const CompositionCal: React.FC = () => {
  const [matrixA, setMatrixA] = useState<number[][]>([]);
  const [matrixB, setMatrixB] = useState<number[][]>([]);
  const [result, setResult] = useState<number[][] | null>(null);
  const [mode, setMode] = useState<"max-min" | "max-product">("max-min");
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"size" | "values">("size");
  const [rowsA, setRowsA] = useState(0);
  const [colsA, setColsA] = useState(0);
  const [rowsB, setRowsB] = useState(0);
  const [colsB, setColsB] = useState(0);

  const handleMatrixResize = (rows: number, cols: number): number[][] => {
    return Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));
  };

  const handleSizeSubmit = () => {
    if (rowsA <= 0 || colsA <= 0 || rowsB <= 0 || colsB <= 0) {
      setError("Please enter valid positive integers for rows and columns.");
      return;
    }
    if (colsA !== rowsB) {
      setError(
        "Number of columns in Matrix A must match the number of rows in Matrix B."
      );
      return;
    }
    setMatrixA(handleMatrixResize(rowsA, colsA));
    setMatrixB(handleMatrixResize(rowsB, colsB));
    setError(null);
    setStep("values");
  };

  const handleMatrixChange = (
    matrix: number[][],
    setMatrix: React.Dispatch<React.SetStateAction<number[][]>>,
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newMatrix = [...matrix];
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      newMatrix[rowIndex][colIndex] = parsedValue;
      setMatrix(newMatrix);
      setError(null);
    } else {
      setError("Please enter valid numeric values.");
    }
  };

  const calculateMaxMinComposition = () => {
    if (!validateMatrices()) return;

    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const resultMatrix: number[][] = Array(rowsA)
      .fill(0)
      .map(() => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        let maxMin = 0;
        for (let k = 0; k < colsA; k++) {
          maxMin = Math.max(maxMin, Math.min(matrixA[i][k], matrixB[k][j]));
        }
        resultMatrix[i][j] = maxMin;
      }
    }
    setResult(resultMatrix);
  };

  const calculateMaxProductComposition = () => {
    if (!validateMatrices()) return;

    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const resultMatrix: number[][] = Array(rowsA)
      .fill(0)
      .map(() => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        let maxProduct = 0;
        for (let k = 0; k < colsA; k++) {
          maxProduct = Math.max(maxProduct, matrixA[i][k] * matrixB[k][j]);
        }
        resultMatrix[i][j] = maxProduct;
      }
    }
    setResult(resultMatrix);
  };

  const validateMatrices = () => {
    if (matrixA.length === 0 || matrixB.length === 0) {
      setError("Both matrices must have values.");
      return false;
    }
    if (matrixA[0].length !== matrixB.length) {
      setError(
        "Number of columns in Matrix A must match the number of rows in Matrix B."
      );
      return false;
    }
    return true;
  };

  const resetState = () => {
    setMatrixA([]);
    setMatrixB([]);
    setResult(null);
    setMode("max-min");
    setError(null);
    setStep("size");
    setRowsA(0);
    setColsA(0);
    setRowsB(0);
    setColsB(0);
  };

  return (
    <div className="flex flex-col items-center justify-center p-16 bg-[#51abb2] text-black dark:text-white dark:bg-black p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Fuzzy Matrix Composition</h1>
      <div className="w-full max-w-2xl">
        {step === "size" ? (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-semibold mb-2 text-center">Matrix A Size</h2>
              <div className="flex justify-center gap-4">
                <input
                  type="number"
                  placeholder="Rows"
                  value={rowsA}
                  onChange={(e) => setRowsA(parseInt(e.target.value, 10))}
                  className="w-20 p-2 border border-black dark:border-white text-center"
                />
                <input
                  type="number"
                  placeholder="Columns"
                  value={colsA}
                  onChange={(e) => setColsA(parseInt(e.target.value, 10))}
                  className="w-20 p-2 border border-black dark:border-white text-center"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2 text-center">Matrix B Size</h2>
              <div className="flex justify-center gap-4">
                <input
                  type="number"
                  placeholder="Rows"
                  value={rowsB}
                  onChange={(e) => setRowsB(parseInt(e.target.value, 10))}
                  className="w-20 p-2 border border-black dark:border-white text-center"
                />
                <input
                  type="number"
                  placeholder="Columns"
                  value={colsB}
                  onChange={(e) => setColsB(parseInt(e.target.value, 10))}
                  className="w-20 p-2 border border-black dark:border-white text-center"
                />
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleSizeSubmit}
                className="px-6 py-2 bg-white text-black dark:bg-gray-800 dark:text-white rounded shadow"
              >
                Submit Sizes
              </button>
              <button
                onClick={resetState}
                className="px-6 py-2 bg-red-500 text-white rounded shadow"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-semibold mb-4 text-center">Matrix A</h2>
              <div className="flex flex-col items-center gap-2">
                {matrixA.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-2">
                    {row.map((value, colIndex) => (
                      <input
                        key={colIndex}
                        type="number"
                        value={value}
                        onChange={(e) =>
                          handleMatrixChange(
                            matrixA,
                            setMatrixA,
                            rowIndex,
                            colIndex,
                            e.target.value
                          )
                        }
                        className="w-16 p-2 border border-black dark:border-white text-center"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-4 text-center">Matrix B</h2>
              <div className="flex flex-col items-center gap-2">
                {matrixB.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-2">
                    {row.map((value, colIndex) => (
                      <input
                        key={colIndex}
                        type="number"
                        value={value}
                        onChange={(e) =>
                          handleMatrixChange(
                            matrixB,
                            setMatrixB,
                            rowIndex,
                            colIndex,
                            e.target.value
                          )
                        }
                        className="w-16 p-2 border border-black dark:border-white text-center"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => {
                  setMode("max-min");
                  calculateMaxMinComposition();
                }}
                className="px-6 py-2 bg-white text-black dark:bg-gray-800 dark:text-white rounded shadow"
              >
                Max-Min Composition
              </button>
              <button
                onClick={() => {
                  setMode("max-product");
                  calculateMaxProductComposition();
                }}
                className="px-6 py-2 bg-white text-black dark:bg-gray-800 dark:text-white rounded shadow"
              >
                Max-Product Composition
              </button>
            </div>
          </div>
        )}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {result && (
          <div className="flex flex-col items-center mt-6">
            <h2 className="text-xl font-semibold mb-4">
              {mode === "max-min"
                ? "Max-Min Composition"
                : "Max-Product Composition"}
            </h2>
            <div className="flex flex-col items-center gap-2">
              {result.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2">
                  {row.map((value, colIndex) => (
                    <div
                      key={colIndex}
                      className="px-4 py-2 border border-black dark:border-white text-center"
                    >
                      {value.toFixed(2)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button
              onClick={resetState}
              className="mt-4 px-6 py-2 bg-white text-black dark:bg-gray-800 dark:text-white rounded shadow"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompositionCal;
