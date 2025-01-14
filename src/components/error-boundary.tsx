"use client";

import { useEffect } from "react";

export function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 border border-red-500 bg-red-100 rounded-md">
      <h2 className="text-lg font-semibold text-red-700 mb-2">
        Algo deu errado...
      </h2>
      <p className="text-red-600 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Tente novamente
      </button>
    </div>
  );
}
